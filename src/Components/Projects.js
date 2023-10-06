import React from "react";
import ProjectBox from "./ProjectBox";
import AlcazarImage from "../images/AlcazarImage.png";
import SkinStoreImage from "../images/SkinStoreImage.png";
import HoneyStoreImage from "../images/HoneyStoreImage.png";
import TindogImage from "../images/TindogImage.png";

const Projects = () => {
  return (
    <section id="projects">
      <h1 className="projectHeading">
        My <b>Projects</b>
      </h1>
      <div className="project">
        <ProjectBox projectPhoto={AlcazarImage} projectName="Alcazar" />
        <ProjectBox projectPhoto={HoneyStoreImage} projectName="HoneyStore" />
        <ProjectBox projectPhoto={SkinStoreImage} projectName="SkinStore" />
        <ProjectBox projectPhoto={TindogImage} projectName="Tindog" />
      </div>
    </section>
  );
};

export default Projects;
