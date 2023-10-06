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
          <a
            id="resume-link-2"
            onClick={() => {
              navigate("/resume");
            }}
            download="Shubham Agdari Resume pdf"
            href={pdf}
          >
            Resume <FaDownload />
          </a>
        </div>
        <Tilt>
          <img className="Avatar home-img" src={Avatar} alt="" />
        </Tilt>
      </div>
    </section>
  );
};

export default Home;
