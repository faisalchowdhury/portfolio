import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function HeroAnimation() {
  useEffect(() => {
    const mm = gsap.matchMedia();

    const initAnimations = () => {
      mm.add("(min-width: 800px)", () => {
        const tl = gsap.timeline();
        tl.to("#logo-img", { rotation: 30, marginLeft: "-28vw", opacity: 0 })
          .to(".para-1", { marginLeft: "18vw" }, "<")
          .to(".para-1 .text.assist", { opacity: 0, stagger: 0.2 }, "<")
          .to(".para-1 .text.assist", { width: 0, stagger: 0.2 }, "<0.3")
          .to(".para-1", { width: "60vw" }, "<")
          .to(".para-2", { x: "12vw" })
          .to(".para-2 .text.assist", { opacity: 0, stagger: 0.2 }, "<")
          .to(".para-2 .text.assist", { width: 0, stagger: 0.2 }, "<0.3")
          .to(".para-2", { width: "72vw" }, "<");

        ScrollTrigger.create({
          trigger: "#animation-container",
          pin: true,
          scrub: true,
          animation: tl,
          end: "+=4000",
        });
      });

      mm.add("(max-width: 799px)", () => {
        const width1 =
          document.querySelector(".line-1 .text.assist")?.offsetWidth || 0;
        const width2 =
          document.querySelector(".line-2 .text.assist")?.offsetWidth || 0;
        const width3 =
          document.querySelector(".line-3 .text.assist")?.offsetWidth || 0;

        const tl = gsap.timeline();
        tl.to("#logo-img", { marginLeft: "-100vw" })
          .to(".line-1", { marginLeft: `-${width1}px` }, "<")
          .to(".line-1 .text.assist", { xPercent: -100 })
          .to(".line-2", { marginLeft: `-${width2}px` }, "<")
          .to(".line-2 .text.assist", { xPercent: -100 })
          .to(".line-3", { marginLeft: `-${width3}px` }, "<")
          .to(".line-3 .text.assist", { xPercent: -100 });

        ScrollTrigger.create({
          trigger: "#animation-container",
          pin: true,
          scrub: 0.5,
          animation: tl,
          end: "+=4000",
        });
      });

      ScrollTrigger.refresh();
    };

    const raf = requestAnimationFrame(() => {
      initAnimations();
    });

    return () => {
      cancelAnimationFrame(raf);
      mm.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return null; // Insert your JSX content here for the Hero Section with ids/classes matching the selectors.
}
