import * as PIXI from "pixi.js";

function buildLandGraphics() {
  let { graphicsContainer } = this;

  this.landGraphics = new PIXI.Graphics();

  graphicsContainer.addChild(this.landGraphics);

  return this;
}

export default buildLandGraphics;
