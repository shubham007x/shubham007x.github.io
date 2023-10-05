import React from "react";
import Skills from "./Skills";

const SkillSection = () => {
  return (
    <section id="skills">
      <h1 className="SkillsHeading">Professional Skillset</h1>
      <div className="skills">
        <Skills skill="React" />

        <Skills skill="Node" />
        <Skills skill="Express" />
        <Skills skill="MongoDb" />
        <Skills skill="Git" />
        <Skills skill="Github" />
        <Skills skill="Javascript" />
        <Skills skill="Java" />

        <Skills skill="Npm" />
        <Skills skill="Bootstrap" />
      </div>
    </section>
  );
};

export default SkillSection;
