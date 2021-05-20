import buildApp from "./methods/buildApp.js";
import buildLandGraphics from "./methods/buildLandGraphics.js";
import drawLandGraphics from "./methods/drawLandGraphics.js";
import buildProjections from "./methods/buildProjections.js";
import buildLandAreas from "./methods/buildLandAreas.js";
import buildAnimation from "./methods/buildAnimation.js";

const Map = (props) => ({
  props,
  buildApp,
  buildLandGraphics,
  drawLandGraphics,
  buildProjections,
  buildLandAreas,
  buildAnimation,
});

export default Map;
