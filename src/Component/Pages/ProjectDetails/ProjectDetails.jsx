import React from "react";
import { Navigate, useLoaderData, useParams } from "react-router";
import Header from "../../Header";
import p1 from "../../../assets/p1.png";
import p2 from "../../../assets/p2.png";
import p3 from "../../../assets/p3.png";
import p4 from "../../../assets/p4.png";
import { FaGithub } from "react-icons/fa";
const ProjectDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();

  const projectsDetails = data.find((pro) => pro.id == id);
  console.log(projectsDetails);

  const imageMap = {
    p1,
    p2,
    p3,
    p4,
  };

  return (
    <>
      <Header></Header>
      {projectsDetails ? (
        <div className="max-w-6xl mx-auto shadow rounded-lg my-10 p-10 space-y-5">
          <h1 className="text-3xl font-semibold">{projectsDetails.name}</h1>
          <h3 className="text-xl font-medium">
            Technologies : {projectsDetails.technologies}
          </h3>
          <p>{projectsDetails.description}</p>

          <div>
            <h4 className="text-xl font-semibold">Challenges</h4>
            {projectsDetails.challenges.map((challenge) => (
              <li>{challenge}</li>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center my-10">
            <div className="space-y-5">
              <a
                className="btn p-5 bg-black hover:bg-gray-700 text-white"
                href={projectsDetails.github}
                target="_blank">
                <FaGithub size={26}></FaGithub> View Codebase on GitHub
              </a>
              <p>
                <span className="font-medium">Summary :</span>{" "}
                {projectsDetails.summary}
              </p>
            </div>
            <div>
              <img
                className="w-[300px] h-[300px] object-cover object-top mx-auto rounded-lg shadow"
                src={imageMap[projectsDetails.image_path]}
                alt=""
              />
            </div>
          </div>
        </div>
      ) : (
        <Navigate to="/"></Navigate>
      )}
    </>
  );
};

export default ProjectDetails;
