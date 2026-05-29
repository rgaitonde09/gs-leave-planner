import {
  SOURCE_NOTES,
  SCHEDULE_PRESETS,
  calculatePlanner,
  createMarkdownExport,
  formatDate,
  parseMarkdownImport,
} from "./planner-core.js";

const dayLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const fullDayLabels = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const defaultSchedule = [...SCHEDULE_PRESETS.standard.hours];

const els = {
  currentDate: document.querySelector("#currentDate"),
  serviceTier: document.querySelector("#serviceTier"),
  annualBalance: document.querySelector("#annualBalance"),
  sickBalance: document.querySelector("#sickBalance"),
  compBalance: document.querySelector("#compBalance"),
  scheduleType: document.querySelector("#scheduleType"),
  balanceIncludesCurrentPeriod: document.querySelector("#balanceIncludesCurrentPeriod"),
  scheduleGrid: document.querySelector("#scheduleGrid"),
  scheduleTotal: document.querySelector("#scheduleTotal"),
  requestRows: document.querySelector("#requestRows"),
  addRequest: document.querySelector("#addRequest"),
  calculateButton: document.querySelector("#calculateButton"),
  resetButton: document.querySelector("#resetButton"),
  exportMarkdownButton: document.querySelector("#exportMarkdownButton"),
  importMarkdownButton: document.querySelector("#importMarkdownButton"),
  importMarkdownFile: document.querySelector("#importMarkdownFile"),
  importExportStatus: document.querySelector("#importExportStatus"),
  leaveYearChip: document.querySelector("#leaveYearChip"),
  statusBanner: document.querySelector("#statusBanner"),
  metrics: document.querySelector("#metrics"),
  useOrLosePanel: document.querySelector("#useOrLosePanel"),
  followUps: document.querySelector("#followUps"),
  dayDetails: document.querySelector("#dayDetails"),
  timeline: document.querySelector("#timeline"),
  sourcesList: document.querySelector("#sourcesList"),
};
let lastResult = null;

renderScheduleGrid(defaultSchedule);
renderSources();
restoreState();
if (!els.requestRows.children.length) addRequestRow();
calculate();

document.querySelectorAll("[data-preset]").forEach((button) => {
  button.addEventListener("click", () => applyPreset(button.dataset.preset));
});

els.addRequest.addEventListener("click", () => {
  addRequestRow();
  saveState();
  calculate();
});

els.calculateButton.addEventListener("click", calculate);
els.resetButton.addEventListener("click", reset);
els.exportMarkdownButton.addEventListener("click", exportMarkdown);
els.importMarkdownButton.addEventListener("click", () => els.importMarkdownFile.click());
els.importMarkdownFile.addEventListener("change", importMarkdown);

document.body.addEventListener("input", (event) => {
  if (event.target === els.importMarkdownFile) return;
  saveState();
  calculate();
});

document.body.addEventListener("change", (event) => {
  if (event.target === els.importMarkdownFile) return;
  saveState();
  calculate();
});

function renderScheduleGrid(hours) {
  const rows = [0, 7].map((offset, week) => {
    const cells = dayLabels.map((label, day) => {
      const index = offset + day;
      return `
        <label class="day-cell">
          <span>${label}</span>
          <input type="number" min="0" max="24" step="0.25" value="${hours[index]}" data-schedule-index="${index}" aria-label="Week ${week + 1} ${fullDayLabels[day]} hours">
        </label>
      `;
    }).join("");
    return `
      <div class="week-row">
        <div class="week-label">Week ${week + 1}</div>
        ${cells}
      </div>
    `;
  }).join("");
  els.scheduleGrid.innerHTML = rows;
}

function applyPreset(key) {
  const preset = SCHEDULE_PRESETS[key];
  if (!preset) return;
  setSchedule(preset.hours);
  els.scheduleType.value = preset.type;
  saveState();
  calculate();
}

