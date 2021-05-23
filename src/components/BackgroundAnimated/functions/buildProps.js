/*
options = {
	width, height, scale
}
*/

const buildProps = (options) => {
  let height = Math.floor(Math.min(options.height, options.width) * 1.4);
  let width = height;

  let defaultZoom = {
    scaleX: 1,
    scaleY: 1,
    pivotX: width / 2,
    pivotY: height / 2,
  };

  let zoom = {
    world: defaultZoom,
    usa: defaultZoom,
    europe: defaultZoom,
  };

  return {
    width,
    height,
    currentDay: 4,
    zoom,
    ...options,
  };
};

export default buildProps;
