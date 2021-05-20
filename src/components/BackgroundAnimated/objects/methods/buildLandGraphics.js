import * as PIXI from "pixi.js";

function buildLandGraphics() {
  let { app, props } = this;
  let { width, height } = props;

  this.landGraphics = new PIXI.Graphics();
  this.landGraphics.x = width / 2;
  this.landGraphics.y = height / 2;
  this.landGraphics.pivot.set(width / 2, height / 2);

  app.stage.addChild(this.landGraphics);

  return this;
}

export default buildLandGraphics;
