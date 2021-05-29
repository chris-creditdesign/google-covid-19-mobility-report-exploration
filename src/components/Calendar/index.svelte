<script>
  import { Stack, Box } from "creditdesign-svelte-components";
  import {
    activeDateObject,
    dataDisplay,
  } from "../../stores/animation-state.js";

  const months = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];

  $: activeMonth = `${months[$activeDateObject.month]}-${
    $activeDateObject.year
  }`;
</script>

<style>
  .calendar-container {
    opacity: 0;
    transition: opacity 300ms;
  }

  .calendar-container.active {
    opacity: 1;
  }

  .year > span {
    font-size: var(--font-size-small-1);
  }

  .year > * {
    margin: 0;
  }

  .year > .year-label {
    color: var(--black-3);
  }

  .year > .year-label.current-year {
    font-weight: bold;
    color: var(--black-0);
  }

  .date > .day-label {
    min-width: 3ch;
    display: inline-block;
  }

  .months {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
  }

  .months > span {
    border: 1px solid var(--white-3);
    color: var(--black-3);
    padding: 5px 5px 2px;
    display: block;
    margin-right: 2px;
    margin-bottom: 2px;
    min-width: 4ch;
    text-align: center;
  }

  .months > span.current {
    background-color: black;
    color: white;
  }
</style>

<div
  class="calendar-container"
  class:active="{$dataDisplay !== 'none'}"
  aria-hidden="true"
>
  <Box>
    <Stack>
      <p class="date">
        Current day:
        <span>{$activeDateObject.longMonth}</span>
        <span class="day-label">{@html $activeDateObject.ordinalDay}</span>
        <span>{$activeDateObject.year}</span>
      </p>

      <div class="year">
        <span
          class="year-label"
          class:current-year="{$activeDateObject.year === 2020}">2020</span
        >
        <div class="months">
          <div class="months">
            {#each months as month}
              <span class:current="{activeMonth === `${month}-2020`}"
                >{`${month.slice(0, 1).toLocaleUpperCase()}${month.slice(
                  1
                )}`}</span
              >
            {/each}
          </div>
        </div>
      </div>

      <div class="year">
        <span
          class="year-label"
          class:current-year="{$activeDateObject.year === 2021}">2021</span
        >
        <div class="months">
          {#each months as month}
            <span class:current="{activeMonth === `${month}-2021`}"
              >{`${month.slice(0, 1).toLocaleUpperCase()}${month.slice(
                1
              )}`}</span
            >
          {/each}
        </div>
      </div>
    </Stack>
  </Box>
</div>
