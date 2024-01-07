import React from "react";
import { IoSchool } from "react-icons/io5";
import { FaSchool } from "react-icons/fa6";
import { LuSchool } from "react-icons/lu";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Education() {
  return (
    <>
      <div className="text-center mt-12 mb-12 md:mx-48 border-b border-gray-300">
        <h1 className="font-serif text-4xl text-slate-600 mb-2 uppercase">
          Education
        </h1>
      </div>
      <div className=" mb-12 ml-20 mr-20">
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work text-2xl font-serif "
            contentStyle={{ background: "#fff", color: "#000" }}
            contentArrowStyle={{ borderRight: "7px solid  #fff" }}
            date="2020 - Present"
            dateStyle={{ color: "#000" }}
            iconStyle={{ background: "#708090", color: "#fff" }}
            icon={<IoSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              Patan Multiple Campus
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Patan-Dhoka, Lalitpur
            </h4>
            <p>
              Campus leading in Bachelor of Computer Application. making every
              dream looks easy.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work text-2xl font-serif "
            contentStyle={{ background: "#fff", color: "#000" }}
            contentArrowStyle={{ borderRight: "7px solid  #fff" }}
            date="2017 - 2019"
            dateStyle={{ color: "#000" }}
            iconStyle={{ background: "#708090", color: "#fff" }}
            icon={<FaSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              Tilottama Science Campus
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Yogikuti, Butwal
            </h4>
            <p>
              Completed Higher Educaiton with CGPA-3.24 from Science Faculty.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work text-2xl font-serif "
            contentStyle={{ background: "#fff", color: "#000" }}
            contentArrowStyle={{ borderRight: "7px solid  #fff" }}
            date="2015 - 2016"
            dateStyle={{ color: "#000" }}
            iconStyle={{ background: "#708090", color: "#fff" }}
            icon={<LuSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              Nepal Nalanda School
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Golighat, Bhairahawa
            </h4>
            <p>Completed Secondary Educaiton with GPA-3.70.</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
}

export default Education;
