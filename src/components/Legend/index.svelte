<script>
  import * as PIXI from "pixi.js";
  import { Box, Stack, Cluster } from "creditdesign-svelte-components";
  import { colorScale, spikeScale } from "../../utils/scales.js";

  let margin = { top: 10, bottom: 20, left: 10, right: 10 };
  let entryWidth = 60 + margin.left + margin.right;
  let entryHeight = spikeScale(-300) + margin.top + margin.bottom;

  let spike = (percentChange, width = 4) =>
    `M${-width / 2},0L0,${-percentChange}L${width / 2},0`;
</script>

<style>
  .legend-container {
    font-size: var(--font-size-small-1);
  }
</style>

<div class="legend-container">
  <Box>
    <Stack stackSpace="var(--s-3)">
      <p class="font-weight:bold">Change from baseline of park usage (%)</p>
      <Cluster>
        <svg
          width="{entryWidth}"
          height="{entryHeight}"
          viewBox="{`0 0 ${entryWidth} ${entryHeight}`}"
        >
          <path
            fill="{PIXI.utils.hex2string(colorScale(-300))}"
            transform="{`translate(${margin.left}, ${margin.top})`}"
            d="{spike(spikeScale(300))}"></path>
          {#each [0, 100, 200, 300] as entry}
            <line
              x1="{margin.left + 2}"
              y1="{margin.top - spikeScale(entry)}"
              x2="{margin.left + 15}"
              y2="{margin.top - spikeScale(entry)}"
              stroke="#999"
              stroke-width="1"></line>
            <text
              x="{margin.left + 22}"
              y="{margin.top - spikeScale(entry)}"
              dy="0.3em"
            >
              {entry * -1}
            </text>
          {/each}
        </svg>
        <svg
          width="{entryWidth}"
          height="{entryHeight}"
          viewBox="{`0 0 ${entryWidth} ${entryHeight}`}"
        >
          <path
            fill="{PIXI.utils.hex2string(colorScale(300))}"
            transform="{`translate(${margin.left}, ${
              entryHeight - margin.bottom
            })`}"
            d="{spike(spikeScale(-300))}"></path>
          {#each [0, -100, -200, -300] as entry}
            <line
              x1="{margin.left + 2}"
              y1="{entryHeight - margin.bottom - spikeScale(entry)}"
              x2="{margin.left + 15}"
              y2="{entryHeight - margin.bottom - spikeScale(entry)}"
              stroke="#666"
              stroke-width="1"></line>
            <text
              x="{margin.left + 22}"
              y="{entryHeight - margin.bottom - spikeScale(entry)}"
              dy="0.3em"
            >
              {entry * -1}
            </text>
          {/each}
        </svg>
      </Cluster>
    </Stack>
  </Box>
</div>
