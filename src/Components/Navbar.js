import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { BsPerson, BsCodeSlash } from "react-icons/bs";
import { CgFileDocument } from "react-icons/cg";
import { FaDownload } from "react-icons/fa";

import pdf from "../Resume.pdf";
import Resume from "./Resume";
const Nav = () => {
  const [navbarblur, setnavbarblur] = useState(false);
  const navigate = useNavigate();
  function scrollHandler() {
    if (window.scrollY >= 20) {
      setnavbarblur(true);
    } else {
      setnavbarblur(false);
    }
  }

  var showMenu = () => {
    var bar = document.getElementsByClassName("bar");
    var ham = document.getElementsByClassName("NavbarLinks");
    bar[0].classList.toggle("barOne");
    bar[1].classList.toggle("barTwo");
    bar[2].classList.toggle("barThree");

    ham[0].classList.toggle("showNavbar");
  };

  var hideMenu = () => {
    var bar = document.getElementsByClassName("bar");
    var ham = document.getElementsByClassName("NavbarLinks");
    bar[0].classList.remove("barOne");
    bar[1].classList.remove("barTwo");
    bar[2].classList.remove("barThree");
    ham[0].classList.remove("showNavbar");
  };

  window.addEventListener("scroll", scrollHandler);

  return (
    <nav id="nav-menu" className={navbarblur ? "Navbar blur" : "Navbar"}>
      <h1
        title="Reload"
        onClick={() => window.location.reload(true)}
        className="Logo"
      >
        SA
      </h1>

      <div className="Hamburger" onClick={showMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <ul className="NavbarLinks">
        <li onClick={hideMenu}>
          <a href="#home" className="nav-link home">
            Home
          </a>
        </li>
        <li onClick={hideMenu}>
          <a href="#about" className="nav-link about">
            About
          </a>
        </li>
        <li onClick={hideMenu}>
          <a href="#skills" className="nav-link skills">
            Skills
          </a>
        </li>
        <li onClick={hideMenu}>
          <a href="#projects" className="nav-link projects">
            Projects
          </a>
        </li>
        <li onClick={hideMenu}>
          <a href="#contact" className="nav-link contact">
            Contact
          </a>
        </li>

        <li onClick={hideMenu}>
          <button
            id="resume-button-1"
            style={{
              background: "transparent",
              color: "white",
              border: "0px solid white",
              fontSize: "Large",
            }}
          >
            <a
              href={pdf}
              id="resume-link-1"
              target="_blank"
              class="nav-link resume"
              onClick={() => window.open(pdf)}
<<<<<<< HEAD
              download="Shubham-Agdari-Resume"
=======
              download="Shubham-Agdar-Resume"
>>>>>>> 4b3ba8897726ede853b4e3f0f9060eea51fd2091
            >
              Resume <FaDownload />
            </a>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
