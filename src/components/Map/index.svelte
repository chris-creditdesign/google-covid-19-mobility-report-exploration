<script>
  import { afterUpdate } from "svelte";
  import { loadMap } from "./actions/loadMap.js";
  import { currentDay } from "../../stores/animation-state.js";

  let updateBackgroundAnimation = false;

  function handelUpdateScrollArea(event) {
    let currentDayInt = parseInt(event.detail.currentDay, 10);
    currentDay.set(currentDayInt);
  }

  afterUpdate(() => {
    updateBackgroundAnimation = true;
  });
</script>

<style>
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .map-container {
    display: flex;
    justify-content: center;
    align-items: center;
    animation: fadein 2s;
  }

  :global(canvas) {
    max-width: 100%;
    max-height: 100%;
  }
</style>

{#if updateBackgroundAnimation}
  <div
    class="map-container"
    use:loadMap
    on:updateScrollArea="{handelUpdateScrollArea}"
  ></div>
{/if}
