import React, { useState, useEffect } from "react";
import Button from "../../reusables/Button";
import { Link } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import { picture } from "../../assets";

const headerTexts = [
  "Transforming Visions Into Interactive Digital Experiences Through Modern Frontend Development",
  "Bringing Aesthetic and Functionality Together To Create Seamless User Experiences",
  "Frontend Solutions Crafted with Precision, Speed, and a Deep Focus on User-Centric Design",
  "Building Responsive and Dynamic Interfaces that Elevate Your Brand’s Online Presence",
  "Empowering Digital Journeys with Engaging, Innovative, and Accessible Frontend Solutions",
];

const Hero = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsSliding(false);

      setTimeout(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % headerTexts.length);
        setIsSliding(true);
      }, 500);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="sm:flex sm:flex-row gap-4 md:gap-0 flex flex-col justify-between">
      <div className="sm:w-[50%] w-full flex flex-col justify-center gap-4">
        <h2
          style={{
            transform: isSliding ? "translateX(0)" : "translateX(-100%)",
            opacity: isSliding ? 1 : 0,
            transition: "transform 0.5s ease, opacity 0.5s ease",
          }}
          className="lg:text-[30px] md:text-[20px] text-[30px] md:font-bold font-bold text-[#112F5A]"
        >
          {headerTexts[currentTextIndex]}
        </h2>
        <p className="paragraph mt-[10px] text-[#474F50] text-justify">
          I'm David. I'm a passionate frontend developer specializing in
          crafting visually stunning and highly functional websites. With
          expertise in modern frameworks and a strong focus on responsive
          design, I help bring ideas to life, one pixel at a time. Let's build a
          digital experience that leaves a lasting impression.
        </p>
        <div className="w-full mt-[24px] flex gap-4 md:w-fit mb-3 md:mb-0">
          <Link to={"/academy"}>
            <Button text={"View Projects"} width={"full"} bgColor={"#003F88"} />
          </Link>

          <a
            href="/Olaleye David CV.pdf"
            download="Olaleye David CV.pdf"
            className="text-red-600 border border-red-600 rounded-full px-6 text-[14px] flex items-center justify-center gap-2"
          >
            Download Resume <MdKeyboardArrowDown size={16} />
          </a>
        </div>
      </div>
      <div className="sm:w-[40%] w-full rounded-full">
        <img
          src={picture}
          alt="about"
          className="rounded-full h-[400px] w-[400px]"
        />
      </div>
    </div>
  );
};

export default Hero;
