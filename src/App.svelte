<script>
  import { onMount } from "svelte";
  import { Center, Stack } from "creditdesign-svelte-components";
  import { allowAnimation } from "./stores/prefers-reduced-motion.js";
  import BackgroundPlaceholder from "./components/BackgroundPlaceholder/index.svelte";
  import data from "./content/data.json";

  const {
    headline,
    standfirst,
    section_one_text,
    section_two_headline,
    section_two_text,
    section_three_headline,
    section_three_text,
    section_four_headline,
    section_four_text,
    footer_text,
  } = data;

  onMount(() => {
    // allowAnimation should be true if the reader has set 'no-preference'
    // otherwise it should be false, and this should stop the animations
    // from being loaded
    let QUERY = "(prefers-reduced-motion: no-preference)";
    allowAnimation.set(window.matchMedia(QUERY).matches);
  });
</script>

<style>
  :global(:root) {
    --global-stack-space: 50vh;
  }

  h1 {
    margin-top: var(--s6);
  }

  heading {
    text-align: center;
  }

  main p {
    padding: var(--s1);
    background-color: var(--white-0);
  }

  .scroll-section {
    min-height: 200vh;
  }
</style>

<BackgroundPlaceholder />

<Stack stackSpace="var(--global-stack-space)">
  <Center>
    <heading>
      <Stack>
        <h1>{@html headline}</h1>
        <p>{@html standfirst}</p>
      </Stack>
    </heading>
  </Center>

  <main id="main-content">
    <Center>
      <Stack stackSpace="var(--global-stack-space)">
        <div class="scroll-section" data-zoom="world">
          <Stack stackSpace="var(--global-stack-space)">
            {#each section_one_text as text}
              <p>{@html text.value}</p>
            {/each}
          </Stack>
        </div>

        <h2 id="england-start">{@html section_two_headline}</h2>

        <div class="scroll-section" data-zoom="england">
          <Stack stackSpace="var(--global-stack-space)">
            {#each section_two_text as text}
              <p>{@html text.value}</p>
            {/each}
          </Stack>
        </div>
      </Stack>
    </Center>
  </main>
</Stack>
