import React from "react";

const Input = ({ label, placeholder }) => {
  return (
    <div className="form-control w-full max-w-xs ">
      <label className="label">
        <span className="label-text font-Inter text-biruAltera">{label}</span>
      </label>
      <input type="text" placeholder={placeholder} className="input input-bordered w-full max-w-xs focus:border-biruAltera focus:ring-1 focus:ring-biruAltera focus:outline-none bg-abuAltera" />
    </div>
  );
};

export default Input;
