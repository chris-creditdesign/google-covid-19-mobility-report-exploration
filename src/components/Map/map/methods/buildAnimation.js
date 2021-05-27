import * as PIXI from "pixi.js";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PixiPlugin } from "gsap/PixiPlugin";

gsap.registerPlugin(ScrollTrigger, PixiPlugin);
PixiPlugin.registerPIXI(PIXI);

function buildAnimation() {
  let { app, graphicsContainer, props } = this;
  let { zoomLevels, node, data } = props;
  let { dates } = data;

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
      currentDay: 461,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top center",
        end: "bottom center",
        scrub: true,
        onUpdate: () => {
          let currentDay = parseInt(animationProps.currentDay, 10);

          node.dispatchEvent(
            new CustomEvent("updateScrollArea", {
              detail: {
                currentDay: dates[currentDay],
              },
            })
          );

          props.currentDay = currentDay;
        },
        onEnter: (d) => {
          node.dispatchEvent(
            new CustomEvent("updateDataDisplay", {
              detail: {
                dataDisplay: d.trigger.dataset.zoom,
              },
            })
          );

          props.dataDisplay = d.trigger.dataset.zoom;
        },
        onEnterBack: (d) => {
          props.dataDisplay = d.trigger.dataset.zoom;

          node.dispatchEvent(
            new CustomEvent("updateDataDisplay", {
              detail: {
                dataDisplay: d.trigger.dataset.zoom,
              },
            })
          );
        },
        onLeave: () => {
          node.dispatchEvent(
            new CustomEvent("updateDataDisplay", {
              detail: {
                dataDisplay: "none",
              },
            })
          );

          props.dataDisplay = "none";
          animationProps.currentDay = 0;
        },
        onLeaveBack: () => {
          node.dispatchEvent(
            new CustomEvent("updateDataDisplay", {
              detail: {
                dataDisplay: "none",
              },
            })
          );

          props.dataDisplay = "none";
          animationProps.currentDay = 0;
        },
      },
    });
  });

  gsap.to(graphicsContainer, {
    pixi: zoomLevels.europe,
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
      pixi: zoomLevels.europe,
    },
    {
      pixi: zoomLevels.usa,
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
      pixi: zoomLevels.usa,
    },
    {
      pixi: zoomLevels.world,
      ease: "power1.inOut",
      immediateRender: false,
      scrollTrigger: {
        trigger: "#end-start",
        start: "top center",
        scrub: true,
      },
    }
  );

  /* -------------------------- Update the animation -------------------------- */

  // Listen for animate update and redraw the spikes
  app.ticker.add(() => {
    this.drawDataGraphics();
  });

  return this;
}

export default buildAnimation;
