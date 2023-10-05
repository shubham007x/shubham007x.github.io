import React from "react";
import { CgCPlusPlus } from "react-icons/cg";
import {
  FaReact,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaNpm,
  FaFigma,
  FaBootstrap,
  FaJava,
} from "react-icons/fa";
import { DiNodejs, DiJavascript1 } from "react-icons/di";
import { SiExpress, SiMongodb, SiVercel } from "react-icons/si";

const Skills = ({ skill }) => {
  const icon = {
    Java: <FaJava />,
    React: <FaReact />,
    Javascript: <DiJavascript1 />,
    Node: <DiNodejs />,
    Express: <SiExpress />,
    MongoDb: <SiMongodb />,
    Git: <FaGitAlt />,
    Github: <FaGithub />,
    Npm: <FaNpm />,

    Bootstrap: <FaBootstrap />,
  };

  return (
    <div title={skill} className="SkillBox skills-card">
      <p className="skills-card-img">
        {" "}
        {icon[skill]}
        <p className="skills-card-name" style={{ fontSize: "1rem" }}>
          {skill}
        </p>
      </p>
    </div>
  );
};

export default Skills;
