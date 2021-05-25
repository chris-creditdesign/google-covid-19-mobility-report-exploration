<script>
  import { Stack, Box } from "creditdesign-svelte-components";
  import { currentDay } from "../../stores/animation-state.js";
</script>

<style>
  .calendar-container {
    font-size: var(--font-size-small-1);
  }

  .year > * {
    margin: 0;
  }

  .months {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
  }

  .months > span {
    border: 1px solid black;
    padding: 5px;
    display: block;
    margin-right: 2px;
    margin-bottom: 2px;
    min-width: 4ch;
    text-align: center;
  }
</style>

<div class="calendar-container">
  <Box>
    <Stack>
      <div class="year">
        <span>2020</span>
        <div class="months">
          <span>Jan</span>
          <span>Feb</span>
          <span>Mar</span>
          <span>Apr</span>
          <span>May</span>
          <span>Jun</span>
          <span>Jul</span>
          <span>Aug</span>
          <span>Sep</span>
          <span>Oct</span>
          <span>Nov</span>
          <span>Dec</span>
        </div>
      </div>

      <div class="year">
        <span>2021</span>
        <div class="months">
          <span>Jan</span>
          <span>Feb</span>
          <span>Mar</span>
          <span>Apr</span>
          <span>May</span>
          <span>Jun</span>
          <span>Jul</span>
          <span>Aug</span>
          <span>Sep</span>
          <span>Oct</span>
          <span>Nov</span>
          <span>Dec</span>
        </div>
      </div>
    </Stack>

    <p>{$currentDay}</p>
  </Box>
</div>
