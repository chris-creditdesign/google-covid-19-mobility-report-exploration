<script>
  import { onMount, afterUpdate } from "svelte";
  import { scaleLinear } from "d3-scale";
  import { backgroundAnimation } from "./actions/backgroundAnimation.js";

  export let altText;

  let updateBackgroundAnimation = false;
  let scrollY = 0;
  let offsetHeight = 14000;

  $: scrollScale = scaleLinear().domain([0, offsetHeight]).range([0, 1]);
  $: scrollPosition = 0;

  onMount(() => {
    offsetHeight = document.body.offsetHeight;
  });

  afterUpdate(() => {
    updateBackgroundAnimation = true;
    scrollPosition = scrollScale(scrollY);
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
  .background-container {
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    animation: fadein 2s;
  }

  :global(canvas) {
    max-width: 100%;
    max-height: 100%;
  }
</style>

<svelte:window bind:scrollY />

{#if updateBackgroundAnimation}
  <div
    class="background-container"
    role="img"
    aria-label="{altText}"
    use:backgroundAnimation="{scrollPosition}"
  ></div>
{/if}
