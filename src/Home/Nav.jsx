import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import { IconButton } from "@mui/material";
import { X } from "@phosphor-icons/react";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
// import { navLinks } from "../constant/data";
import Button from "../reusables/Button";
import { navLinks } from "../constant/data";
// import { logo } from "../assets";

function Nav() {
  const activeStyle = "text-white";
  const [showMenu, setShowMenu] = useState(false);
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);
  //   const navigate = useNavigate();

  // const goToBooking = () => {
  //   // navigate("/booking");
  // };

  // const goToAcademy = () => {
  //   // navigate("/academy");
  // };

  const toggleAboutDropdown = () => {
    setShowAboutDropdown(!showAboutDropdown);
  };

  const closeAboutDropdown = () => {
    setShowAboutDropdown(false);
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    if (showMenu) {
      closeAboutDropdown();
    }
  };

  return (
    <div>
      {/* Mobile Navigation Bar */}
      <div className="lg:hidden bg-white py-3.5 px-[30px] flex items-center justify-between">
        {/* <Link to={"/"}>
          <div>
            <img src={"#"} alt="logo" className="w-[60px] h-[40px]" />
          </div>
        </Link> */}
        <div>
              <p className="text-[18px] font-semibold text-[#112F5A]">
                SEUNDAVE
              </p>
            </div>

        <button onClick={toggleMenu}>
          {showMenu ? (
            <X size={24} color="black" style={{ color: "black" }} />
          ) : (
            <svg
              className="h-6 w-6 fill-blue"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 5h18v2H3V5zm0 6h18v2H3v-2zm0 6h18v2H3v-2z"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Sliding Menu for Mobile */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          showMenu ? "max-h-screen" : "max-h-0"
        }`}
      >
        <ul className="bg-white px-[30px] pt-4 pb-6 shadow-md h-auto">
          {navLinks.map((el) => (
            <li key={el.id}>
              <a href={el.link} className="text-black">
                <div className="uppercase my-[15px]">{el.title}</div>
              </a>
            </li>
          ))}
          <div className="flex flex-col gap-4  justify-between">
            {/* The button now has `white-space: nowrap` to prevent text wrapping */}
            {/* <button
            className="text-[#003F88] rounded-lg md:text-[14px] text-[14px] text-start transition duration-300 ease-in-out whitespace-nowrap"
            onClick={goToBooking}
          >
            Book Appointment
          </button> */}
            <div>
              <a href={"#contact"}>
                <Button text={"Contact"} />
              </a>
            </div>
          </div>
        </ul>
      </div>

      {/* Desktop Navigation Bar */}
      <div className="bg-white hidden lg:block py-[13px] shadow-lg">
        <div className="container px-[30px] sm:px-[30px] md:px-[40px] xl:px-0">
          <nav className=" lg:flex lg:items-center lg:justify-between h-[50px]">
            {/* <Link to={"/"}>
              <div>
                <img
                  src={"#"}
                  alt="logo"
                  className="w-[70px] h-[50px] cursor-pointer"
                />
              </div>
            </Link> */}

            <div>
              <p className="text-[18px] font-semibold text-[#112F5A]">
                SEUNDAVE
              </p>
            </div>

            <div className="flex gap-3">
              <div className="lg:flex w-full">
                <ul className="lg:flex px-[30px] justify-center items-center gap-8 text-[12px] uppercase font-semibold">
                  {navLinks.map((el) => (
                    <li key={el.id}>
                      <a href={el.link} className="text-[#112F5A]">
                        <div className="hover:text-[#F7931E]">{el.title}</div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex gap-4 items-center justify-between">
              {/* The button now has `white-space: nowrap` to prevent text wrapping */}
              {/* <button
                className="text-[#003F88] rounded-lg md:text-[14px] text-[12px] transition duration-300 ease-in-out whitespace-nowrap"
                onClick={goToBooking}
              >
                Book Appointment
              </button> */}
              <div>
                <a href={"#contact"}>
                  <Button text={"Contact"} />
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Nav;
