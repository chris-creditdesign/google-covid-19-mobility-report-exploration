import * as PIXI from "pixi.js";

function buildDataGraphics() {
  let { app, props } = this;
  let { width, height } = props;

  this.dataGraphics = new PIXI.Graphics();
  this.dataGraphics.x = width / 2;
  this.dataGraphics.y = height / 2;
  this.dataGraphics.pivot.set(width / 2, height / 2);

  app.stage.addChild(this.dataGraphics);

  return this;
}

export default buildDataGraphics;
