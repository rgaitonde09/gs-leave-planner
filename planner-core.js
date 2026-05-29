export const HOURS = {
  domesticAnnualCarryover: 240,
};

export const SOURCE_NOTES = [
  {
    label: "OPM annual leave fact sheet",
    url: "https://www.opm.gov/policy-data-oversight/pay-leave/leave-administration/fact-sheets/annual-leave/",
    rule: "Full-time annual leave accrual tiers, domestic 30-day carryover ceiling, and use-or-lose forfeiture rules.",
  },
  {
    label: "OPM sick leave fact sheet",
    url: "https://www.opm.gov/policy-data-oversight/pay-leave/leave-administration/fact-sheets/sick-leave-general-information/",
    rule: "Full-time sick leave accrues 4 hours each biweekly pay period; sick leave has no accumulation limit.",
  },
  {
    label: "OPM leave year dates",
    url: "https://www.opm.gov/policy-data-oversight/pay-leave/leave-administration/fact-sheets/leave-year-beginning-and-ending-dates/",
    rule: "Leave years, ending dates, and use-or-lose scheduling deadlines.",
  },
  {
    label: "OPM holidays, work schedules, and pay",
    url: "https://www.opm.gov/policy-data-oversight/pay-leave/pay-administration/fact-sheets/holidays-work-schedules-and-pay/",
    rule: "Holiday leave treatment for standard, flexible, and compressed schedules.",
  },
  {
    label: "OPM flexible work schedules",
    url: "https://www.opm.gov/policy-data-oversight/pay-leave/work-schedules/fact-sheets/alternative-flexible-work-schedules/",
    rule: "Flexible work schedule categories, credit hours, and 24-hour carryover limit for credit hours.",
  },
  {
    label: "OPM maxiflex work schedules",
    url: "https://www.opm.gov/policy-data-oversight/pay-leave/work-schedules/fact-sheets/maxiflex-work-schedules/",
    rule: "Maxiflex 80-hour biweekly basic work requirement and core/flexible hour constraints.",
  },
  {
    label: "GSA 2026 payroll calendar",
    url: "https://www.gsa.gov/buy-through-us/purchasing-programs/shared-services/payroll-shared-services/payroll-calendars/2026-payroll-calendar",
    rule: "2026 pay period ends, holidays, EFT dates, and time-card dates.",
  },
  {
    label: "GSA 2027 payroll calendar",
    url: "https://www.gsa.gov/buy-through-us/purchasing-programs/shared-services/payroll-shared-services/payroll-calendars/2027-payroll-calendar",
    rule: "2027 pay period ends, holidays, EFT dates, and time-card dates.",
  },
  {
    label: "Provided calendar file",
    url: "basic.ics",
    rule: "Local GSA Payroll calendar at /Users/rahulg/Downloads/basic.ics; it contains biweekly pay period start/end recurrence anchors.",
  },
];

export const LEAVE_YEARS = [
  { year: 2025, begin: "2025-01-12", end: "2026-01-10", deadline: "2025-11-29" },
  { year: 2026, begin: "2026-01-11", end: "2027-01-09", deadline: "2026-11-28" },
  { year: 2027, begin: "2027-01-10", end: "2028-01-08", deadline: "2027-11-27" },
  { year: 2028, begin: "2028-01-09", end: "2029-01-06", deadline: "2028-11-25" },
  { year: 2029, begin: "2029-01-07", end: "2030-01-05", deadline: "2029-11-24" },
  { year: 2030, begin: "2030-01-06", end: "2031-01-04", deadline: "2030-11-23" },
];

