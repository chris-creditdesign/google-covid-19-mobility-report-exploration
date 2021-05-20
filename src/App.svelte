<script>
  import { onMount } from "svelte";
  import { allowAnimation } from "./stores/prefers-reduced-motion.js";
  import { widthCheckElement } from "./stores/check-wide-enough.js";
  import BackgroundContainer from "./components/BackgroundContainer/index.svelte";

  onMount(() => {
    // allowAnimation should be true if the reader has set 'no-preference'
    // otherwise it should be false, and this should stop the animations
    // from being loaded
    let QUERY = "(prefers-reduced-motion: no-preference)";
    allowAnimation.set(window.matchMedia(QUERY).matches);
  });
</script>

<style>
  :global(.background-container) {
    position: fixed;
    top: 0;
    left: 0;
    z-index: -100;
    width: 100vw;
    height: 100vh;
  }

  p {
    max-width: 30ch;
    margin-top: 300px;
  }
</style>

<!-- <Head articleData="{articleData}" /> -->

<heading>
  <h1>Hello is this working</h1>
  <p>Let's make this into a standfirst</p>
</heading>

<main bind:this="{$widthCheckElement}" id="main-content">
  <BackgroundContainer />

  <div>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, harum.
      Odio temporibus expedita, obcaecati quo fugiat voluptatem vero dolor
      delectus debitis ut eaque adipisci necessitatibus, accusantium odit
      nesciunt? Est, officiis!
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, harum.
      Odio temporibus expedita, obcaecati quo fugiat voluptatem vero dolor
      delectus debitis ut eaque adipisci necessitatibus, accusantium odit
      nesciunt? Est, officiis!
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, harum.
      Odio temporibus expedita, obcaecati quo fugiat voluptatem vero dolor
      delectus debitis ut eaque adipisci necessitatibus, accusantium odit
      nesciunt? Est, officiis!
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, harum.
      Odio temporibus expedita, obcaecati quo fugiat voluptatem vero dolor
      delectus debitis ut eaque adipisci necessitatibus, accusantium odit
      nesciunt? Est, officiis!
    </p>

    <h2 id="europe-start">Europe start</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, harum.
      Odio temporibus expedita, obcaecati quo fugiat voluptatem vero dolor
      delectus debitis ut eaque adipisci necessitatibus, accusantium odit
      nesciunt? Est, officiis!
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, harum.
      Odio temporibus expedita, obcaecati quo fugiat voluptatem vero dolor
      delectus debitis ut eaque adipisci necessitatibus, accusantium odit
      nesciunt? Est, officiis!
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, harum.
      Odio temporibus expedita, obcaecati quo fugiat voluptatem vero dolor
      delectus debitis ut eaque adipisci necessitatibus, accusantium odit
      nesciunt? Est, officiis!
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, harum.
      Odio temporibus expedita, obcaecati quo fugiat voluptatem vero dolor
      delectus debitis ut eaque adipisci necessitatibus, accusantium odit
      nesciunt? Est, officiis!
    </p>

    <h2 id="europe-end">Europe end</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, harum.
      Odio temporibus expedita, obcaecati quo fugiat voluptatem vero dolor
      delectus debitis ut eaque adipisci necessitatibus, accusantium odit
      nesciunt? Est, officiis!
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, harum.
      Odio temporibus expedita, obcaecati quo fugiat voluptatem vero dolor
      delectus debitis ut eaque adipisci necessitatibus, accusantium odit
      nesciunt? Est, officiis!
    </p>

    <h2 id="usa-start">United States of the united states of america</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, harum.
      Odio temporibus expedita, obcaecati quo fugiat voluptatem vero dolor
      delectus debitis ut eaque adipisci necessitatibus, accusantium odit
      nesciunt? Est, officiis!
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, harum.
      Odio temporibus expedita, obcaecati quo fugiat voluptatem vero dolor
      delectus debitis ut eaque adipisci necessitatibus, accusantium odit
      nesciunt? Est, officiis!
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, harum.
      Odio temporibus expedita, obcaecati quo fugiat voluptatem vero dolor
      delectus debitis ut eaque adipisci necessitatibus, accusantium odit
      nesciunt? Est, officiis!
    </p>

    <h2 id="usa-end">USA end</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, harum.
      Odio temporibus expedita, obcaecati quo fugiat voluptatem vero dolor
      delectus debitis ut eaque adipisci necessitatibus, accusantium odit
      nesciunt? Est, officiis!
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, harum.
      Odio temporibus expedita, obcaecati quo fugiat voluptatem vero dolor
      delectus debitis ut eaque adipisci necessitatibus, accusantium odit
      nesciunt? Est, officiis!
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, harum.
      Odio temporibus expedita, obcaecati quo fugiat voluptatem vero dolor
      delectus debitis ut eaque adipisci necessitatibus, accusantium odit
      nesciunt? Est, officiis!
    </p>
  </div>
</main>

<footer>Let's make this a footer.</footer>
