import { writable, derived } from "svelte/store";

export const currentDay = writable(0);

export const greeting = derived(
  currentDay,
  ($currentDay) => `Hello ${$currentDay}!`
);
