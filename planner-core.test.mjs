import assert from "node:assert/strict";
import {
  SCHEDULE_PRESETS,
  calculatePlanner,
  createMarkdownExport,
  formatDate,
  generatePayPeriods,
  getHoliday,
  getLeaveYearForDate,
  parseMarkdownImport,
} from "./planner-core.js";

const leaveYear2026 = getLeaveYearForDate("2026-05-28");
assert.equal(leaveYear2026.year, 2026);
assert.equal(leaveYear2026.begin, "2026-01-11");
assert.equal(leaveYear2026.end, "2027-01-09");
assert.equal(leaveYear2026.deadline, "2026-11-28");

const periods = generatePayPeriods(leaveYear2026);
assert.equal(periods.length, 26);
assert.deepEqual(periods.at(0), {
  index: 1,
  start: "2026-01-11",
  end: "2026-01-24",
  isLast: false,
});
assert.deepEqual(periods.at(-1), {
  index: 26,
  start: "2026-12-27",
  end: "2027-01-09",
  isLast: true,
});

const midTierNoLeave = calculatePlanner({
  currentDate: "2026-01-11",
  serviceTier: "mid",
  scheduleType: "standard",
  balances: { annual: 0, sick: 0, comp: 0 },
  schedule: SCHEDULE_PRESETS.standard.hours,
  requests: [],
});
assert.equal(midTierNoLeave.annualAccrualRemaining, 160);
assert.equal(midTierNoLeave.sickAccrualRemaining, 104);

const holidayPlan = calculatePlanner({
  currentDate: "2026-12-20",
  serviceTier: "gte15",
  scheduleType: "standard",
  balances: { annual: 8, sick: 0, comp: 0 },
  schedule: SCHEDULE_PRESETS.standard.hours,
  requests: [{ start: "2026-12-25", end: "2026-12-25", type: "annual" }],
});
assert.equal(getHoliday("2026-12-25").name, "Christmas Day");
assert.equal(holidayPlan.totals.annual, 0);
assert.equal(holidayPlan.totals.holidaySkipped, 1);

const useOrLosePlan = calculatePlanner({
  currentDate: "2026-11-29",
  serviceTier: "gte15",
  scheduleType: "standard",
  balances: { annual: 250, sick: 40, comp: 0 },
  schedule: SCHEDULE_PRESETS.standard.hours,
  requests: [],
});
assert.equal(useOrLosePlan.endBalances.annual, 274);
assert.equal(useOrLosePlan.useOrLose, 34);
assert.equal(formatDate("2026-11-28"), "Nov 28, 2026");

const compressedHoliday = calculatePlanner({
  currentDate: "2026-06-01",
  serviceTier: "mid",
  scheduleType: "compressed",
  balances: { annual: 20, sick: 0, comp: 0 },
  schedule: SCHEDULE_PRESETS.compressed410.hours,
  requests: [{ start: "2026-06-19", end: "2026-06-19", type: "annual" }],
});
assert.equal(compressedHoliday.totals.annual, 0);
assert.equal(compressedHoliday.totals.holidayMakeUpHours, 0);

const exportInput = {
  currentDate: "2026-05-28",
  serviceTier: "mid",
  scheduleType: "standard",
  balanceIncludesCurrentPeriod: true,
  balances: { annual: 168, sick: 80, comp: 16 },
  schedule: SCHEDULE_PRESETS.standard.hours,
  requests: [
    { name: "Winter break", start: "2026-12-24", end: "2026-12-31", type: "annual", hoursPerDay: "" },
  ],
};
const exportResult = calculatePlanner(exportInput);
const markdown = createMarkdownExport(exportInput, exportResult);
assert.match(markdown, /# GS Leave Plan/);
assert.match(markdown, /```gs-leave-planner/);
assert.deepEqual(parseMarkdownImport(markdown), exportInput);
assert.throws(
  () => parseMarkdownImport("# GS Leave Plan\n\nNo import block here."),
  /No gs-leave-planner import block/,
);

console.log("planner-core tests passed");
