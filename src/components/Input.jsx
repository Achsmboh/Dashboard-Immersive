import React from "react";

const Input = ({ label, placeholder, type, value, w }) => {
  return (
    <div className={`form-control w-full max-${w ? w : "w-md"}`}>
      <label className="label">
        <span className="label-text font-Inter text-biruAltera">{label}</span>
      </label>
      <input type={type} placeholder={placeholder} value={value} className={`input input-bordered w-full max-${w ? w : "w-md"} focus:border-biruAltera focus:ring-1 focus:ring-biruAltera focus:outline-none bg-abuAltera`} />
    </div>
  );
};

export default Input;
