/*
options = {
	width, height, scale
}
*/

const buildProps = (options) => {
  let { width, height } = options;

  let defaultZoom = {
    scaleX: 1,
    scaleY: 1,
    pivotX: width / 2,
    pivotY: height / 2,
  };

  let zoomLevels = {
    world: defaultZoom,
    usa: defaultZoom,
    europe: defaultZoom,
  };

  return {
    currentDay: 4,
    dataDisplay: "none",
    zoomLevels,
    ...options,
  };
};

export default buildProps;
