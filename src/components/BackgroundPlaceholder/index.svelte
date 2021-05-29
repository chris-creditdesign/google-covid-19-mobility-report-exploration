<script>
  import { onMount } from "svelte";
  import { allowAnimation } from "../../stores/prefers-reduced-motion.js";

  let shouldAnimate = false;

  let backgroundComponents = new Map();
  backgroundComponents.set(false, null);

  // This should go into the content.json
  let altText = "Alt text for diabetes animation.";

  $: selectedComponent = backgroundComponents.get(shouldAnimate);

  onMount(async () => {
    const BackgroundContainer = await import(
      "../BackgroundContainer/index.svelte"
    );
    if ($allowAnimation) {
      shouldAnimate = true;
      backgroundComponents.set(true, BackgroundContainer.default);
    }
  });
</script>

<svelte:component this="{selectedComponent}" altText="{altText}" />
