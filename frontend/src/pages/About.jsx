import React from "react";

function About() {
  return (
    <div
      id="about"
      className=" mt-12 shadow-md rounded-md gap-6 mx-20 md:grid md:py-0  md:grid-cols-2"
    >
      <div className="overflow-hidden rounded-md mt-6">
        <img
          className="md:ml-12 md:mb-16  object-cover hover:scale-105 duration-1000 rounded-md shadow-lg lg:h-[450px]  "
          src="/images/profile1.jpeg"
          alt="profile"
        />
      </div>
      <div className=" sm:block lg:block max-h-[140px]flex flex-col mt-6 text-balance overflow-hidden ">
        <h1 className="md:text-4xl text-3xl text-slate-600 font-serif uppercase">
          About Me
        </h1>
        <p className=" hidden lg:block mt-6 md:text-md text-base mx-12 p-2 indent-8 text-justify text-gray-500 font-serif ">
          I am a dedicated and proficient student in the field of Information
          Technology, specializing in full-stack development with expertise in
          React and Java technologies. My passion for IT fuels a commitment to
          continuous learning, ensuring that I stay current with industry
          trends. I possess a comprehensive skill set, allowing me to seamlessly
          navigate both front-end and back-end aspects of software projects.
          Proficient in React, I create responsive and scalable user interfaces,
          while my mastery of Java enables the development of robust and
          efficient back-end solutions. I actively contribute to projects that
          showcase my technical prowess and collaborative team spirit. Excited
          about the dynamic nature of the field, I am eager to apply and expand
          my skills in full-stack development.
        </p>
        <p className="lg:hidden mt-6 md:text-md text-base mx-12 p-2 indent-8 text-justify text-gray-500 font-serif ">
          I am a dedicated and proficient student in the field of Information
          Technology, specializing in full-stack development with expertise in
          React and Java technologies. I create responsive and scalable user
          interfaces, while my mastery of Java and Node Js enables the
          development of robust and efficient back-end solutions.
        </p>
      </div>
    </div>
  );
}

export default About;
