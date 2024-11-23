import React from "react";
import SliderContent from "../../components/Slider";
import { AllTestimonials } from "../../constant/data";
// import { useSelector } from "react-redux";

const Testimonial = () => {
  //   const { testimonials } = useSelector((state) => state.testimonial);
  //   console.log(testimonials)
  return (
    <div className="md:my-[70px] my-[20px]" id="testimonials">
      <div className="">
        <h2 className="lg:text-[25px] md:text-[18px] text-[25px] md:font-bold text-center font-bold text-[#112F5A]">
          Testimonials
        </h2>
        <p className="paragraph mt-[10px] text-[#474F50] text-center">
          Here’s what clients, colleagues, and collaborators have shared about
          their experience working with me.
        </p>
      </div>
      <div className="mt-[20px] mb-[20px] ">
        <SliderContent testimonialBy={AllTestimonials} />
      </div>
    </div>
  );
};

export default Testimonial;
