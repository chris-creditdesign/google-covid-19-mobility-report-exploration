import * as PIXI from "pixi.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PixiPlugin } from "gsap/PixiPlugin";

gsap.registerPlugin(ScrollTrigger, PixiPlugin);
PixiPlugin.registerPIXI(PIXI);

const getScaleAndPivot = (path, geoJsonArea, width, height) => {
  const [[x0, y0], [x1, y1]] = path.bounds(geoJsonArea);
  const scale = Math.min(
    8,
    0.9 / Math.max((x1 - x0) / width, (y1 - y0) / height)
  );
  const pivotX = (x0 + x1) / 2;
  const pivotY = (y0 + y1) / 2;

  return { scale, pivotX, pivotY };
};

function buildAnimation() {
  let { props, landAreas, landPath } = this;
  let { europe, usa } = landAreas;
  let { width, height } = props;

  const europeZoom = getScaleAndPivot(landPath, europe, width, height);
  const usaZoom = getScaleAndPivot(landPath, usa, width, height);

  // We stop Pixi ticker using stop() function because autoStart = false does NOT stop the shared ticker:
  // doc: http://pixijs.download/release/docs/PIXI.Application.html
  this.app.ticker.stop();

  // Now, we use 'tick' from gsap
  gsap.ticker.add(() => {
    this.app.ticker.update();
  });

  const usaEnd = gsap.timeline({
    scrollTrigger: {
      trigger: "#usa-end",
      start: "top center",
      scrub: true,
    },
  });

  usaEnd.fromTo(
    this.landGraphics,
    {
      pixi: {
        scaleX: usaZoom.scale,
        scaleY: usaZoom.scale,
        pivotX: usaZoom.pivotX,
        pivotY: usaZoom.pivotY,
      },
    },
    {
      pixi: {
        scaleX: 1,
        scaleY: 1,
        pivotX: width / 2,
        pivotY: height / 2,
      },
    }
  );

  const usaStart = gsap.timeline({
    scrollTrigger: {
      trigger: "#usa-start",
      start: "top center",
      scrub: true,
    },
  });

  usaStart.fromTo(
    this.landGraphics,
    {
      pixi: {
        scaleX: 1,
        scaleY: 1,
        pivotX: width / 2,
        pivotY: height / 2,
      },
    },
    {
      pixi: {
        scaleX: usaZoom.scale,
        scaleY: usaZoom.scale,
        pivotX: usaZoom.pivotX,
        pivotY: usaZoom.pivotY,
      },
    }
  );

  const europeEnd = gsap.timeline({
    scrollTrigger: {
      trigger: "#europe-end",
      start: "top center",
      scrub: true,
    },
  });

  europeEnd.fromTo(
    this.landGraphics,
    {
      pixi: {
        scaleX: europeZoom.scale,
        scaleY: europeZoom.scale,
        pivotX: europeZoom.pivotX,
        pivotY: europeZoom.pivotY,
      },
    },
    {
      pixi: {
        scaleX: 1,
        scaleY: 1,
        pivotX: width / 2,
        pivotY: height / 2,
      },
    }
  );

  const europeStart = gsap.timeline({
    scrollTrigger: {
      trigger: "#europe-start",
      start: "top center",
      scrub: true,
    },
  });

  europeStart.fromTo(
    this.landGraphics,
    {
      pixi: {
        scaleX: 1,
        scaleY: 1,
        pivotX: width / 2,
        pivotY: height / 2,
      },
    },
    {
      pixi: {
        scaleX: europeZoom.scale,
        scaleY: europeZoom.scale,
        pivotX: europeZoom.pivotX,
        pivotY: europeZoom.pivotY,
      },
    }
  );

  return this;
}

export default buildAnimation;
