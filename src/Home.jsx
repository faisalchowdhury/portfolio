import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import "./App.css";
import Header from "./Component/Header";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    let mm = gsap.matchMedia();

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

    gsap.utils.toArray(".section").forEach((section) => {
      if (section.classList.contains("horizontal")) {
        const cardsWrap = section.querySelector(".section__cards");
        const oneCard = section.querySelector(".section__card");
        if (!cardsWrap || !oneCard) return;
        gsap.to(cardsWrap, {
          x: () => -(cardsWrap.scrollWidth - oneCard.offsetWidth),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "center center",
            end: () => `+=${cardsWrap.scrollWidth - oneCard.offsetWidth}`,
            scrub: true,
            pin: true,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        });
      } else {
        ScrollTrigger.create({
          trigger: section,
          start: "top top",
          pin: true,
          anticipatePin: 1,
        });
      }
    });

    return () => {
      mm.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="main">
      {/* Header */}
      <Header></Header>
      {/* Header */}

      <div>
        <a className="finger" href="mailto:shmlaco@gmail.com">
          <img src="/image/finger.png" alt="Contact" />
        </a>
      </div>

      <div className="ani snapping">
        <div id="animation-container">
          <img
            style={{ width: "380px" }}
            id="logo-img"
            src="/image/logo.png"
            alt="Logo"
          />
          <div id="text-container">
            <p className="para-1">
              <span className="text assist">Hello! I'm</span>
              <span className="text main"> Faisal </span>
              <span className="text assist">... a dedicated</span>
              <span className="text main"> developer </span>
              <span className="text assist">& problem</span>
              <span className="text main"> solver </span>
            </p>
            <p className="para-2 hidden">
              <span className="text assist">skilled in</span>
              <span className="text main"> MERN </span>
              <span className="text assist">stack,</span>
              <span className="text main"> WordPress </span>
              <span className="text assist">and</span>
              <span className="text main"> PHP </span>
              <span className="text assist">to build</span>
              <span className="text main"> real solutions </span>
            </p>
          </div>
        </div>
      </div>

      <div
        id="work"
        style={{ minHeight: "100vh" }}
        className="project_area snapping">
        <div className="container">
          <h2 id="myImg">Projects</h2>
          <section className="section horizontal">
            <div className="section__cards">
              {[
                "Illustrator Design",
                "UI/UX Design",
                "Animation",
                "Motion Graphics",
                "3D Design",
              ].map((title, idx) => (
                <div key={idx} className="card section__card">
                  <img className="pcl" src="/image/pc.png" alt="PC Left" />
                  <img className="pcr" src="/image/pc.png" alt="PC Right" />
                  <div>
                    <img
                      className="work_img"
                      src={`/image/p${(idx % 4) + 1}.png`}
                      alt={title}
                    />
                  </div>
                  <div>
                    <h4>{title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
