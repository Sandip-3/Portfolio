import React from "react";
import { BiLogoJava } from "react-icons/bi";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";

function TechStack() {
  return (
    <>
      <div className="text-center mt-12 mb-12 md:mx-48 border-b border-gray-300">
        <h1 className="font-serif text-4xl text-slate-600 mb-2 uppercase">
          Technology Stack
        </h1>
      </div>
      <div className="md:grid   md:grid-cols-4 gap-6 mb-12 ml-20 mr-20">
        <div className="md:my-0 md:text-xs my-4 shadow-lg p-2 px-1 py-4 space-x-2 flex justify-center md:flex-col items-center rounded-md hover:text-white hover:bg-slate-900 duration-1000">
          <BiLogoJava className="animate-bounce" size={35} />
          <h1 className="text-2xl font-serif">Java</h1>
        </div>

        <div className="md:my-0 my-4 md:text-xs shadow-lg p-2 py-4 space-x-2 flex justify-center md:flex-col items-center rounded-md hover:text-white hover:bg-slate-900 duration-1000">
          <TbBrandJavascript className="animate-bounce" size={35} />
          <h1 className="text-2xl font-serif">Java Script</h1>
        </div>

        <div className=" md:my-0 my-4 md:text-xs shadow-lg p-2 py-4 space-x-2 flex justify-center items-center md:flex-col rounded-md hover:text-white hover:bg-slate-900 duration-1000">
          <FaReact className="animate-bounce" size={35} />
          <h1 className="text-2xl font-serif">React</h1>
        </div>

        <div className="md:my-0 my-4 md:text-xs shadow-lg p-2 py-4 space-x-2 flex justify-center items-center md:flex-col rounded-md hover:text-white hover:bg-slate-900 duration-1000">
          <FaNode className="animate-bounce" size={35} />
          <h1 className="text-2xl font-serif">Node Js</h1>
        </div>

        <div className="md:my-0 md:text-xs my-4 shadow-lg p-2 py-4 space-x-2 flex justify-center items-center md:flex-col rounded-md hover:text-white hover:bg-slate-900 duration-1000">
          <FaHtml5 className="animate-bounce" size={35} />
          <h1 className="text-2xl font-serif">HTML</h1>
        </div>

        <div className="md:my-0 md:text-xs my-4 shadow-lg p-2 py-4 space-x-2 flex justify-center items-center md:flex-col rounded-md hover:text-white hover:bg-slate-900 duration-1000">
          <FaCss3Alt className="animate-bounce" size={35} />
          <h1 className="text-2xl font-serif">CSS</h1>
        </div>

        <div className="md:my-0 md:text-xs my-4 shadow-lg px-1 p-2 py-4 space-x-2 flex justify-center items-center md:flex-col rounded-md hover:text-white hover:bg-slate-900 duration-1000">
          <SiTailwindcss className="animate-bounce" size={35} />
          <h1 className="text-2xl font-serif">Tailwind</h1>
        </div>

        <div className="md:my-0 md:text-xs my-4 shadow-lg p-2 py-4 space-x-2 flex justify-center items-center md:flex-col rounded-md hover:text-white hover:bg-slate-900 duration-1000">
          <SiMysql className="animate-bounce" size={35} />
          <h1 className="text-2xl font-serif">Mysql</h1>
        </div>

        <div className="md:my-0 md:text-xs my-4 shadow-lg p-2 py-4 space-x-2 flex justify-center items-center md:flex-col rounded-md hover:text-white hover:bg-slate-900 duration-1000">
          <FaGithub className="animate-bounce" size={35} />
          <h1 className="text-2xl font-serif">Github</h1>
        </div>
      </div>
    </>
  );
}

export default TechStack;
