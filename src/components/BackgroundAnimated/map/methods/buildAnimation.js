import * as PIXI from "pixi.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PixiPlugin } from "gsap/PixiPlugin";

gsap.registerPlugin(ScrollTrigger, PixiPlugin);
PixiPlugin.registerPIXI(PIXI);

function buildAnimation() {
  let { app, graphicsContainer, props } = this;
  let { zoom } = props;

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
    pixi: zoom.europe,
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
      pixi: zoom.europe,
    },
    {
      pixi: zoom.usa,
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
      pixi: zoom.usa,
    },
    {
      pixi: zoom.world,
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
