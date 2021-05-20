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

  return this;
}

export default buildApp;
