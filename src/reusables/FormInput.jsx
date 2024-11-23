import React from "react";

function FormInput({
  placeholder,
  type,
  label,
  required,
  bgColor,
  error,
  register,
  labelNewClasses,
  ...other
}) {
  return (
    <div>
      <label className={`text-[14px] md:text-[14px] ${labelNewClasses}`}>
        {label}
        <span className="text-red-600">{required && "*"}</span>
      </label>
      <input
        {...register}
        placeholder={placeholder}
        type={type}
        className={`w-full outline-none text-[12px] py-[10px] sm:py-[12px] px-[15px]  md:text-[14px]  rounded-md border border-gray-400  my-[8px] ${bgColor}`}
        {...other}
      />
      {error && <p className="text-[red] text-[12px]">{error}</p>}
    </div>
  );
}

export default FormInput;


