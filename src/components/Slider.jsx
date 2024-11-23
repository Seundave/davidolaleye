import React, { useState, useEffect } from "react";
import { arrowLeft, arrowRight } from "../assets";

const SliderContent = ({ testimonialBy }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const groupedTestimonials = [];
  const itemsPerGroup = isMobile ? 1 : isTablet ? 2 : 3;

  for (let i = 0; i < testimonialBy?.length; i += itemsPerGroup) {
    groupedTestimonials.push(testimonialBy?.slice(i, i + itemsPerGroup));
  }

  const nextSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex + 1) % groupedTestimonials?.length
    );
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + groupedTestimonials?.length) %
        groupedTestimonials?.length
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [currentIndex, groupedTestimonials?.length]);

  return (
    <div className=" h-full">
      <div className="flex justify-between">
        {/* Left Arrow */}
        {/* <button
          className=" text-[30px] text-[#22C55E] p-2 rounded-full font-bold"
          onClick={prevSlide}
        >
          {"<"}
        </button> */}

        <div
          className="flex justify-center items-center cursor-pointer sm:flex hidden"
          onClick={prevSlide}
        >
          <img
            src={arrowLeft}
            alt=""
            className="lg:w-[140px] md:h-[25px] sm:w-[250px]"
          />
        </div>

        <div className="overflow-hidden h-auto md:mx-[30px]">
          <div
            className="flex transition-transform duration-300 ease-in-out w-full justify-between mt-[20px]"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {groupedTestimonials.map((group, index) => (
              <div
                key={index}
                className="flex w-full flex-shrink-0 max-sm:justify-center md:justify-between gap-5 overflow-hidden"
                style={{ width: "100%" }}
              >
                {group.map((item) => (
                  <div
                    key={item.id}
                    className="max-sm:w-[100%] lg:w-[45%] flex flex-col gap-5 py-[15px] p-[15px] border border-gray-300 rounded-md"
                  >
                    {/* <div className="border border-gray-300 w-[120px] h-[120px] rounded-full p-[20px] justify-center items-center flex">
                    <img
                      src={item.image}
                      alt=""
                      className="w-[110px] h-[80px] rounded-full object-cover"
                    />
                  </div> */}

                    <div className="h-auto">
                      <p className="text-[12px] text-justify">
                        {item.testimony}
                      </p>
                    </div>
                    <div className="flex items-center">
                      {/* <div>
                        <div className="justify-center items-center flex w-[50px] h-[50px]">
                          <img src={item.image} alt="" className="" />
                        </div>
                      </div> */}
                      <div className="flex flex-col">
                        <p className="text-[14px]  font-bold">{item.name}</p>
                        <p className="text-[12px] text-gray-400">{item.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        {/* <button
          className=" text-[30px] text-[#22C55E] p-2 rounded-full font-bold"
          onClick={nextSlide}
        >
          {">"}
        </button> */}
        <div
          className="flex justify-center items-center cursor-pointer sm:flex hidden"
          onClick={nextSlide}
        >
          <img
            src={arrowRight}
            alt=""
            className="lg:w-[140px] md:h-[25px] sm:w-[250px]"
          />
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex space-x-2 justify-center items-center mt-[20px]">
        {groupedTestimonials.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${
              currentIndex === index ? "bg-blue-900" : "bg-gray-500"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default SliderContent;
