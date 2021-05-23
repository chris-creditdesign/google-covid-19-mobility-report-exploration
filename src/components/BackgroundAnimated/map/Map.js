import buildApp from "./methods/buildApp.js";
import buildLandGraphics from "./methods/buildLandGraphics.js";
import drawLandGraphics from "./methods/drawLandGraphics.js";
import buildProjections from "./methods/buildProjections.js";
import buildAnimation from "./methods/buildAnimation.js";
import buildDataGraphics from "./methods/buildDataGraphics.js";
import drawDataGraphics from "./methods/drawDataGraphics.js";
import buildZoomLevels from "./methods/buildZoomLevels.js";

const Map = (props) => ({
  props,
  buildApp,
  buildLandGraphics,
  drawLandGraphics,
  buildProjections,
  buildAnimation,
  buildDataGraphics,
  drawDataGraphics,
  buildZoomLevels,
});

export default Map;
