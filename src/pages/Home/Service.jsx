import React from "react";
import {
  FaCode,
  FaMobileAlt,
  FaPalette,
  FaServer,
  FaDatabase,
  FaBug,
  FaCogs,
} from "react-icons/fa";

const serviceList = [
  {
    id: 1,
    title: "Responsive Web Design",
    icon: <FaMobileAlt />,
    description:
      "Creating layouts that adapt seamlessly to different screen sizes, providing a smooth user experience on mobile, tablet, and desktop devices.",
  },
  {
    id: 2,
    title: "Testing and Debugging",
    icon: <FaBug />,
    description:
      "Ensuring web applications are bug-free and perform as expected by implementing automated tests, conducting thorough debugging, and using tools like Jest, Cypress, or Chrome DevTools.",
  },
  {
    id: 3,
    title: "Accessibility Optimization",
    icon: <FaCogs />,
    description:
      "Ensuring web applications are accessible to all users, including those with disabilities, by following WCAG guidelines and using semantic HTML.",
  },
  {
    id: 4,
    title: "Performance Optimization",
    icon: <FaCogs />,
    description:
      "Enhancing website speed and efficiency by optimizing code, assets, and server configurations to provide a better user experience.",
  },
  {
    id: 5,
    title: "API Integration",
    icon: <FaServer />,
    description:
      "Connecting frontend applications with backend APIs to enable seamless data flow and interactivity across the application.",
  },
  {
    id: 6,
    title: "State Management",
    icon: <FaDatabase />,
    description:
      "Implementing robust state management strategies to ensure data consistency and improve application performance using tools like Redux or Context API.",
  },
];

const Service = () => {
  return (
    <div className="">
      <div className="container py-6">
        <p className="paragraph text-center">Innovate</p>
        <h4 className="section-header-text text-center">
          Skills and Expertise
        </h4>
        <div className="flex items-center justify-center w-full mt-2">
          <p className="paragraph text-center max-w-[700px]">
            Here are some of the core skills and expertise that I have developed
            over the years, allowing me to deliver high-quality work and
            innovative solutions. From technical proficiency to creative
            problem-solving, I am equipped to tackle diverse challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-3 grid-cols-1 gap-6 mt-6">
          {serviceList.map((service) => (
            <div
              key={service.id}
              className="service-card flex flex-col items-center p-6 bg-white rounded-lg shadow-md transition-transform duration-300 hover:bg-[#000080] hover:text-white"
            >
              <div className="icon mb-4 text-3xl transition-colors duration-300">
                {service.icon}
              </div>
              <h5 className="font-semibold text-lg text-center">
                {service.title}
              </h5>
              <p className="text-center mt-2 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
