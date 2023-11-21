import React from "react";
import Skills from "./Skills.js";
import Tilt from "react-parallax-tilt";
import Lottie from "lottie-react";
import { pro } from "../Components/pro.jsx";
import Coder from "../LottieFiles/coder.json";
import { BsBootstrap } from "react-icons/bs";
import { FaDownload } from "react-icons/fa";
import pdf from "../Resume.pdf";
import alcazarImage from "../images/shubham.png";

const About = () => {
  return (
    <section className="AboutPage about section" id="about">
      <br></br>
      <br></br>
      <br></br>
      <div>
        <img src={alcazarImage} style={{ width: "50%" }} alt="Alcazar"></img>
      </div>
      <div className="AboutText" id="user-detail-intro">
        <h1 className="AboutTextHeading main-title">About Me</h1>
        <p>
          Hi, i am <b>Shubham Agdari</b> and I am from Chandrapur, India. I'm a{" "}
          <b>
            Proficient in MERN Stack
            JavaScript,Java,HTML,CSS,Bootstrap,Express,Node,MongoDB
          </b>{" "}
          and a working professional currently working as <b>Sr.Analyst</b> in{" "}
          <b>Capgemini Technology</b>. <br />
          <br />I have completed my <b>B.Tech</b> in{" "}
          <b>Electronic and Telecommunication</b> from{" "}
          <b>GH Raisoni college of Engineering Nagpur</b> I love to create
          projects with beautiful designs, you can check out some of my work in
          the projects section.
          <br />
          <br />I am <b>open</b> to new collaborations or work where I can
          contribute and grow. Feel free to connect with me, links are in the
          footer.
          <br />
          <button
            id="resume-button-2"
            style={{
              background: "transparent",
              color: "white",
              border: "0px solid white",
              fontSize: "Large",
            }}
          >
            <a
              href={pdf}
              id="resume-link-2"
              target="_blank"
              class="nav-link resume"
              onClick={() => window.open(pdf)}
              download="Shubham-Agdari-Resume"
            >
              Resume <FaDownload />
            </a>
          </button>
        </p>
      </div>

      <div>
        <pro />
      </div>
    </section>
  );
};

export default About;
