/*
options = {
	width, height, scale
}
*/

const buildProps = (options) => {
  let height = Math.floor(Math.min(options.height, options.width) * 1.4);
  let width = height;

  return {
    width,
    height,
    currentDay: 4,
    ...options,
  };
};

export default buildProps;
