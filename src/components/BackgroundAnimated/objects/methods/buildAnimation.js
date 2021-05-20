import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
  let ease = "none";
  let duration = 1;

  const europeZoom = getScaleAndPivot(landPath, europe, width, height);
  const usaZoom = getScaleAndPivot(landPath, usa, width, height);

  // We stop Pixi ticker using stop() function because autoStart = false does NOT stop the shared ticker:
  // doc: http://pixijs.download/release/docs/PIXI.Application.html
  this.app.ticker.stop();

  // Now, we use 'tick' from gsap
  gsap.ticker.add(() => {
    this.app.ticker.update();
  });

  // Create a timeline instance
  this.masterTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: document.body,
      scrub: true,
      start: "top top",
      end: "bottom bottom",
      defaults: { duration, ease },
    },
  });

  this.masterTimeline
    .to(
      this.landGraphics.scale,
      { x: europeZoom.scale, y: europeZoom.scale },
      0
    )
    .to(
      this.landGraphics.pivot,
      {
        x: europeZoom.pivotX,
        y: europeZoom.pivotY,
      },
      0
    )
    .to(this.landGraphics.scale, { x: usaZoom.scale, y: usaZoom.scale }, 1)
    .to(
      this.landGraphics.pivot,
      {
        x: usaZoom.pivotX,
        y: usaZoom.pivotY,
      },
      1
    )
    .to(this.landGraphics.scale, { x: 1, y: 1 }, 2)
    .to(
      this.landGraphics.pivot,
      {
        x: width / 2,
        y: height / 2,
      },
      2
    );

  return this;
}

export default buildAnimation;