export const OPM_HOLIDAYS = [
  { date: "2025-01-01", name: "New Year's Day" },
  { date: "2025-01-20", name: "Birthday of Martin Luther King, Jr." },
  { date: "2025-01-20", name: "Inauguration Day" },
  { date: "2025-02-17", name: "Washington's Birthday" },
  { date: "2025-05-26", name: "Memorial Day" },
  { date: "2025-06-19", name: "Juneteenth National Independence Day" },
  { date: "2025-07-04", name: "Independence Day" },
  { date: "2025-09-01", name: "Labor Day" },
  { date: "2025-10-13", name: "Columbus Day" },
  { date: "2025-11-11", name: "Veterans Day" },
  { date: "2025-11-27", name: "Thanksgiving Day" },
  { date: "2025-12-25", name: "Christmas Day" },
  { date: "2026-01-01", name: "New Year's Day" },
  { date: "2026-01-19", name: "Birthday of Martin Luther King, Jr." },
  { date: "2026-02-16", name: "Washington's Birthday" },
  { date: "2026-05-25", name: "Memorial Day" },
  { date: "2026-06-19", name: "Juneteenth National Independence Day" },
  { date: "2026-07-03", name: "Independence Day" },
  { date: "2026-09-07", name: "Labor Day" },
  { date: "2026-10-12", name: "Columbus Day" },
  { date: "2026-11-11", name: "Veterans Day" },
  { date: "2026-11-26", name: "Thanksgiving Day" },
  { date: "2026-12-25", name: "Christmas Day" },
  { date: "2027-01-01", name: "New Year's Day" },
  { date: "2027-01-18", name: "Birthday of Martin Luther King, Jr." },
  { date: "2027-02-15", name: "Washington's Birthday" },
  { date: "2027-05-31", name: "Memorial Day" },
  { date: "2027-06-18", name: "Juneteenth National Independence Day" },
  { date: "2027-07-05", name: "Independence Day" },
  { date: "2027-09-06", name: "Labor Day" },
  { date: "2027-10-11", name: "Columbus Day" },
  { date: "2027-11-11", name: "Veterans Day" },
  { date: "2027-11-25", name: "Thanksgiving Day" },
  { date: "2027-12-24", name: "Christmas Day" },
  { date: "2027-12-31", name: "New Year's Day" },
  { date: "2028-01-17", name: "Birthday of Martin Luther King, Jr." },
  { date: "2028-02-21", name: "Washington's Birthday" },
  { date: "2028-05-29", name: "Memorial Day" },
  { date: "2028-06-19", name: "Juneteenth National Independence Day" },
  { date: "2028-07-04", name: "Independence Day" },
  { date: "2028-09-04", name: "Labor Day" },
  { date: "2028-10-09", name: "Columbus Day" },
  { date: "2028-11-10", name: "Veterans Day" },
  { date: "2028-11-23", name: "Thanksgiving Day" },
  { date: "2028-12-25", name: "Christmas Day" },
  { date: "2029-01-01", name: "New Year's Day" },
  { date: "2029-01-15", name: "Birthday of Martin Luther King, Jr." },
  { date: "2029-02-19", name: "Washington's Birthday" },
  { date: "2029-05-28", name: "Memorial Day" },
  { date: "2029-06-19", name: "Juneteenth National Independence Day" },
  { date: "2029-07-04", name: "Independence Day" },
  { date: "2029-09-03", name: "Labor Day" },
  { date: "2029-10-08", name: "Columbus Day" },
  { date: "2029-11-12", name: "Veterans Day" },
  { date: "2029-11-22", name: "Thanksgiving Day" },
  { date: "2029-12-25", name: "Christmas Day" },
  { date: "2030-01-01", name: "New Year's Day" },
  { date: "2030-01-21", name: "Birthday of Martin Luther King, Jr." },
  { date: "2030-02-18", name: "Washington's Birthday" },
  { date: "2030-05-27", name: "Memorial Day" },
  { date: "2030-06-19", name: "Juneteenth National Independence Day" },
  { date: "2030-07-04", name: "Independence Day" },
  { date: "2030-09-02", name: "Labor Day" },
  { date: "2030-10-14", name: "Columbus Day" },
  { date: "2030-11-11", name: "Veterans Day" },
  { date: "2030-11-28", name: "Thanksgiving Day" },
  { date: "2030-12-25", name: "Christmas Day" },
];

