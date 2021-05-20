import App from "./App.svelte";

let app;

function init() {
  /* ---------------------------- Svelte component ---------------------------- */
  app = new App({
    target: document.querySelector("#statically-rendered-html"),
    hydrate: true,
  });
}

document.addEventListener("DOMContentLoaded", init);

export default app;
