import React from "react";
import Skills from "./Skills";

const SkillSection = () => {
  return (
    <section id="skills">
      <h1 className="SkillsHeading">Professional Skillset</h1>
      <div className="skills">
        <Skills skill="React" />
        <Skills skill="Redux" />
        <Skills skill="Javascript" />
        <Skills skill="TypeScript" />
        <Skills skill="Node" />
        <Skills skill="Express" />
        <Skills skill="MongoDb" />
        <Skills skill="Java" />

        <Skills skill="HTML" />
        <Skills skill="CSS" />
        <Skills skill="Tailwind" />
        <Skills skill="Bootstrap" />
        <Skills skill="Git" />
        <Skills skill="Github" />
        <Skills skill="Npm" />
        <Skills skill="Figma" />
        <Skills skill="Vercel" />
        <Skills skill="Postman" />
        <Skills skill="JWT" />
        <Skills skill="Clerk" />
      </div>
    </section>
  );
};

export default SkillSection;
