import { writable, derived } from "svelte/store";
import { getCurrentLockdownStatus } from "../utils/scales.js";

export const dataDisplay = writable("none");

export const currentDay = writable("2020-02-15");

const suffixes = ["th", "st", "nd", "rd"];

const suffix = (number) => {
  const tail = number % 100;
  return suffixes[(tail < 11 || tail > 13) && tail % 10] || suffixes[0];
};

export const activeDateObject = derived(currentDay, ($currentDay) => {
  let date = new Date($currentDay);
  let day = date.getDate();
  let ordinalDay = `${day}<sup>${suffix(day)}</sup>`;
  let month = date.getMonth();
  let longMonth = date.toLocaleString("default", { month: "long" });
  let year = date.getFullYear();
  let lockdownStatus = getCurrentLockdownStatus(date.valueOf());

  return {
    day,
    ordinalDay,
    month,
    longMonth,
    year,
    lockdownStatus,
  };
});
