<script>
  import { onMount } from "svelte";
  import { Center, Stack } from "creditdesign-svelte-components";
  import { allowAnimation } from "./stores/prefers-reduced-motion.js";
  import { widthCheckElement } from "./stores/check-wide-enough.js";
  import BackgroundPlaceholder from "./components/BackgroundPlaceholder/index.svelte";

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

  footer {
    margin-bottom: var(--s3);
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
        <h1>Google COVID-19 mobility reports</h1>
        <p>An exploration</p>
      </Stack>
    </heading>
  </Center>

  <main bind:this="{$widthCheckElement}" id="main-content">
    <Center>
      <Stack stackSpace="var(--global-stack-space)">
        <div class="scroll-section" data-zoom="world">
          <Stack stackSpace="var(--global-stack-space)">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
              harum. Odio temporibus expedita, obcaecati quo fugiat voluptatem
              vero dolor delectus debitis ut eaque adipisci necessitatibus,
              accusantium odit nesciunt? Est, officiis!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
              harum. Odio temporibus expedita, obcaecati quo fugiat voluptatem
              vero dolor delectus debitis ut eaque adipisci necessitatibus,
              accusantium odit nesciunt? Est, officiis!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
              harum. Odio temporibus expedita, obcaecati quo fugiat voluptatem
              vero dolor delectus debitis ut eaque adipisci necessitatibus,
              accusantium odit nesciunt? Est, officiis!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
              harum. Odio temporibus expedita, obcaecati quo fugiat voluptatem
              vero dolor delectus debitis ut eaque adipisci necessitatibus,
              accusantium odit nesciunt? Est, officiis!
            </p>
          </Stack>
        </div>

        <h2 id="europe-start">Europe</h2>

        <div class="scroll-section" data-zoom="europe">
          <Stack stackSpace="var(--global-stack-space)">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
              harum. Odio temporibus expedita, obcaecati quo fugiat voluptatem
              vero dolor delectus debitis ut eaque adipisci necessitatibus,
              accusantium odit nesciunt? Est, officiis!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
              harum. Odio temporibus expedita, obcaecati quo fugiat voluptatem
              vero dolor delectus debitis ut eaque adipisci necessitatibus,
              accusantium odit nesciunt? Est, officiis!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
              harum. Odio temporibus expedita, obcaecati quo fugiat voluptatem
              vero dolor delectus debitis ut eaque adipisci necessitatibus,
              accusantium odit nesciunt? Est, officiis!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
              harum. Odio temporibus expedita, obcaecati quo fugiat voluptatem
              vero dolor delectus debitis ut eaque adipisci necessitatibus,
              accusantium odit nesciunt? Est, officiis!
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
              harum. Odio temporibus expedita, obcaecati quo fugiat voluptatem
              vero dolor delectus debitis ut eaque adipisci necessitatibus,
              accusantium odit nesciunt? Est, officiis!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
              harum. Odio temporibus expedita, obcaecati quo fugiat voluptatem
              vero dolor delectus debitis ut eaque adipisci necessitatibus,
              accusantium odit nesciunt? Est, officiis!
            </p>
          </Stack>
        </div>

        <h2 id="usa-start">United States of the America</h2>

        <div class="scroll-section" data-zoom="usa">
          <Stack stackSpace="var(--global-stack-space)">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
              harum. Odio temporibus expedita, obcaecati quo fugiat voluptatem
              vero dolor delectus debitis ut eaque adipisci necessitatibus,
              accusantium odit nesciunt? Est, officiis!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
              harum. Odio temporibus expedita, obcaecati quo fugiat voluptatem
              vero dolor delectus debitis ut eaque adipisci necessitatibus,
              accusantium odit nesciunt? Est, officiis!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
              harum. Odio temporibus expedita, obcaecati quo fugiat voluptatem
              vero dolor delectus debitis ut eaque adipisci necessitatibus,
              accusantium odit nesciunt? Est, officiis!
            </p>
          </Stack>
        </div>

        <h2 id="end-start">Final section start</h2>

        <div class="scroll-section" data-zoom="world">
          <Stack stackSpace="var(--global-stack-space)">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
              harum. Odio temporibus expedita, obcaecati quo fugiat voluptatem
              vero dolor delectus debitis ut eaque adipisci necessitatibus,
              accusantium odit nesciunt? Est, officiis!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
              harum. Odio temporibus expedita, obcaecati quo fugiat voluptatem
              vero dolor delectus debitis ut eaque adipisci necessitatibus,
              accusantium odit nesciunt? Est, officiis!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
              harum. Odio temporibus expedita, obcaecati quo fugiat voluptatem
              vero dolor delectus debitis ut eaque adipisci necessitatibus,
              accusantium odit nesciunt? Est, officiis!
            </p>
          </Stack>
        </div>
      </Stack>
    </Center>
  </main>

  <Center>
    <footer>
      <p>
        The code for this page can be viewed on <a
          href="https://github.com/chris-creditdesign/google-covid-19-mobility-report-exploration"
          >GitHub</a
        >.
      </p>
    </footer>
  </Center>
</Stack>
