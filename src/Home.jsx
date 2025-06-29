import React, { useEffect } from "react";

import "./App.css";
import fLogo from "./assets/fLogo.png";
import finger from "./assets/finger.png";
import logo from "./assets/logo.png";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "./Component/Header";
import ProjectCard from "./Component/ProjectCard/ProjectCard";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useEffect(() => {
    const mm = gsap.matchMedia();

    // For desktop and wider screens
    mm.add("(min-width: 800px)", () => {
      const tl = gsap.timeline();

      tl.to("#logo-img", {
        rotation: 30,
        marginLeft: "-28vw",
        marginRight: 0,
        opacity: 0,
      })
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
        ease: "none",
        pin: true,
        scrub: true,
        animation: tl,
        end: "+=4000",
      });

      return () => {
        tl.kill();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    });

    // For mobile screens
    mm.add("(max-width: 799px)", () => {
      // Defensive checks to avoid errors if elements are missing
      const width1 =
        document.querySelector(".line-1 .text.assist")?.offsetWidth || 0;
      const width2 =
        document.querySelector(".line-2 .text.assist")?.offsetWidth || 0;
      const width3 =
        document.querySelector(".line-3 .text.assist")?.offsetWidth || 0;

      const tl = gsap.timeline();

      tl.to("#logo-img", {
        marginLeft: "-100vw",
        rotation: 0,
      })
        .to(".line-1", { marginLeft: `-${width1}px` }, "<")
        .to(".line-1 .text.assist", { xPercent: -100 })
        .to(".line-2", { marginLeft: `-${width2}px` }, "<")
        .to(".line-2 .text.assist", { xPercent: -100 })
        .to(".line-3", { marginLeft: `-${width3}px` }, "<")
        .to(".line-3 .text.assist", { xPercent: -100 });

      ScrollTrigger.create({
        trigger: "#animation-container",
        ease: "none",
        pin: true,
        scrub: 0.5,
        animation: tl,
        end: "+=4000",
      });

      return () => {
        tl.kill();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    });

    // Project area scroller
    gsap.utils.toArray(".section").forEach((section) => {
      if (section.classList.contains("horizontal")) {
        const cardsWrap = section.querySelector(".section__cards");
        const oneCard = section.querySelector(".section__card");
        if (!cardsWrap || !oneCard) return;

        const horizontalTween = gsap.to(cardsWrap, {
          x: () => -(cardsWrap.scrollWidth - oneCard.offsetWidth),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "center center",
            end: () => "+=" + (cardsWrap.scrollWidth - oneCard.offsetWidth),
            scrub: true,
            pin: true,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        });

        // Clean up on unmount for each tween
        return () => {
          horizontalTween.kill();
          ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
      } else {
        const verticalPin = ScrollTrigger.create({
          trigger: section,
          start: "top top",
          pin: true,
          anticipatePin: 1,
        });

        return () => verticalPin.kill();
      }
    });

    // Cleanup function on component unmount
    return () => {
      mm.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div>
      <Header></Header>

      {/* Contact Button */}
      <div>
        <a
          className="finger"
          target="_blank"
          href="https://wa.me/8801933482811">
          <img src={finger} alt="Contact" />
        </a>
      </div>
      {/* Contact Button */}

      {/* Hero Section */}
      <div className="ani snapping">
        <div id="animation-container">
          <img id="logo-img" src={logo} alt="Logo" />
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
          <p id="text-container-mobile">
            <span className="line-1 line">
              <span className="text assist">Hello! I'm </span>
              <span className="text main">Faisal </span>
            </span>
            <span className="line-2 line">
              <span className="text assist">... a dedicated</span>
              <span className="text main"> developer </span>
            </span>
            <span className="line-3 line">
              <span className="text assist">& problem</span>
              <span className="text main"> solver </span>
            </span>
          </p>
        </div>
        <div className="field">
          <div className="mouse"></div>
        </div>
      </div>
      {/* Hero Section */}

      <ProjectCard></ProjectCard>
    </div>
  );
};

export default Home;
