import { writable, derived } from "svelte/store";

export const currentDay = writable("2020-02-15");

export const greeting = derived(
  currentDay,
  ($currentDay) => `Hello ${$currentDay}!`
);
