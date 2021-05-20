<script>
  import { onMount } from "svelte";
  import BackgroundStatic from "../BackgroundStatic/index.svelte";
  import { allowAnimation } from "../../stores/prefers-reduced-motion.js";

  let innerWidth = 730;
  let shouldAnimate = false;

  let backgroundComponents = new Map();
  backgroundComponents.set(false, BackgroundStatic);

  // This should go into the content.json
  let altText = "Alt text for diabetes animation.";

  $: selectedComponent = backgroundComponents.get(shouldAnimate);

  onMount(async () => {
    innerWidth = window.innerWidth;
    const module = await import("../BackgroundAnimated/index.svelte");
    if ($allowAnimation && innerWidth > 730) {
      //   BackgroundAnimated = module.default;
      shouldAnimate = true;
      backgroundComponents.set(true, module.default);
    }
  });
</script>

<svelte:component this="{selectedComponent}" altText="{altText}" />
