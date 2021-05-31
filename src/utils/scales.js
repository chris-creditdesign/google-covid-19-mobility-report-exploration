import { scaleLinear, scaleThreshold } from "d3-scale";

export const spikeScale = scaleLinear().domain([-100, 100]).range([30, -30]);

export const colorScale = (d) => (d > 0 ? 0xff0000 : 0x0000ff);

// Dates from: https://data.london.gov.uk/dataset/coronavirus-covid-19-mobility-report

const lockdownDates = [
  1585008000000, 1589065200000, 1604534400000, 1606867200000, 1609804800000,
  1615161600000, 1577836800000,
];

const lockdownMeasures = [
  "",
  "First England lockdown",
  "",
  "Second England Lockdown",
  "",
  "Third England Lockdown",
  "",
];

export const getCurrentLockdownStatus = scaleThreshold()
  .domain(lockdownDates)
  .range(lockdownMeasures);
