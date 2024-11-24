import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import {
  carShow,
  gomal,
  gomal2,
  helpdesk,
  kitchen,
  lms,
  nopolus,
  smarta,
  surepay,
  teesbridal,
  transformative,
} from "../../assets";
import Button from "../../reusables/Button";

const projectCard = [
  {
    id: 1,
    image: lms,
    title: "Learning Management System",
    about:
      "The platform was built to streamline learning, featuring course management, progress tracking, and an intuitive user experience for educators and students.",
    skills: ["Tailwind css", "ReactJS", "Redux", "Shadcn"],
    link: "https://learningmanagementwebapp.netlify.app/",
  },
  {
    id: 2,
    image: surepay,
    title: "Surepay Africa (Replica)",
    about:
      "The platform was developed to ensure secure online transactions, protecting buyers and sellers while promoting trust and safety in e-commerce across Africa. ",
    skills: ["Tailwind css", "NextJS", "React-hook-form", "Shadcn"],
    link: "https://surepay-africa.netlify.app/",
  },
  {
    id: 2,
    image: carShow,
    title: "Car Showcase (Website)",
    about:
      "The website was built to showcase stunning car collections, featuring detailed specifications, high-quality visuals, and a seamless browsing experience for enthusiasts.",
    skills: ["Tailwind css", "NextJS"],
    link: "https://carshowcaseweb.netlify.app/",
  },

  {
    id: 3,
    image: kitchen,
    title: "A Restaurant Website",
    about:
      "The website was created to showcase the restaurant’s menu, highlight its ambiance, and provide a seamless reservation experience for customers.",
    skills: ["Tailwind css", "ReactJS"],
    link: "https://seundavegericht.netlify.app/",
  },
];

const PersonalProjects = () => {
  const [visibleProjects, setVisibleProjects] = useState(6);

  const handleViewMore = () => {
    setVisibleProjects((prevCount) => prevCount + 6);
  };

  return (
    <div className="mt-5 h-auto">
      <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
        {projectCard.slice(0, visibleProjects).map((el, index) => (
          <div
            key={el.id + index}
            className="shadow rounded-md bg-[#F2F2F2] animate-fade-in-up"
            style={{
              animationDelay: `${index * 0.1}s`,
            }}
          >
            <img src={el.image} alt="" className="rounded-md w-full" />
            <div className="px-3  mb-4">
              <p className="text-[16px] pt-2 font-semibold">{el.title}</p>
              <p className="paragraph text-gray-500 my-2">{el.about}</p>
              <div className="flex flex-wrap">
                {el.skills.map((item, i) => (
                  <button
                    key={i}
                    className="mr-2 mb-2 bg-[#3c3cdd] text-white py-[2px] px-3 rounded-md text-[10px]"
                  >
                    {item}
                  </button>
                ))}
              </div>
              <a href={el.link} target="_blank" rel="noopener noreferrer">
                <div className="flex gap-2 items-center mt-5">
                  <p className="paragraph text-red-500">View Project</p>
                  <MdOutlineKeyboardArrowRight
                    size={16}
                    style={{ color: "red" }}
                  />
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
      {visibleProjects < projectCard.length && (
        <div className="flex justify-center mt-5">
          <div className="w-[15%]" onClick={handleViewMore}>
            <Button text={"View More"} />
          </div>
        </div>
      )}
    </div>
  );
};

export default PersonalProjects;
