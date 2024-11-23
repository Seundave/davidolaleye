import React, { useState } from "react";
import ProjectList from "./ProjectList";
import PersonalProjects from "./PersonalProject";
// import CreateUserTable from "./CreateUserTable";
// import UserResponsibility from "./UserResponsibility";
// import UserList from "./UserList";
// import { maleUser } from "../../../assets";

const userTabs = ["Live Projects", "Personal Projects"];

function Projects() {
  const [activeTab, setActiveTab] = useState("Live Projects");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex flex-col py-[20px] my-[30px]" id="projects">
      <p className="paragraph text-center">Portfoilio</p>
      <h4 className="section-header-text text-center">Featured Projects</h4>
      <div className="">
        <div className="flex mx-[50px] mt-5 gap-6 justify-center">
          {userTabs.map((item) => (
            <div
              className={`cursor-pointer ${
                activeTab === item
                  ? "text-[#003F88] border-b-2 border-[#003F88]"
                  : ""
              }`}
              key={item}
              onClick={() => handleTabClick(item)}
            >
              <button className="text-[12px] border-b border-w-[10px] text-black">
                {item}
              </button>
            </div>
          ))}
        </div>
        {activeTab === "Live Projects" && <ProjectList />}
        {activeTab === "Personal Projects" && <PersonalProjects />}
        {/* {activeTab === "Live Project" && <ProjectList />} */}
        {/* {activeTab === "Roles Responsibilities" && <UserResponsibility />} */}
        {/* {activeTab === "User Lists" && <UserList setActiveTab={setActiveTab} />} */}
      </div>
    </div>
  );
}

export default Projects;
