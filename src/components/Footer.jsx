import React from "react";
import { Link } from "react-router-dom";
import { IoMdMail } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="py-[75px] bg-[#000080]" id="contact">
      <div className="flex-container mx-auto px-[30px] sm:px-[30px] md:px-[40px] xl:px-0 flex flex-row justify-between">
        <div>
          <p className="text-white paragraph">
            © {currentYear} David Olaleye. All Rights Reserved.
          </p>
        </div>
        <div className="flex gap-4">
          <Link to={"https://www.linkedin.com/in/david-olaleye/"}>
            <FaLinkedinIn color="white" size={20}/>
          </Link>

          <Link to="mailto:olaleyedavid323@gmail.com">
            <IoMdMail color="white" size={20}/>
          </Link>

          <Link to="https://github.com/Seundave?tab=overview&from=2024-11-01&to=2024-11-23">
            <FaGithub color="white" size={20}/> 
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
