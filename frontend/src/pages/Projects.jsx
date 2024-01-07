import React from "react";

function Projects() {
  return (
    <>
      <div className="text-center mt-12 mb-12 md:mx-48 border-b border-gray-300">
        <h1 className="font-serif text-4xl text-slate-600 mb-2 uppercase">
          Recent Projects
        </h1>
      </div>
      <div className="md:grid md:my-0 my-6  md:grid-cols-3 gap-6 mb-12 ml-20 mr-20 overflow-x-auto">
        <div className="relative mb-6">
          <p className="z-10 absolute top-[-2px] py-1 px-5 md:text-sm text-white font-serif left-0 text-start  rounded-full bg-orange-400">
            Full-Stack
          </p>
          <div className="group md:min-h-[388px]  overflow-hidden md:my-0 my-4  shadow-lg  py-4  flex flex-col   rounded-md ">
            <img
              className="rounded-lg h-full md:h-[203px] object-cover  transition-transform transform hover:scale-105 duration-1000"
              src="/images/mern.jpeg"
              alt="projects"
            />
            <div className="mt-6 grid grid-cols-2 gap-1 lg:flex lg:justify-around space-x-2 md:space-x-1 mb-4">
              <h3 className="text-center ml-1 text-sm md:text-xs  bg-slate-500  py-1  rounded-full text-white px-4 md:px-2">
                Node
              </h3>
              <h3 className="text-center text-sm md:text-xs  bg-slate-500  py-1  rounded-full text-white px-4 md:px-2">
                Express
              </h3>
              <h3 className="text-center text-sm md:text-xs  bg-slate-500  py-1  rounded-full text-white px-4 md:px-2">
                MongoDB
              </h3>
              <h3 className="text-center text-sm md:text-xs  bg-slate-500  py-1  rounded-full text-white px-4 md:px-2">
                React
              </h3>
            </div>

            <div>
              <h2 className="text-xl font-serif text-gray-500 uppercase mt-2 mb-2">
                Ecommerce Shopping Site
              </h2>
              <a
                href="https://github.com/Sandip-3"
                className=" hover:opacity-90 hover:scale-105 duration-1000 text-xl md:text-sm  mb-2 mt-2 bg-slate-700 font-serif py-2 px-12 rounded-full text-white"
              >
                View
              </a>
            </div>
          </div>
        </div>
        <div className="relative mb-6">
          <p className="z-10 absolute top-[-2px] py-1 px-5 md:text-sm text-white font-serif left-0 text-start  rounded-full bg-orange-400">
            PHP
          </p>
          <div className="group md:min-h-[388px]  overflow-hidden md:my-0 my-4  shadow-lg  py-4  flex flex-col   rounded-md ">
            <img
              className="rounded-lg object-cover h-full md:h-[203px]   transition-transform transform hover:scale-105 duration-1000"
              src="/images/p.png"
              alt="projects"
            />
            <div className="mt-6 grid grid-cols-2 gap-1 lg:flex lg:justify-around space-x-2 md:space-x-1 mb-4">
              <h3 className="text-center ml-1 text-sm md:text-xs  bg-slate-500   py-1  rounded-full text-white px-4 md:px-2">
                PHP
              </h3>
              <h3 className="text-center text-sm md:text-xs  bg-slate-500   py-1  rounded-full text-white px-4 md:px-2">
                Mysql
              </h3>
              <h3 className="text-center text-sm md:text-xs  bg-slate-500   py-1  rounded-full text-white px-4 md:px-2">
                JavaScript
              </h3>
              <h3 className="text-center text-sm md:text-xs  bg-slate-500  py-1  rounded-full text-white px-4 md:px-2">
                CSS
              </h3>
            </div>

            <div>
              <h2 className="text-xl font-serif text-gray-500 uppercase mt-2 mb-2">
                Utility Provider App
              </h2>
              <a
                href="https://github.com/Sandip-3"
                // onClick={handleClick}
                className=" hover:scale-105 duration-1000 hover:opacity-90 text-xl md:text-sm  mb-2 mt-2 bg-slate-700 font-serif py-2 px-12 rounded-full text-white"
              >
                View
              </a>
            </div>
          </div>
        </div>
        <div className="relative mb-6">
          <p className="z-10 absolute top-[-2px] py-1 px-5 md:text-sm text-white font-serif left-0 text-start  rounded-full bg-orange-400">
            Full-Stack
          </p>
          <div className="group md:min-h-[388px]  overflow-hidden md:my-0 my-4  shadow-lg  py-4  flex flex-col   rounded-md ">
            <img
              className="rounded-lg object-cover h-full md:h-[203px]   transition-transform transform hover:scale-105 duration-1000"
              src="/images/mern.jpeg"
              alt="projects"
            />
            <div className="mt-6 grid grid-cols-2 gap-1 lg:flex lg:justify-around space-x-2 md:space-x-1 mb-4">
              <h3 className="text-center ml-1 text-sm md:text-xs  bg-slate-500  py-1  rounded-full text-white px-4 md:px-2">
                Node
              </h3>
              <h3 className="text-center text-sm md:text-xs  bg-slate-500  py-1  rounded-full text-white px-4 md:px-2">
                Express
              </h3>
              <h3 className="text-center text-sm md:text-xs  bg-slate-500  py-1  rounded-full text-white px-4 md:px-2">
                MongoDB
              </h3>
              <h3 className="text-center text-sm md:text-xs  bg-slate-500  py-1  rounded-full text-white px-4 md:px-2">
                React
              </h3>
            </div>

            <div>
              <h2 className="text-xl font-serif text-gray-500 uppercase mt-2 mb-2">
                MERN-Goal Setter
              </h2>
              <a
                href="https://github.com/Sandip-3"
                // onClick={handleClick}
                className=" hover:scale-105 duration-1000 hover:opacity-90 text-xl md:text-sm  mb-2 mt-2 bg-slate-700 font-serif py-2 px-12 rounded-full text-white"
              >
                View
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
