// import * as dat from "dat.gui";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

import buildProps from "../functions/build-props.js";
import Map from "../objects/Map";

export const backgroundAnimation = async (node, scrollPosition) => {
  let width = window.innerWidth;
  let height = window.innerHeight;
  let resolution = window.devicePixelRatio;

  // 1. Set up the props based on the height of the screen.
  let props = buildProps({
    width,
    height,
    resolution,
  });

  // 5. Build a pixi application
  const createMap = async () =>
    Map({ ...props })
      .buildApp()
      .buildLandAreas();

  // Await while we load the data
  let myMap = await createMap();

  myMap
    .buildProjections()
    .buildLandGraphics()
    .drawLandGraphics()
    .buildAnimation();

  // 6. Render the app to the screen
  node.appendChild(myMap.app.view);

  return {
    update(newScrollPosition) {
      console.log("newScrollPosition");
      return false;
    },
    destroy() {
      return false;
    },
  };
};
