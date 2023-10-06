import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Nav from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Project from "./Components/Projects";

import Lottie from "lottie-react";
import nightsky from "./LottieFiles/night-sky.json";
import HashLoader from "react-spinners/HashLoader";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import SkillSection from "./Components/SkillSection";
import Contact from "./Components/Contact";
import Github from "./Components/Github";

function App() {
  const [Loading, SetLoading] = useState(true);

  useEffect(() => {
    SetLoading(true);

    setTimeout(() => {
      SetLoading(false);
    }, 1900);
  }, []);

  return (
    // <>
    //   {Loading ? (
    //     <div className="loader">
    //       <HashLoader
    //         color={"#9067C6"}
    //         loading={true}
    //         size={100}
    //         aria-label="Loading Spinner"
    //         data-testid="loader"
    //       />
    //     </div>
    //   ) : (
    <div>
      <Lottie className="bg" animationData={nightsky} loop={true} />
      <Lottie className="bgtwo" animationData={nightsky} loop={true} />
      <Lottie className="bgtemp" animationData={nightsky} loop={true} />

      <Routes>
        <Route
          path="/"
          element={
            <div>
              {" "}
              <Nav />
              <Home />
              <About />
              <Github />
              <SkillSection />
              <Project />
              <Contact />
              <Footer />
            </div>
          }
        />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </div>
    // )}
    // </>
  );
}

export default App;
