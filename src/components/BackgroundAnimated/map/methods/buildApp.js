import * as PIXI from "pixi.js";

function buildApp() {
  let { width, height, resolution } = this.props;

  this.app = new PIXI.Application({
    width,
    height,
    resolution,
    antialias: true,
    backgroundAlpha: 0.0,
  });

  this.graphicsContainer = new PIXI.Container();

  this.graphicsContainer.x = width / 2;
  this.graphicsContainer.y = height / 2;
  this.graphicsContainer.pivot.set(width / 2, height / 2);

  this.app.stage.addChild(this.graphicsContainer);

  return this;
}

export default buildApp;
