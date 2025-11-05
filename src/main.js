import "./app.scss";

import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
gsap.registerPlugin(DrawSVGPlugin);
import barba from "@barba/core";

gsap.set(".draw-me", {
  drawSVG: "0% 0%",
  strokeWidth: 0,
  xPercent: -10,
  yPercent: -5,
});

barba.init({
  transitions: [
    {
      name: "default-transition",
      once(data) {
        console.log("once - initial load");

        const tl = gsap.timeline();

        tl.to(".draw-me", {
          duration: 1.85,
          drawSVG: "0% 100%",
          strokeWidth: 45,
          xPercent: 0,
          ease: "power2.inOut",
        }).to(
          ".draw-me",
          {
            duration: 1.85,
            drawSVG: "100% 100%",
            strokeWidth: 0,
            ease: "power2.inOut",
            xPercent: 5,
          },
          ">"
        );
        tl.onComplete(() => {
          gsap.set(".draw-me", {
            drawSVG: "0% 0%",
            strokeWidth: 0,
            xPercent: -10,
          });
          tl.kill();
        });

        return tl;
      },
      leave(data) {
        console.log("leave");

        gsap.set(".draw-me", {
          drawSVG: "0%",
          strokeWidth: 0,
          xPercent: -10,
          yPercent: -5,
        });
        const current = data.current.container;

        return gsap.to(".draw-me", {
          duration: 1.85,
          drawSVG: "0% 100%",
          strokeWidth: 45,
          xPercent: 0,
          ease: "power2.inOut",
          onStart: () => {
            gsap.set(".draw-me", {
              drawSVG: "0% 0%",
              strokeWidth: 0,
              xPercent: -10,
              yPercent: -5,
            });
          },
          onComplete: () => {
            current.remove();
          },
        });
      },
      enter(data) {
        console.log("enter");

        gsap.set(".draw-me", {
          drawSVG: "0% 100%",
          strokeWidth: 45,
          xPercent: 5,
          yPercent: 0,
        });

        return gsap.to(".draw-me", {
          duration: 1.85,
          drawSVG: "100% 100%",
          strokeWidth: 0,
          xPercent: 5,
          ease: "power2.inOut",
          onComplete: () => {
            gsap.set(".draw-me", {
              drawSVG: "0% 0%",
              strokeWidth: 0,
              xPercent: -10,
              yPercent: -5,
            });
          },
        });
      },
    },
  ],
});
