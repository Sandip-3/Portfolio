import React from "react";
import { TypeAnimation } from "react-type-animation";
import Resume from "../assets/documents/Resume.pdf";

function Home() {
  return (
    <>
      <div className=" p-2 text-center mt-0 bg-slate-900">
        <h1 className="text-start ml-6 text-4xl text-white p-4 ">
          Hi 👋 I'm a
        </h1>
        <TypeAnimation
          className="text-yellow-400 mb-6"
          sequence={[
            "React Developer  ",
            1000,
            "Full-Stack Developer",
            1000,
            "Java Programmer  ",
            1000,
            "Sandip Poudel  ",
            1000,
          ]}
          wrapper="span"
          speed={40}
          style={{ fontSize: "2.5em", display: "inline-block" }}
          repeat={Infinity}
        />
        <div className="flex justify-center space-x-12 mb-12">
          <a
            href="https://www.facebook.com/sandeep.poudel.3517"
            className="text-white bg-blue-500 p-1 px-12 rounded-md text-xl mb-3 hover:text-gray-600 animate-bounce duration-1000"
          >
            Hire Me
          </a>
          <a
            href={Resume}
            download="Resume.pdf"
            className="text-white bg-orange-400 p-1 px-12 rounded-md text-xl mb-3 hover:text-gray-600  duration-100"
          >
            Resume
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;
