import React from "react";
import p1 from "./../../assets/p1.png";
import p2 from "./../../assets/p2.png";
import p3 from "./../../assets/p3.png";
import p4 from "./../../assets/p4.png";
import pc from "./../../assets/pc.png";
import { FaArrowRight } from "react-icons/fa";
const ProjectCard = () => {
  const projects = [
    {
      id: 1,
      title: "App Store (React JS)",
      imgSrc: p1,
      technologies: "React, Tailwind, Express, MongoDb",
    },
    {
      id: 2,
      title: "E-commerce (MERN Stack)",
      imgSrc: p2,
      technologies:
        "React, Tailwind, Express, MongoDb, JWT Token for auth Secure",
    },
    {
      id: 3,
      title: "Community (MERN Stact)",
      imgSrc: p3,
      technologies: "React, Tailwind, Express, MongoDb",
    },
    {
      id: 4,
      title: "Health Care (Core PHP)",
      imgSrc: p4,
      technologies: "PHP, MySql, Bootstrap",
    },
  ];
  return (
    <div>
      {/* Projects */}
      <div id="work" style={{ height: "" }} className="project_area snapping">
        <div className="container">
          <section className="section horizontal ">
            <h2 id="myImg" className="absolute top-10 left-0 right-0 ">
              Projects
            </h2>
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
                  <div className="space-y-3 mt-5 w-[300px] mx-auto">
                    <p className="text-xl">{project.title}</p>
                    <p>Technologies : {project.technologies}</p>
                    <button className="btn border-none shadow rounded hover:bg-black hover:text-white">
                      View Project <FaArrowRight></FaArrowRight>
                    </button>
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

export default ProjectCard;
