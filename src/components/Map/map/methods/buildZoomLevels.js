const getScaleAndPivot = (path, geoJsonArea, width, height) => {
  const [[x0, y0], [x1, y1]] = path.bounds(geoJsonArea);
  const scale = 0.9 / Math.max((x1 - x0) / width, (y1 - y0) / height);
  const pivotX = (x0 + x1) / 2;
  const pivotY = (y0 + y1) / 2;

  return { scaleX: scale, scaleY: scale, pivotX, pivotY };
};

function buildZoomLevels() {
  let { props, landPath } = this;
  let { width, height, landAreas, zoomLevels } = props;
  let { england } = landAreas;

  zoomLevels.england = getScaleAndPivot(landPath, england, width, height);

  return this;
}

export default buildZoomLevels;
