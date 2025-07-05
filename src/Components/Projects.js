import React from "react";
import ProjectBox from "./ProjectBox";
import AlcazarImage from "../images/AlcazarImage.png";
import SkinStoreImage from "../images/SkinStoreImage.png";
import HoneyStoreImage from "../images/HoneyStoreImage.png";
import TindogImage from "../images/TindogImage.png";
import QuickShow from "../images/QuickShow.png";

const Projects = () => {
  return (
    <section id="projects">
      <h1 className="projectHeading">
        My <b>Projects</b>
      </h1>
      <div className="project">
        <ProjectBox
          projectPhoto={QuickShow}
          stack={[
            "ReactJs",
            "NodeJs ",
            "Tailwind ",
            "Express.js",
            "Clerk",
            "Inngest",
          ]}
          projectName="QuickShow"
        />
        <ProjectBox
          projectPhoto={AlcazarImage}
          stack={["HTML ", "CSS ", "JS ", "BS"]}
          projectName="Alcazar"
        />
        <ProjectBox
          projectPhoto={HoneyStoreImage}
          stack={["REACT ", "CSS ", "Redux ", ""]}
          projectName="HoneyStore"
        />
        <ProjectBox
          projectPhoto={SkinStoreImage}
          stack={["HTML ", "CSS ", "JS "]}
          projectName="SkinStore"
        />
        <ProjectBox
          projectPhoto={TindogImage}
          stack={["HTML ", "CSS ", "BS"]}
          projectName="Tindog"
        />
      </div>
    </section>
  );
};

export default Projects;
