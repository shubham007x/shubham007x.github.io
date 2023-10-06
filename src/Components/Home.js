import React from "react";
import Lottie from "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from "react-parallax-tilt";
import Avatar from "../images/Avatar.png";
import { CiCoffeeCup } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import pdf from "../Resume.pdf";
import { FaDownload } from "react-icons/fa";

const Home = () => {
  const navigate = useNavigate();
  return (
    <section id="home">
      <div className="HomePage">
        <div className="HomeText">
          <h1>Hi There!</h1>
          <h1 id="user-detail-name">
            I'M <b>SHUBHAM AGDARI</b>
          </h1>
          <Typed />
        </div>
        <img
          className="home-img"
          src="data:image/jpeg;base64,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"
          alt="image"
        ></img>
        <Lottie className="illustration" animationData={SpaceBoy} loop={true} />
      </div>

      <div className="AboutPage" id="user-detail-intro">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Brief <b>introduction</b>
          </h1>
          <p>
            I'm captivated by the process of transforming abstract concepts into
            tangible websites and products. I thrive on challenges that push my
            development skills to new heights, and I'm driven to create work
            that I can truly be proud of
            <br />
            <br />I have experience with <b>Java, JavaScript</b> and i've worked
            on a few projects in the <b>MERN</b> stack.
            <br />I plan to learn <b>Next.js</b> in the near future. <br />
            <br />
          </p>
        </div>
        <Tilt>
          <img className="Avatar" src={Avatar} alt="" />
        </Tilt>
      </div>
    </section>
  );
};

export default Home;
