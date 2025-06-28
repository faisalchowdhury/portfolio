import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import fLogo from "./assets/fLogo.png";
import finger from "./assets/finger.png";
import logo from "./assets/logo.png";
import p1 from "./assets/p1.png";
import p2 from "./assets/p2.png";
import p3 from "./assets/p3.png";
import p4 from "./assets/p4.png";
import pc from "./assets/pc.png";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const projects = [
    { title: "App Store (React JS)", imgSrc: p1 },
    { title: "E-commerce (MERN Stack)", imgSrc: p2 },
    { title: "Community (MERN Stact)", imgSrc: p3 },
    { title: "Health Care (Core PHP)", imgSrc: p4 },
  ];

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
      {/* Navbar */}
      <nav
        id="navbar_top"
        className="navbar navbar-expand-lg navbar-light container fixed-top">
        <a className="navbar-brand" href="#">
          <img width={"200px"} src={fLogo} alt="Logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#work">
                Work <span className="visually-hidden">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="about.html">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Resume
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* Navbar */}

      {/* Contact Button */}
      <div>
        <a className="finger" href="mailto:chowdhuryfaisal66@gmail.com">
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
              <span className="text assist">Heyo! I'm</span>
              <span className="text main"> gabe </span>
            </span>
            <span className="line-2 line">
              <span className="text assist">... a multidisciplinary</span>
              <span className="text main"> designer </span>
            </span>
            <span className="line-3 line">
              <span className="text assist">& full-time</span>
              <span className="text main"> jokester </span>
            </span>
          </p>
        </div>
        <div className="field">
          <div className="mouse"></div>
        </div>
      </div>
      {/* Hero Section */}

      {/* Projects */}
      <div
        id="work"
        style={{ height: "100vh" }}
        className="project_area snapping">
        <div className="container">
          <h2 id="myImg">Projects</h2>

          <section className="section horizontal">
            <div className="section__cards">
              {projects.map((project, idx) => (
                <div key={idx} className="card section__card">
                  <img className="pcl" src={pc} alt="PC Left" />
                  <img className="pcr" src={pc} alt="PC Right" />
                  <div>
                    <img
                      className="work_img"
                      src={project.imgSrc}
                      alt={project.title}
                    />
                  </div>
                  <div>
                    <h4>{project.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      {/* Projects */}
    </div>
  );
};

export default Home;
