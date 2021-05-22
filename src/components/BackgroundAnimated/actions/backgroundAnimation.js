import buildProps from "../functions/buildProps.js";
import buildLandAreas from "../functions/buildLandAreas";
import buildData from "../functions/buildData.js";
import Map from "../map/Map.js";

export const backgroundAnimation = async (node, scrollPosition) => {
  let width = window.innerWidth;
  let height = window.innerHeight;
  let resolution = window.devicePixelRatio;

  // 1. Set up the props based on the height of the screen
  // and await while we load the data.
  let props = buildProps({
    width,
    height,
    resolution,
  });
  const landAreas = await buildLandAreas();
  const data = await buildData();

  // 5. Build a pixi application
  let myMap = Map({ ...props, data, landAreas });

  myMap
    .buildApp()
    .buildProjections()
    .buildLandGraphics()
    .buildDataGraphics()
    .drawLandGraphics()
    .drawDataGraphics()
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
