import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import {
  gomal,
  gomal2,
  helpdesk,
  nopolus,
  smarta,
  teesbridal,
  transformative,
} from "../../assets";
import Button from "../../reusables/Button";

const projectCard = [
  {
    id: 1,
    image: gomal,
    title: "Gomal Baptist College (Portal)",
    about:
      "A unified platform for managing school operations, connecting staff and students, and streamlining academic and administrative tasks.",
    skills: [
      "Tailwind css",
      "ReactJS",
      "Material UI",
      "API Integration",
      "Toastify",
      "Redux",
    ],
    link: "https://portal.gomalbapcollege.com",
  },
  {
    id: 2,
    image: gomal2,
    title: "Gomal Baptist College (Website)",
    about:
      "A website for school news, events, and resources, with easy access to updates, announcements, and helpful links for students, parents, and staff.",
    skills: [
      "Tailwind css",
      "ReactJS",
      "Material UI",
      "API Integration",
      "Toastify",
      "Redux",
    ],
    link: "https://www.gomalbapcollege.com/",
  },
  {
    id: 3,
    image: smarta,
    title: "Smarta Teens Consulting",
    about:
      "Smarta Teens Consulting helps teens succeed through personalized coaching, career advice, and mentorship.",
    skills: [
      "Tailwind css",
      "ReactJS",
      "Material UI",
      "API Integration",
      "Toastify",
      "Redux",
    ],
    link: "https://smartateensconsulting.com/",
  },
  {
    id: 4,
    image: teesbridal,
    title: "Tees Bridal",
    about:
      "Tee’s Bridal is your one-stop store for dream dresses and personalized service, making your wedding journey unforgettable.",
    skills: [
      "Tailwind css",
      "ReactJS",
      "Material UI",
      "API Integration",
      "Toastify",
      "Redux",
    ],
    link: "https://teesbridal.com/",
  },

  {
    id: 6,
    image: helpdesk,
    title: "University of Ibadan Helpdesk Support",
    about:
      "This is a helpdesk solution for the University of Ibadan, designed to assist students and staff in resolving issues and accessing information quickly.",
    skills: [
      "Tailwind css",
      "ReactJS",
      "Material UI",
      "API Integration",
      "Toastify",
      "Redux",
    ],
    link: "https://transformative-teacher-frontend.vercel.app/",
  },
  {
    id: 5,
    image: nopolus,
    title: "Nopolus Global Resources",
    about:
      "Nopolus is a trusted digital partner, offering expert solutions to navigate the ever-changing IT landscape and empower success.",
    skills: [
      "Tailwind css",
      "ReactJS",
      "Material UI",
      "API Integration",
      "Toastify",
      "Redux",
    ],
    link: "https://nopolus.com/",
  },
  {
    id: 7,
    image: gomal,
    title: "Additional Project",
    about: "Additional project info",
    skills: ["test", "test", "test"],
    link: "/",
  },
];

const ProjectList = () => {
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
              <Link to={el.link}>
                <div className="flex gap-2 items-center mt-5">
                  <p className="paragraph text-red-500">View Project</p>
                  <MdOutlineKeyboardArrowRight
                    size={16}
                    style={{ color: "red" }}
                  />
                </div>
              </Link>
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

export default ProjectList;
