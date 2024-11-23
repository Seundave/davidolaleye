import React from "react";
import { Link, Outlet } from "react-router-dom";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

const AppLayout = () => {
  return (
    <div className="flex flex-col h-screen ">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Nav />
        
      </div>

      <div className="grow mt-[80px]">
        <Outlet />
      </div>
      <Footer />
      {/* <div className="flex cursor-pointer justify-center items-center fixed bottom-[10px] right-[10px] w-[50px] h-[50px] bg-transparent">
        <Link to="http://wa.me/+2347033667688" target="_blank">
          <WhatsappLogo fill="green" color="black" size={50} />
        </Link>
      </div> */}
    </div>
  );
};

export default AppLayout;
