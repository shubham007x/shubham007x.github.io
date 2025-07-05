import React from "react";
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName, stack }) => {
  const desc = {
    TindogDesc:
      "This website is a landing page of Tinder but for dogs. It is a responsive website which was made to understand Bootstrap. I also learned how to host my project on Github and then how to deploy that project using Github pages.",
    TindogGithub: "https://github.com/shubham007x/TinDog",
    TindogWebsite: "https://shubham007x.github.io/TinDog/",

    HoneyStoreDesc:
      "A website that has Honey Products made Using React, which is responsive and has a beautiful UI.",
    HoneyStoreGithub: "https://github.com/shubham007x/Honey-Store",
    HoneyStoreWebsite: "https://github.com/shubham007x/Honey-Store#readme",

    SkinStoreDesc:
      "An eCommerce website made using HTML, CSS, and JS that showcases various skincare products.",
    SkinStoreGithub: "https://github.com/shubham007x/Skin-Store",
    SkinStoreWebsite: "https://zesty-treacle-bc219d.netlify.app/",

    AlcazarDesc:
      "A travel and hotel booking website that lets users explore locations and book stays. Built with a focus on clean UI and responsiveness.",
    AlcazarGithub: "https://github.com/shubham007x/Alcazar",
    AlcazarWebsite: "https://alcazar-masai.netlify.app/",

    QuickShowDesc:
      "QuickShow is a full-stack movie and show ticket booking application. It includes user authentication, real-time seat selection, admin dashboard, and dynamic ticket availability.",
    QuickShowGithub: "https://github.com/shubham007x/QuickShow",
    QuickShowWebsite: "https://quickshow-client-gray.vercel.app/",
  };

  let show = "inline";
  if (!desc[projectName + "Github"]) {
    show = "none";
  }

  return (
    <div className="projectBox project-card">
      <img
        className="projectPhoto"
        src={projectPhoto}
        alt={`${projectName} project display`}
      />
      <div>
        <br />
        <h3 className="project-title">{projectName}</h3>
        <br />
        <p className="project-description">
          {desc[projectName + "Desc"] || "Description not available."}
        </p>

        <br />
        <p className="project-tech-stack">
          {Array.isArray(stack) ? stack.join(", ") : stack}
        </p>
        <a
          style={{ display: show }}
          href={desc[projectName + "Github"]}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="projectbtn project-github-link">
            <FaGithub /> Github
          </button>
        </a>

        <a
          href={desc[projectName + "Website"]}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="projectbtn project-deployed-link">
            <CgFileDocument /> Demo
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectBox;
