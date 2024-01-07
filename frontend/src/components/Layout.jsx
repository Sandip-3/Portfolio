import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Home from "../pages/Home";
import { FcHome } from "react-icons/fc";
import { FcAbout } from "react-icons/fc";
import { FcRules } from "react-icons/fc";
import { FcReading } from "react-icons/fc";
import { FcContacts } from "react-icons/fc";
import About from "../pages/About";
import TechStack from "../pages/TechStack";
import Projects from "../pages/Projects";
import Education from "../pages/Education";
import ScrollToTop from "react-scroll-to-top";
import Contact from "../pages/Contact";
import Zoom from "react-reveal/Zoom";
import Reveal from "react-reveal/Reveal";

function Layout() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({
        behavior: "smooth",
        spy: true,
        offset: -100,
        duration: 1000,
      });
    }
  };
  return (
    <>
      <div className="max-w-[1600px] grid md:grid-cols-5  md:h-screen">
        <div
          className={
            toggle
              ? "hidden"
              : "max-w-[1600px]  col-span-5 md:col-span-1 bg-slate-800 flex content-center flex-col  "
          }
        >
          <div className="flex md:justify-between justify-end">
            <h1 className="md:block hidden ml-2 text-center mt-4 text-white font-semibold text-2xl">
              Menu
            </h1>
            <div className=" mt-4  mx-2">
              <GiHamburgerMenu
                onClick={handleToggle}
                className="text-white cursor-pointer"
                size={30}
              />
            </div>
          </div>
          <div className="flex justify-center ">
            <Zoom>
              <img
                src="/images/profile.jpeg"
                alt="profile"
                className="h-32 w-32 mb-4 mt-4 ml-2 mr-2 rounded-full object-cover"
              />
            </Zoom>
          </div>
          <div
            onClick={() => scrollToSection("home")}
            className=" text-center group mt-12 text-white text-lg flex mr-2 md:justify-start hover:text-slate-600  justify-center md:ml-12 items-center space-x-4 cursor-pointer"
          >
            <FcHome className="group-hover:scale-125 duration-1000" />

            <h1 className="duration-1000 font-serif active:underline">Home</h1>
          </div>
          <div
            onClick={() => scrollToSection("about")}
            className="text-center group mt-6 text-white text-lg flex mr-2 md:justify-start hover:text-slate-600  justify-center md:ml-12 items-center space-x-4 cursor-pointer"
          >
            <FcAbout className="group-hover:scale-125 duration-1000" />
            <h1 className="duration-1000 font-serif ">About</h1>
          </div>
          <div
            onClick={() => scrollToSection("techStack")}
            className=" group text-center  mt-6 text-white text-lg flex mr-2 md:justify-start hover:text-slate-600  justify-center md:ml-12 items-center space-x-4 cursor-pointer"
          >
            <FcContacts className="group-hover:scale-125 duration-1000" />
            <h1 className="duration-1000 font-serif active:underline">
              Tech Stack
            </h1>
          </div>
          <div
            onClick={() => scrollToSection("project")}
            className=" group text-center mt-6 text-white text-lg flex mr-2 md:justify-start hover:text-slate-600  justify-center md:ml-12 items-center space-x-4 cursor-pointer"
          >
            <FcRules className="group-hover:scale-125 duration-1000" />
            <h1 className="duration-1000 font-serif active:underline">
              Project
            </h1>
          </div>
          <div
            onClick={() => scrollToSection("education")}
            className=" group text-center mt-6 text-white text-lg flex mr-2 md:justify-start hover:text-slate-600  justify-center md:ml-12 items-center space-x-4 cursor-pointer"
          >
            <FcReading className="group-hover:scale-125 duration-1000" />
            <h1 className="duration-1000 font-serif active:underline">
              Education
            </h1>
          </div>
          <div
            onClick={() => scrollToSection("contact")}
            className=" group text-center mb-4  mt-6 text-white text-lg flex mr-2 md:justify-start hover:text-slate-600  justify-center md:ml-12 items-center space-x-4 cursor-pointer"
          >
            <FcContacts className="group-hover:scale-125 duration-1000" />
            <h1 className="duration-1000 font-serif active:underline">
              Contact
            </h1>
          </div>
        </div>
        <div
          className={
            toggle
              ? "sm:col-span-5 bg-slate-200  text-center"
              : "sm:col-span-4 md:w-full w-screen bg-slate-200  text-center overflow-y-auto border-l border-gray-700 "
          }
        >
          <div className="">
            <GiHamburgerMenu
              onClick={handleToggle}
              className={
                toggle ? "text-gray-700 m-2 cursor-pointer" : "hidden "
              }
              size={30}
            />
            <div id="home">
              <Home />
            </div>
            <div id="about">
              <Reveal effect="fadeInUp">
                <About />
              </Reveal>
            </div>
            <div id="techStack">
              <TechStack />
            </div>
            <div id="project">
              <Projects />
            </div>
            <div id="education">
              <Education />
            </div>
            <div id="contact">
              <Contact />
            </div>
            <ScrollToTop
              className="ml-12 flex items-center p-2 animate-bounce text-2xl "
              style={{ borderRadius: "80px", backgroundColor: "#0f172a" }}
              color="white"
              smooth
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;