function addRequestRow(request = {}) {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td><input class="request-name" type="text" value="${escapeAttr(request.name || "")}" placeholder="Trip"></td>
    <td><input class="request-start" type="date" value="${request.start || ""}"></td>
    <td><input class="request-end" type="date" value="${request.end || ""}"></td>
    <td>
      <select class="request-type">
        <option value="annual">Annual</option>
        <option value="sick">Sick</option>
        <option value="comp">Comp</option>
        <option value="lwop">LWOP</option>
      </select>
    </td>
    <td><input class="request-hours" type="number" min="0" max="24" step="0.25" value="${request.hoursPerDay ?? ""}" placeholder="auto"></td>
    <td><button class="icon-button delete-row" type="button" aria-label="Remove leave row">x</button></td>
  `;
  tr.querySelector(".request-type").value = request.type || "annual";
  tr.querySelector(".delete-row").addEventListener("click", () => {
    tr.remove();
    saveState();
    calculate();
  });
  els.requestRows.appendChild(tr);
}

function calculate() {
  const result = calculatePlanner(readInput());
  if (!result.ok) {
    lastResult = null;
    els.statusBanner.className = "status-banner danger";
    els.statusBanner.textContent = result.error;
    return;
  }
  lastResult = result;
  renderResult(result);
  saveState();
}

function renderResult(result) {
  els.leaveYearChip.textContent = `${result.leaveYear.year} leave year`;
  els.statusBanner.className = result.enough ? "status-banner good" : "status-banner danger";
  els.statusBanner.textContent = result.enough
    ? "The entered plan stays within available annual, sick, and comp balances."
    : "The entered plan creates a projected balance deficit.";

  const metrics = [
    ["Annual end", `${hours(result.endBalances.annual)}`, `${hours(result.annualAccrualRemaining)} accrual remaining`],
    ["Sick end", `${hours(result.endBalances.sick)}`, `${hours(result.sickAccrualRemaining)} accrual remaining`],
    ["Comp end", `${hours(result.endBalances.comp)}`, "No OPM accrual assumed"],
    ["Annual planned", `${hours(result.totals.annual)}`, `${hours(result.useOrLose)} use-or-lose after plan`],
    ["Sick planned", `${hours(result.totals.sick)}`, `${result.totals.holidaySkipped} holiday day(s) skipped`],
    ["Pay periods", `${result.remainingPeriods.length}`, `Through ${formatDate(result.leaveYear.end)}`],
  ];
  els.metrics.innerHTML = metrics.map(([label, value, detail]) => `
    <div class="metric">
      <span>${label}</span>
      <strong>${value}</strong>
      <small>${detail}</small>
    </div>
  `).join("");

  els.useOrLosePanel.innerHTML = `
    <p><strong>${hours(result.useOrLose)}</strong> projected above the 240-hour domestic carryover ceiling.</p>
    <p>Leave year: ${formatDate(result.leaveYear.begin)} to ${formatDate(result.leaveYear.end)}</p>
    <p>Schedule deadline: ${formatDate(result.leaveYear.deadline)}</p>
  `;

  els.followUps.innerHTML = result.questions.map((question) => `<li>${question}</li>`).join("");

  const warnings = result.warnings.map((warning) => `<li class="warning">${warning}</li>`).join("");
  els.dayDetails.innerHTML = `
    ${warnings ? `<ul class="inline-warnings">${warnings}</ul>` : ""}
    ${renderDayRows(result.expandedDays)}
  `;

  els.timeline.innerHTML = result.timeline.length
    ? result.timeline.map((event) => `
      <div class="list-row ${event.warning ? "danger-row" : ""}">
        <span>${formatDate(event.date)}</span>
        <strong>${event.label}</strong>
        <small>A ${hours(event.annual)} · S ${hours(event.sick)} · C ${hours(event.comp)}</small>
      </div>
    `).join("")
    : `<p class="empty">No dated leave or future accrual events in the supported leave year.</p>`;

  els.scheduleTotal.textContent = `Biweekly total: ${hours(result.scheduleTotal)}. Full-time OPM accrual assumes an 80-hour biweekly tour.`;
}

function renderDayRows(days) {
  if (!days.length) return `<p class="empty">No future leave dates entered.</p>`;
  return days.map((day) => {
    const detail = day.status === "holiday"
      ? `${day.holidayName}; no leave charged`
      : day.status === "nonworkday"
        ? "Nonworkday; no leave charged"
        : `${capitalize(day.type)} ${hours(day.charge)} charged`;
    const makeUp = day.makeUpHours > 0 ? ` · ${hours(day.makeUpHours)} flexible holiday gap` : "";
    return `
      <div class="list-row">
        <span>${formatDate(day.date)}</span>
        <strong>${detail}${makeUp}</strong>
        <small>Scheduled ${hours(day.scheduled)}</small>
      </div>
    `;
  }).join("");
}

function readInput() {
  return {
    currentDate: els.currentDate.value,
    serviceTier: els.serviceTier.value,
    scheduleType: els.scheduleType.value,
    balanceIncludesCurrentPeriod: els.balanceIncludesCurrentPeriod.checked,
    balances: {
      annual: numberValue(els.annualBalance),
      sick: numberValue(els.sickBalance),
      comp: numberValue(els.compBalance),
    },
    schedule: readSchedule(),
    requests: readRequests(),
  };
}

function readSchedule() {
  return [...document.querySelectorAll("[data-schedule-index]")]
    .sort((a, b) => Number(a.dataset.scheduleIndex) - Number(b.dataset.scheduleIndex))
    .map((input) => numberValue(input));
}

function setSchedule(hours) {
  document.querySelectorAll("[data-schedule-index]").forEach((input) => {
    input.value = hours[Number(input.dataset.scheduleIndex)] ?? 0;
  });
}

function readRequests() {
  return [...els.requestRows.querySelectorAll("tr")].map((row) => ({
    name: row.querySelector(".request-name").value.trim(),
    start: row.querySelector(".request-start").value,
    end: row.querySelector(".request-end").value,
    type: row.querySelector(".request-type").value,
    hoursPerDay: row.querySelector(".request-hours").value,
  })).filter((request) => request.start || request.end || request.name);
}

function renderSources() {
  els.sourcesList.innerHTML = SOURCE_NOTES.map((source) => `
    <div class="source-row">
      <a href="${source.url}" target="_blank" rel="noreferrer">${source.label}</a>
      <span>${source.rule}</span>
    </div>
  `).join("");
}

function exportMarkdown() {
  const input = readInput();
  const result = lastResult || calculatePlanner(input);
  if (!result.ok) {
    setImportExportStatus(result.error, "danger");
    return;
  }

  const markdown = createMarkdownExport(input, result);
  const blob = new Blob([markdown], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `gs-leave-plan-${input.currentDate || "export"}.md`;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
  setImportExportStatus("Markdown export ready.", "good");
}

async function importMarkdown() {
  const file = els.importMarkdownFile.files?.[0];
  if (!file) return;
  try {
    const markdown = await file.text();
    const input = parseMarkdownImport(markdown);
    applyInput(input);
    saveState();
    calculate();
    setImportExportStatus(`Imported ${file.name}.`, "good");
  } catch (error) {
    setImportExportStatus(error.message || "Could not import that markdown file.", "danger");
  } finally {
    els.importMarkdownFile.value = "";
  }
}

function setImportExportStatus(message, tone = "") {
  els.importExportStatus.textContent = message;
  els.importExportStatus.dataset.tone = tone;
}

function saveState() {
  const payload = {
    input: readInput(),
  };
  localStorage.setItem("gsLeavePlannerState", JSON.stringify(payload));
}

function restoreState() {
  const saved = localStorage.getItem("gsLeavePlannerState");
  if (!saved) return;
  try {
    const { input } = JSON.parse(saved);
    if (!input) return;
    applyInput(input);
  } catch {
    localStorage.removeItem("gsLeavePlannerState");
  }
}

function applyInput(input) {
  els.currentDate.value = input.currentDate || els.currentDate.value;
  els.serviceTier.value = input.serviceTier || els.serviceTier.value;
  els.scheduleType.value = input.scheduleType || els.scheduleType.value;
  els.balanceIncludesCurrentPeriod.checked = Boolean(input.balanceIncludesCurrentPeriod);
  els.annualBalance.value = input.balances?.annual ?? els.annualBalance.value;
  els.sickBalance.value = input.balances?.sick ?? els.sickBalance.value;
  els.compBalance.value = input.balances?.comp ?? els.compBalance.value;
  if (Array.isArray(input.schedule)) setSchedule(input.schedule);
  els.requestRows.innerHTML = "";
  (input.requests || []).forEach(addRequestRow);
  if (!els.requestRows.children.length) addRequestRow();
}

function reset() {
  localStorage.removeItem("gsLeavePlannerState");
  els.currentDate.value = "2026-05-28";
  els.serviceTier.value = "mid";
  els.scheduleType.value = "standard";
  els.balanceIncludesCurrentPeriod.checked = false;
  els.annualBalance.value = 168;
  els.sickBalance.value = 80;
  els.compBalance.value = 16;
  setSchedule(defaultSchedule);
  els.requestRows.innerHTML = "";
  addRequestRow();
  setImportExportStatus("");
  calculate();
}

function numberValue(input) {
  const parsed = Number(input.value);
  return Number.isFinite(parsed) ? parsed : 0;
}

function hours(value) {
  return `${Number(value).toFixed(Number.isInteger(Number(value)) ? 0 : 1)}h`;
}

function capitalize(value) {
  if (value === "lwop") return "LWOP";
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function escapeAttr(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("\"", "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}
