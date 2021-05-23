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
  let { app, landPath, graphicsContainer, props } = this;
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

  // 448 length of dates array

  const scrollSections = gsap.utils.toArray(".scroll-section");
  scrollSections.forEach((section) => {
    gsap.to(animationProps, {
      currentDay: 444,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  gsap.to(graphicsContainer, {
    pixi: zoomInEurope,
    ease: "power1.inOut",
    scrollTrigger: {
      trigger: "#europe-start",
      start: "top center",
      scrub: true,
    },
  });

  gsap.fromTo(
    graphicsContainer,
    {
      pixi: zoomInEurope,
    },
    {
      pixi: zoomInUsa,
      ease: "power1.inOut",
      immediateRender: false,
      scrollTrigger: {
        trigger: "#usa-start",
        start: "top center",
        scrub: true,
      },
    }
  );

  gsap.fromTo(
    graphicsContainer,
    {
      pixi: zoomInUsa,
    },
    {
      pixi: zoomOutWorld,
      ease: "power1.inOut",
      immediateRender: false,
      scrollTrigger: {
        trigger: "#final-start",
        start: "top center",
        scrub: true,
      },
    }
  );

  /* -------------------------- Update the animation -------------------------- */

  // Listen for animate update and redraw the spikes
  app.ticker.add(() => {
    const currentDay = parseInt(animationProps.currentDay, 10);

    props.currentDay = currentDay;
    this.drawDataGraphics();
  });

  return this;
}

export default buildAnimation;
