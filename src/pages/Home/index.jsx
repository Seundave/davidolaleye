import React from "react";
import Hero from "./Hero";
import Projects from "../../Home/Projects";
import Service from "./Service";
import Contact from "./Contact";
import Testimonial from "./Testimonial";

const index = () => {
  return (
    <div>
      <div className="">
        <div className="container px-[30px] py-[50px] sm:px-[30px] md:px-[40px] xl:px-0">
          <Hero />
          <Projects />
          <Service />
          <Testimonial/>
          <Contact/>
        </div>
      </div>
    </div>
  );
};

export default index;
