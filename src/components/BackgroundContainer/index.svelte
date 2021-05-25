<script>
  import Map from "../Map/index.svelte";
  import Calendar from "../Calendar/index.svelte";

  export let altText;
</script>

<style>
  .background-container {
    top: 0;
    left: 0;
    position: fixed;
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr auto;
    grid-template-columns: 1fr;
    pointer-events: none;
    z-index: -100;
  }

  :global(.map-container) {
    grid-row: 1 / 4;
    grid-column: 1 / 2;
    z-index: -999;
  }

  :global(.calendar-container) {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
  }

  .legend-container {
    grid-row: 3 / 4;
    grid-column: 1 / 2;
  }
</style>

<div class="background-container" role="img" aria-label="{altText}">
  <Map />

  <Calendar />

  <div class="legend-container">
    <h2>This is the Legend</h2>
  </div>
</div>
