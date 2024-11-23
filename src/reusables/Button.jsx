import { CircularProgress } from "@mui/material";
import React from "react";

const Button = ({ text, width, loading, justify, bgColor }) => {
  return (
    <div className={`w-full ${justify ? 'justify-end' : 'justify-start'} flex`}>
      <button
        className={`bg-[#003F88] w-full text-white py-2 px-6 rounded-full md:text-[14px] text-[12px] hover:bg-[#003F88] transition duration-300 ease-in-out`}
      >
        {loading ? (
          <CircularProgress size={20} style={{ color: "white" }} />
        ) : (
          text
        )}
      </button>
    </div>
  );
};

export default Button;
