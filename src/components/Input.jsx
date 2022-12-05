import React from "react";

const Input = ({ label, placeholder, type }) => {
  return (
    <div className="form-control w-full max-w-md ">
      <label className="label">
        <span className="label-text font-Inter text-biruAltera">{label}</span>
      </label>
      <input type={type} placeholder={placeholder} className="input input-bordered w-full max-w-md focus:border-biruAltera focus:ring-1 focus:ring-biruAltera focus:outline-none bg-abuAltera" />
    </div>
  );
};

export default Input;
