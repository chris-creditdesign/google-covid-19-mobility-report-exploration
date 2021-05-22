function drawLandGraphics() {
  let { landGraphics, landPath, props } = this;
  let { landAreas } = props;
  let { world } = landAreas;

  landGraphics.clear();

  landPath.context(landGraphics);

  landGraphics.beginFill(0xdddddd);
  landPath(world);
  landGraphics.endFill();

  return this;
}

export default drawLandGraphics;
