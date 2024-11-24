import React, { useState, useEffect } from "react";
import Button from "../../reusables/Button";
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
    <div className="flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-0 lg:px-0 py-10 gap-6 md:gap-12">
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start gap-6">
        <h2
          style={{
            transform: isSliding ? "translateX(0)" : "translateX(-100%)",
            opacity: isSliding ? 1 : 0,
            transition: "transform 0.5s ease, opacity 0.5s ease",
          }}
          className="text-[24px] md:text-[30px] lg:text-[36px] font-bold text-[#112F5A]"
        >
          {headerTexts[currentTextIndex]}
        </h2>
        <p className="text-[14px] md:text-[16px] text-[#474F50] leading-relaxed">
          I'm David. I'm a passionate frontend developer specializing in
          crafting visually stunning and highly functional websites. With
          expertise in modern frameworks and a strong focus on responsive
          design, I help bring ideas to life, one pixel at a time. Let's build a
          digital experience that leaves a lasting impression.
        </p>
        <div className="w-full flex flex-wrap gap-4 mt-4">
          <a href={"#projects"}>
            <Button text={"View Projects"} width={"full"} bgColor={"#003F88"} />
          </a>
          <a
            href="/Olaleye David CV.pdf"
            download="Olaleye David CV.pdf"
            className="text-red-600 border border-red-600 rounded-full px-6 py-2 text-[14px] flex items-center justify-center gap-2"
          >
            Download Resume <MdKeyboardArrowDown size={16} />
          </a>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={picture}
          alt="David's Profile"
          className="rounded-full max-w-[250px] md:max-w-[350px] lg:max-w-[400px] h-auto"
        />
      </div>
    </div>
  );
};

export default Hero;
