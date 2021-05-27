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
  h1 {
    margin-top: var(--s6);
  }

  footer {
    margin-bottom: var(--s3);
  }

  .scroll-section {
    border: 1px solid red;
    min-height: 200vh;
  }
</style>

<BackgroundPlaceholder />

<Stack stackSpace="var(--s6)">
  <Center>
    <heading>
      <Stack>
        <h1>Hello is this working</h1>
        <p>Let's make this into a standfirst</p>
      </Stack>
    </heading>
  </Center>

  <main bind:this="{$widthCheckElement}" id="main-content">
    <Center>
      <Stack stackSpace="50vh">
        <div class="scroll-section" data-zoom="world">
          <Stack>
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
          <Stack>
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
          <Stack>
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
          <Stack>
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
    <footer>Let's make this a footer.</footer>
  </Center>
</Stack>
