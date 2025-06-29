import React from "react";
import p1 from "./../../../assets/p1.png";
import p2 from "./../../../assets/p2.png";
import p3 from "./../../../assets/p3.png";
import p4 from "./../../../assets/p4.png";
import "../../../App.css";
import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa";
import Header from "../../Header";
const Work = () => {
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
    <>
      <Header></Header>
      <div className="max-w-7xl mx-auto px-5 lg:px-0 pb-5">
        <h2>Projects</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="shadow h-[450px] border-2 border-dashed rounded-lg hover:bg-slate-100">
              <div>
                <img
                  className="h-[250px] w-full object-cover object-top "
                  src={project.imgSrc}
                  alt={project.title}
                />
              </div>
              <div className="space-y-3 mt-5  mx-auto px-5">
                <p className="text-lg">{project.title}</p>
                <p>Technologies : {project.technologies}</p>
                <Link
                  to={`/project-details/${project.id}`}
                  className="btn border-none shadow rounded hover:bg-black hover:text-white">
                  View Project <FaArrowRight></FaArrowRight>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Work;
