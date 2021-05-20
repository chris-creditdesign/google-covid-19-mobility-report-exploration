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
    ...options,
  };
};

export default buildProps;
