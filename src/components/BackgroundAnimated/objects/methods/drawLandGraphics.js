function drawLandGraphics() {
  let { landGraphics, landPath, landAreas } = this;
  let { world } = landAreas;

  landGraphics.clear();

  landPath.context(landGraphics);

  landGraphics.beginFill(0xdddddd);
  landPath(world);
  landGraphics.endFill();

  return this;
}

export default drawLandGraphics;