export const SCHEDULE_PRESETS = {
  standard: {
    label: "Standard 5x8",
    type: "standard",
    hours: [0, 8, 8, 8, 8, 8, 0, 0, 8, 8, 8, 8, 8, 0],
  },
  compressed54: {
    label: "5/4/9 compressed",
    type: "compressed",
    hours: [0, 9, 9, 9, 9, 8, 0, 0, 9, 9, 9, 9, 0, 0],
  },
  compressed410: {
    label: "4x10 compressed",
    type: "compressed",
    hours: [0, 10, 10, 10, 10, 0, 0, 0, 10, 10, 10, 10, 0, 0],
  },
  maxiflex: {
    label: "Maxiflex template",
    type: "maxiflex",
    hours: [0, 8, 8, 8, 8, 8, 0, 0, 8, 8, 8, 8, 8, 0],
  },
};

export const EXPORT_VERSION = 1;

const DAY_MS = 24 * 60 * 60 * 1000;

export function fromISO(value) {
  if (!value || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return null;
  const [year, month, day] = value.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));
  return toISO(date) === value ? date : null;
}

export function toISO(date) {
  const year = date.getUTCFullYear();
  const month = String(date.getUTCMonth() + 1).padStart(2, "0");
  const day = String(date.getUTCDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function addDays(date, count) {
  return new Date(date.getTime() + count * DAY_MS);
}

export function dateDiffDays(a, b) {
  return Math.round((fromISO(b).getTime() - fromISO(a).getTime()) / DAY_MS);
}

export function compareISO(a, b) {
  return fromISO(a).getTime() - fromISO(b).getTime();
}

export function formatDate(value) {
  const date = typeof value === "string" ? fromISO(value) : value;
  if (!date) return "";
  return date.toLocaleDateString("en-US", {
    timeZone: "UTC",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function getLeaveYearForDate(dateISO) {
  return LEAVE_YEARS.find((leaveYear) => compareISO(dateISO, leaveYear.begin) >= 0 && compareISO(dateISO, leaveYear.end) <= 0) || null;
}

export function getHoliday(dateISO) {
  const matches = OPM_HOLIDAYS.filter((holiday) => holiday.date === dateISO);
  if (!matches.length) return null;
  return {
    date: dateISO,
    name: matches.map((holiday) => holiday.name).join(" + "),
  };
}

export function generatePayPeriods(leaveYear) {
  const periods = [];
  let start = fromISO(leaveYear.begin);
  const final = fromISO(leaveYear.end);
  let index = 1;
  while (start.getTime() <= final.getTime()) {
    const end = addDays(start, 13);
    periods.push({
      index,
      start: toISO(start),
      end: toISO(end),
      isLast: end.getTime() === final.getTime(),
    });
    start = addDays(start, 14);
    index += 1;
  }
  return periods;
}

export function findPayPeriod(dateISO, periods) {
  return periods.find((period) => compareISO(dateISO, period.start) >= 0 && compareISO(dateISO, period.end) <= 0) || null;
}

export function accrualForPeriod(serviceTier, period) {
  if (serviceTier === "lt3") return 4;
  if (serviceTier === "gte15") return 8;
  return period.isLast ? 10 : 6;
}

export function sickAccrualForPeriod() {
  return 4;
}

export function scheduleTotal(schedule) {
  return schedule.reduce((sum, value) => sum + numberOrZero(value), 0);
}

export function scheduleIndexForDate(dateISO, leaveYearBeginISO) {
  const diff = dateDiffDays(leaveYearBeginISO, dateISO);
  return ((diff % 14) + 14) % 14;
}

export function scheduledHoursForDate(dateISO, schedule, leaveYearBeginISO) {
  return numberOrZero(schedule[scheduleIndexForDate(dateISO, leaveYearBeginISO)]);
}

export function expandRequests(requests, schedule, leaveYear, scheduleType) {
  const days = [];
  const warnings = [];

  for (const request of requests) {
    if (!request.start || !request.end) {
      warnings.push("A leave row is missing a start or end date.");
      continue;
    }
    const start = fromISO(request.start);
    const end = fromISO(request.end);
    if (!start || !end || start.getTime() > end.getTime()) {
      warnings.push(`A leave row has an invalid range: ${request.start || "blank"} to ${request.end || "blank"}.`);
      continue;
    }

    for (let cursor = start; cursor.getTime() <= end.getTime(); cursor = addDays(cursor, 1)) {
      const dateISO = toISO(cursor);
      const scheduled = scheduledHoursForDate(dateISO, schedule, leaveYear.begin);
      const holiday = getHoliday(dateISO);
      const override = request.hoursPerDay === "" || request.hoursPerDay == null ? null : numberOrZero(request.hoursPerDay);
      let charge = override == null ? scheduled : override;
      let status = "charged";
      let makeUpHours = 0;

      if (scheduled <= 0) {
        charge = 0;
        status = "nonworkday";
      } else if (holiday) {
        charge = 0;
        status = "holiday";
        if ((scheduleType === "flexible" || scheduleType === "maxiflex") && scheduled > 8) {
          makeUpHours = scheduled - 8;
        }
      }

      if (override != null && override > scheduled && scheduled > 0 && !holiday) {
        warnings.push(`${formatDate(dateISO)} requests ${override} hours, above the scheduled ${scheduled} hours.`);
      }

      days.push({
        date: dateISO,
        type: request.type || "annual",
        requestName: request.name || "",
        scheduled,
        charge,
        status,
        holidayName: holiday ? holiday.name : "",
        makeUpHours,
      });
    }
  }

  return { days, warnings };
}

export function calculatePlanner(input) {
  const normalizedInput = normalizePlannerInput(input);
  const currentDate = normalizedInput.currentDate;
  const leaveYear = input?.leaveYear || getLeaveYearForDate(currentDate);
  if (!leaveYear) {
    return {
      ok: false,
      error: "Current date is outside the supported OPM leave-year table.",
    };
  }

  const schedule = normalizeSchedule(normalizedInput.schedule);
  const periods = generatePayPeriods(leaveYear);
  const currentPeriod = findPayPeriod(currentDate, periods);
  const balanceIncludesCurrentPeriod = Boolean(input.balanceIncludesCurrentPeriod);
  const remainingPeriods = periods.filter((period) => {
    if (currentPeriod) {
      return balanceIncludesCurrentPeriod
        ? compareISO(period.end, currentPeriod.end) > 0
        : compareISO(period.end, currentPeriod.end) >= 0;
    }
    return compareISO(period.end, currentDate) >= 0;
  });

  const annualAccrualRemaining = remainingPeriods.reduce((sum, period) => sum + accrualForPeriod(normalizedInput.serviceTier, period), 0);
  const sickAccrualRemaining = remainingPeriods.reduce((sum) => sum + sickAccrualForPeriod(), 0);
  const expanded = expandRequests(normalizedInput.requests || [], schedule, leaveYear, normalizedInput.scheduleType);
  const futureDays = expanded.days.filter((day) => compareISO(day.date, currentDate) >= 0 && compareISO(day.date, leaveYear.end) <= 0);
  const pastDays = expanded.days.filter((day) => compareISO(day.date, currentDate) < 0);

  const totals = {
    annual: sumCharges(futureDays, "annual"),
    sick: sumCharges(futureDays, "sick"),
    comp: sumCharges(futureDays, "comp"),
    leaveWithoutPay: sumCharges(futureDays, "lwop"),
    holidaySkipped: futureDays.filter((day) => day.status === "holiday").length,
    nonworkSkipped: futureDays.filter((day) => day.status === "nonworkday").length,
    holidayMakeUpHours: futureDays.reduce((sum, day) => sum + day.makeUpHours, 0),
  };

  const balances = {
    annualStart: numberOrZero(normalizedInput.balances?.annual),
    sickStart: numberOrZero(normalizedInput.balances?.sick),
    compStart: numberOrZero(normalizedInput.balances?.comp),
  };

  const endBalances = {
    annual: round1(balances.annualStart + annualAccrualRemaining - totals.annual),
    sick: round1(balances.sickStart + sickAccrualRemaining - totals.sick),
    comp: round1(balances.compStart - totals.comp),
  };

  const deficits = {
    annual: Math.max(0, -endBalances.annual),
    sick: Math.max(0, -endBalances.sick),
    comp: Math.max(0, -endBalances.comp),
  };

  const useOrLose = Math.max(0, endBalances.annual - HOURS.domesticAnnualCarryover);
  const timeline = buildTimeline({
    currentDate,
    leaveYear,
    periods: remainingPeriods,
    futureDays,
    balances,
    serviceTier: normalizedInput.serviceTier,
  });

  const questions = buildFollowUps({
    input: normalizedInput,
    leaveYear,
    schedule,
    totals,
    useOrLose,
    deficits,
    pastDays,
  });

  return {
    ok: true,
    leaveYear,
    periods,
    remainingPeriods,
    currentPeriod,
    scheduleTotal: scheduleTotal(schedule),
    annualAccrualRemaining,
    sickAccrualRemaining,
    expandedDays: futureDays,
    pastDays,
    warnings: expanded.warnings,
    totals,
    balances,
    endBalances,
    deficits,
    useOrLose: round1(useOrLose),
    enough: deficits.annual === 0 && deficits.sick === 0 && deficits.comp === 0,
    timeline,
    questions,
  };
}

export function createMarkdownExport(input, result) {
  if (!result?.ok) {
    throw new Error("A valid planner result is required before exporting.");
  }

  const normalizedInput = normalizePlannerInput(input);
  const state = {
    version: EXPORT_VERSION,
    exportedAt: new Date().toISOString(),
    input: normalizedInput,
  };

  const requestRows = normalizedInput.requests.length
    ? normalizedInput.requests.map((request) => (
      `| ${mdCell(request.name || "Leave")} | ${request.start || ""} | ${request.end || ""} | ${mdCell(capitalize(request.type || "annual"))} | ${request.hoursPerDay || "auto"} |`
    )).join("\n")
    : "| None |  |  |  |  |";

  const scheduleRows = [0, 7].map((offset, week) => {
    const hours = normalizedInput.schedule.slice(offset, offset + 7).map((value) => formatHours(value)).join(" | ");
    return `| Week ${week + 1} | ${hours} |`;
  }).join("\n");

  const sourceRows = SOURCE_NOTES
    .map((source) => `- [${source.label}](${source.url}) - ${source.rule}`)
    .join("\n");

  return [
    "# GS Leave Plan",
    "",
    `Exported: ${formatDate(state.exportedAt.slice(0, 10))}`,
    `Current date: ${formatDate(normalizedInput.currentDate)}`,
    `Leave year: ${result.leaveYear.year} (${formatDate(result.leaveYear.begin)} to ${formatDate(result.leaveYear.end)})`,
    `Use-or-lose scheduling deadline: ${formatDate(result.leaveYear.deadline)}`,
    "",
    "## Summary",
    "",
    "| Item | Hours |",
    "| --- | ---: |",
    `| Starting annual leave / PTO | ${formatHours(result.balances.annualStart)} |`,
    `| Starting sick leave | ${formatHours(result.balances.sickStart)} |`,
    `| Starting comp time | ${formatHours(result.balances.compStart)} |`,
    `| Annual leave planned | ${formatHours(result.totals.annual)} |`,
    `| Sick leave planned | ${formatHours(result.totals.sick)} |`,
    `| Comp time planned | ${formatHours(result.totals.comp)} |`,
    `| Projected annual balance | ${formatHours(result.endBalances.annual)} |`,
    `| Projected sick balance | ${formatHours(result.endBalances.sick)} |`,
    `| Projected comp balance | ${formatHours(result.endBalances.comp)} |`,
    `| Projected use-or-lose annual leave | ${formatHours(result.useOrLose)} |`,
    "",
    "## Leave Requests",
    "",
    "| Name | Start | End | Charge | Hours/day |",
    "| --- | --- | --- | --- | ---: |",
    requestRows,
    "",
    "## Work Schedule",
    "",
    "| Pay-period week | Sun | Mon | Tue | Wed | Thu | Fri | Sat |",
    "| --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |",
    scheduleRows,
    "",
    "## Follow-Ups",
    "",
    result.questions.map((question) => `- ${question}`).join("\n"),
    "",
    "## Sources",
    "",
    sourceRows,
    "",
    "## Import Data",
    "",
    "```gs-leave-planner",
    JSON.stringify(state, null, 2),
    "```",
    "",
  ].join("\n");
}

export function parseMarkdownImport(markdown) {
  const text = String(markdown || "");
  const match = text.match(/```gs-leave-planner\s*\n([\s\S]*?)```/i);
  if (!match) {
    throw new Error("No gs-leave-planner import block was found.");
  }

  let parsed;
  try {
    parsed = JSON.parse(match[1]);
  } catch {
    throw new Error("The gs-leave-planner import block is not valid JSON.");
  }

  if (!parsed || parsed.version !== EXPORT_VERSION || !parsed.input) {
    throw new Error("This markdown file uses an unsupported planner export format.");
  }

  return normalizePlannerInput(parsed.input);
}

export function normalizePlannerInput(input) {
  const currentDate = validDate(input?.currentDate) ? input.currentDate : "2026-05-28";
  const serviceTier = ["lt3", "mid", "gte15"].includes(input?.serviceTier) ? input.serviceTier : "mid";
  const scheduleType = ["standard", "compressed", "flexible", "maxiflex"].includes(input?.scheduleType) ? input.scheduleType : "standard";
  const schedule = normalizeSchedule(input?.schedule);
  const requests = Array.isArray(input?.requests)
    ? input.requests.map(normalizeRequest).filter(Boolean)
    : [];

  return {
    currentDate,
    serviceTier,
    scheduleType,
    balanceIncludesCurrentPeriod: Boolean(input?.balanceIncludesCurrentPeriod),
    balances: {
      annual: numberOrZero(input?.balances?.annual),
      sick: numberOrZero(input?.balances?.sick),
      comp: numberOrZero(input?.balances?.comp),
    },
    schedule,
    requests,
  };
}

function buildTimeline({ currentDate, leaveYear, periods, futureDays, balances, serviceTier }) {
  const byDate = new Map();
  for (const day of futureDays) {
    if (!byDate.has(day.date)) byDate.set(day.date, []);
    byDate.get(day.date).push(day);
  }

  let annual = balances.annualStart;
  let sick = balances.sickStart;
  let comp = balances.compStart;
  const events = [];
  const periodByEnd = new Map(periods.map((period) => [period.end, period]));

  for (let cursor = fromISO(currentDate); cursor.getTime() <= fromISO(leaveYear.end).getTime(); cursor = addDays(cursor, 1)) {
    const date = toISO(cursor);
    const requests = byDate.get(date) || [];
    for (const day of requests) {
      if (day.type === "annual") annual -= day.charge;
      if (day.type === "sick") sick -= day.charge;
      if (day.type === "comp") comp -= day.charge;
      if (day.charge > 0 || day.status !== "charged") {
        events.push({
          date,
          kind: "leave",
          label: leaveLabel(day),
          annual: round1(annual),
          sick: round1(sick),
          comp: round1(comp),
          warning: annual < 0 || sick < 0 || comp < 0,
        });
      }
    }

    const period = periodByEnd.get(date);
    if (period) {
      annual += accrualForPeriod(serviceTier, period);
      sick += sickAccrualForPeriod();
      events.push({
        date,
        kind: "accrual",
        label: `Pay period ${period.index} accrual`,
        annual: round1(annual),
        sick: round1(sick),
        comp: round1(comp),
        warning: false,
      });
    }
  }

  return events.slice(0, 80);
}

function leaveLabel(day) {
  if (day.status === "holiday") return `${day.holidayName}: no leave charged`;
  if (day.status === "nonworkday") return "Nonworkday: no leave charged";
  const label = day.requestName ? `${day.requestName}: ` : "";
  return `${label}${capitalize(day.type)} ${day.charge}h`;
}

function buildFollowUps({ input, leaveYear, schedule, totals, useOrLose, deficits, pastDays }) {
  const questions = [];
  const total = scheduleTotal(schedule);
  if (Math.abs(total - 80) > 0.01) {
    questions.push(`Your 14-day schedule totals ${round1(total)} hours. Are you full-time, part-time, or on an uncommon tour for accrual purposes?`);
  }
  if (input.scheduleType === "flexible" || input.scheduleType === "maxiflex") {
    questions.push("For flexible or maxiflex schedules, has your agency approved the core hours and flexible bands for the dates you entered?");
  }
  if (totals.holidayMakeUpHours > 0) {
    questions.push(`${round1(totals.holidayMakeUpHours)} holiday hours fall above the 8-hour flexible schedule holiday credit. Will you work extra hours, use annual leave, use comp time, or use credit hours in those pay periods?`);
  }
  if (totals.sick > 0) {
    questions.push("Are the planned sick leave hours for OPM-covered purposes, and do any agency medical evidence rules apply?");
  }
  if (useOrLose > 0) {
    questions.push(`Which additional dates can you use ${round1(useOrLose)} hours of annual leave before ${formatDate(leaveYear.end)}?`);
    questions.push(`Will use-or-lose annual leave be scheduled in writing by ${formatDate(leaveYear.deadline)}?`);
  }
  if (deficits.annual > 0 && input.balances?.comp > 0) {
    questions.push("Should any personal leave be charged to compensatory time before annual leave to avoid an annual leave deficit?");
  }
  if (pastDays.length > 0) {
    questions.push(`${pastDays.length} requested day(s) are before the current date and were left out of the forecast.`);
  }
  questions.push("Are your balances from the last posted earnings and leave statement, and do they already include pending approved leave?");
  questions.push("Are you a domestic GS employee with the standard 240-hour annual leave carryover ceiling?");
  return questions;
}

function sumCharges(days, type) {
  return round1(days.filter((day) => day.type === type).reduce((sum, day) => sum + day.charge, 0));
}

function normalizeSchedule(schedule) {
  const fallback = SCHEDULE_PRESETS.standard.hours;
  const source = Array.isArray(schedule) && schedule.length === 14 ? schedule : fallback;
  return source.map(numberOrZero);
}

function normalizeRequest(request) {
  const type = ["annual", "sick", "comp", "lwop"].includes(request?.type) ? request.type : "annual";
  const start = validDate(request?.start) ? request.start : "";
  const end = validDate(request?.end) ? request.end : "";
  const hoursPerDay = request?.hoursPerDay === "" || request?.hoursPerDay == null
    ? ""
    : String(numberOrZero(request.hoursPerDay));
  if (!start && !end && !request?.name) return null;
  return {
    name: String(request?.name || "").slice(0, 120),
    start,
    end,
    type,
    hoursPerDay,
  };
}

function numberOrZero(value) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

function validDate(value) {
  return Boolean(fromISO(value));
}

function formatHours(value) {
  const number = numberOrZero(value);
  return `${number.toFixed(Number.isInteger(number) ? 0 : 1)}h`;
}

function mdCell(value) {
  return String(value).replaceAll("|", "\\|").replaceAll("\n", " ");
}

function round1(value) {
  return Math.round((value + Number.EPSILON) * 10) / 10;
}

function capitalize(value) {
  if (value === "lwop") return "LWOP";
  return value.charAt(0).toUpperCase() + value.slice(1);
}
