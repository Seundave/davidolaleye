import React from "react";
// import { search } from "../../assets";
// import { IoSearchSharp } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";

function SearchInput({ placeholder, value, onChange }) {
  return (
    <div>
      <div className="max-sm:basis-[100%] border  border-gray-400 flex flex-row justify-between items-center px-[20px] py-[10px] rounded-lg h-[40px]">
        <div className="flex w-full">
          {/* <div>
            <p>Search</p>
          </div> */}
          <div className="w-full">
            <input
              type="text"
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              // placeholder="Fee, Class, or Status"
              className="text-[12px] border-transparent bg-transparent focus:outline-none w-full"
            />
          </div>
        </div>
        <div>
        {/* <IoSearchSharp size={16} /> */}
        <IoSearchOutline />
          {" "}
          {/* <img
            src={search}
            alt="search-icon"
            className="ml-[40px] object-contain cursor-pointer"
          /> */}
        </div>
      </div>
    </div>
  );
}

export default SearchInput;
