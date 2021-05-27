import { writable, derived } from "svelte/store";

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
  let longMonth = date.toLocaleString("default", { month: "long" });

  let shortMonth = date
    .toLocaleString("default", { month: "short" })
    .toLocaleLowerCase();
  let year = date.getFullYear();

  return {
    day,
    ordinalDay,
    longMonth,
    year,
    activeMonth: `${shortMonth}-${year}`,
  };
});
