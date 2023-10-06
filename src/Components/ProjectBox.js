import React from "react";
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    TindogDesc:
      "This website is a landing page of Tinder but for dogs. It is a responsive website which was made to understand Bootstrap. I also learned how to host my project on Github and then how to deploy that project using Github pages.",
    TindogGithub: "https://github.com/shubham007x/TinDog",
    TindogWebsite: "https://shubham007x.github.io/TinDog/",

    HoneyStoreDesc:
      "A website that has Honey Products made Using React,which is responsive and has a Beautiful UI ",
    HoneyStoreGithub: "https://github.com/shubham007x/Honey-Store",
    HoneyStoreWebsite: "https://github.com/shubham007x/Honey-Store#readme",

    SkinStoreDesc:
      "An Commerce website made using HTML CSS JS which has Different Skin Products ",
    SkinStoreGithub: "https://github.com/shubham007x/Skin-Store",
    SkinStoreWebsite: "https://zesty-treacle-bc219d.netlify.app/",

    AlcazarDesc:
      "A website which allow you to browse different location and  book your stays in hotels,it a travel/Hotel Booking website",
    AlcazarGithub: "https://github.com/shubham007x/Alcazar-Travel-Agency",
    AlcazarWebsite: "https://alcazar-masai.netlify.app/",
  };

  let show = "";
  if (desc[projectName + "Github"] === "") {
    show = "none";
  }

  return (
    <div className="projectBox project-card">
      <img className="projectPhoto" src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3 className="project-title">{projectName}</h3>
        <br />
        <p className="project-description">{desc[projectName + "Desc"]}</p>

        <br />
        <p className="project-tech-stack"></p>
        <a
          style={{ display: show }}
          href={desc[projectName + "Github"]}
          target="_blank"
        >
          <button className="projectbtn project-github-link">
            <FaGithub /> Github
          </button>
        </a>

        <a href={desc[projectName + "Website"]} target="_blank">
          <button className="projectbtn project-deployed-link">
            <CgFileDocument /> Demo
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectBox;
