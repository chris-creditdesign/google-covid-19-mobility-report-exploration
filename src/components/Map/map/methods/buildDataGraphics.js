import * as PIXI from "pixi.js";

function buildDataGraphics() {
  let { graphicsContainer } = this;

  this.dataGraphics = new PIXI.Graphics();

  graphicsContainer.addChild(this.dataGraphics);

  return this;
}

export default buildDataGraphics;
