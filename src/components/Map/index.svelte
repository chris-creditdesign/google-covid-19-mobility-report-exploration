<script>
  import { afterUpdate } from "svelte";
  import { loadMap } from "./actions/loadMap.js";

  let updateBackgroundAnimation = false;

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
  <div class="map-container" use:loadMap></div>
{/if}
