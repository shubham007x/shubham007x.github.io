import React from "react";
import {
  FaReact,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaNpm,
  FaFigma,
  FaBootstrap,
  FaJava,
  FaDocker,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaJsSquare,
  FaDatabase,
  FaTerminal,
  FaTools,
  FaCloud,
  FaKey,
  FaCode,
} from "react-icons/fa";

const Skills = ({ skill }) => {
  const icon = {
    Java: <FaJava />,
    React: <FaReact />,
    Javascript: <FaJsSquare />,
    Node: <FaNodeJs />,
    Express: <FaTerminal />, // No direct FA icon for Express
    MongoDb: <FaDatabase />, // Placeholder icon for database
    Git: <FaGitAlt />,
    Github: <FaGithub />,
    Npm: <FaNpm />,
    TypeScript: <FaCode />, // Generic code icon as placeholder
    Bootstrap: <FaBootstrap />,
    Cpp: <FaCode />, // No direct C++ icon in FA
    Python: <FaPython />,
    Figma: <FaFigma />,
    Vercel: <FaCloud />, // Placeholder for deployment
    Docker: <FaDocker />,
    Redux: <FaTools />, // Generic tools icon
    Tailwind: <FaCss3Alt />, // Placeholder (closest to styling)
    Postman: <FaTools />, // Generic tools icon
    Clerk: <FaKey />, // Auth-related, so key icon
    JWT: <FaKey />, // Token/security-related
    EJS: <FaCode />, // Templating engine, using generic code
    HTML: <FaHtml5 />,
    CSS: <FaCss3Alt />,
  };

  return (
    <div title={skill} className="SkillBox skills-card">
      <p className="skills-card-img">
        {icon[skill]}
        <p className="skills-card-name" style={{ fontSize: "1rem" }}>
          {skill}
        </p>
      </p>
    </div>
  );
};

export default Skills;
