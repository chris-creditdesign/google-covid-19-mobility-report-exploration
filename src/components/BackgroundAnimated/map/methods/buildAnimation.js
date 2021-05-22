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
  let { app, props, landPath } = this;
  let { width, height, landAreas } = props;
  let { europe, usa } = landAreas;

  let animationProps = {
    currentDay: 4,
  };

  /* -------------------------- Set up PIXI and GSAP -------------------------- */

  // We stop Pixi ticker using stop() function because autoStart = false does NOT stop the shared ticker:
  // doc: http://pixijs.download/release/docs/PIXI.Application.html
  this.app.ticker.stop();

  // Now, we use 'tick' from gsap
  gsap.ticker.add(() => {
    this.app.ticker.update();
  });

  /* --------------------------- Zoom levels --------------------------- */

  const europeZoom = getScaleAndPivot(landPath, europe, width, height);
  const usaZoom = getScaleAndPivot(landPath, usa, width, height);

  const zoomOutWorld = {
    scaleX: 1,
    scaleY: 1,
    pivotX: width / 2,
    pivotY: height / 2,
  };

  const zoomInUsa = {
    scaleX: usaZoom.scale,
    scaleY: usaZoom.scale,
    pivotX: usaZoom.pivotX,
    pivotY: usaZoom.pivotY,
  };

  const zoomInEurope = {
    scaleX: europeZoom.scale,
    scaleY: europeZoom.scale,
    pivotX: europeZoom.pivotX,
    pivotY: europeZoom.pivotY,
  };

  /* ----------------------------- GSAP timelines ----------------------------- */

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: document.body,
      scrub: true,
      start: "top top",
      end: "bottom bottom",
      defaults: { duration: 1 },
    },
  });

  tl.to(animationProps, { currentDay: 300 });

  // Listen for animate update and redraw the spikes
  app.ticker.add(() => {
    const currentDay = parseInt(animationProps.currentDay, 10);

    props.currentDay = currentDay;
    this.drawDataGraphics();
  });

  //   const usaEnd = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: "#usa-end",
  //       start: "top center",
  //       scrub: true,
  //     },
  //   });

  //   usaEnd.fromTo(
  //     this.landGraphics,
  //     {
  //       pixi: zoomInUsa,
  //     },
  //     {
  //       pixi: zoomOutWorld,
  //     }
  //   );

  //   const usaStart = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: "#usa-start",
  //       start: "top center",
  //       scrub: true,
  //     },
  //   });

  //   usaStart.fromTo(
  //     this.landGraphics,
  //     {
  //       pixi: zoomInEurope,
  //     },
  //     {
  //       pixi: zoomInUsa,
  //     }
  //   );

  //   const europeStart = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: "#europe-start",
  //       start: "top center",
  //       scrub: true,
  //     },
  //   });

  //   europeStart.fromTo(
  //     this.landGraphics,
  //     {
  //       pixi: zoomOutWorld,
  //     },
  //     {
  //       pixi: zoomInEurope,
  //     }
  //   );

  return this;
}

export default buildAnimation;
