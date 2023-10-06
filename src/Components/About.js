import React from "react";
import Skills from "./Skills.js";
import Tilt from "react-parallax-tilt";
import Lottie from "lottie-react";
import Coder from "../LottieFiles/coder.json";

const About = () => {
  return (
    <section className="AboutPage about section" id="about">
      <div className="AboutText">
        <h1 className="AboutTextHeading main-title">About Me</h1>
        <p id="user-detail-intro">
          Hi, i am <b>Shubham Agdari</b> and I am from Chandrapur, India. I'm a{" "}
          <b>MERN stack web developer</b> and a working professional currently
          working as <b>Sr.Analyst</b> in <b>Capgemini Technology</b>. <br />
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
        </p>
      </div>

      <div>
        <Tilt>
          <Lottie className="illustration" animationData={Coder} loop={true} />
        </Tilt>
      </div>
    </section>
  );
};

export default About;
