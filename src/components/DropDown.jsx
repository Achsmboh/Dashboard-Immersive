import React from "react";

const DropDown = ({ name, optionOne, optionTwo, optionThree }) => {
  return (
    <div className="w-full max-w-md m-1">
      <div className="label-text font-Inter text-biruAltera my-2">{name}</div>
      <select className="select select-bordered w-full max-w-md focus:outline-none bg-abuAltera focus:border-biruAltera focus:ring-1 focus:ring-biruAltera ">
        <option disabled selected className="text-biruAltera">
          <span className="text-biruAltera">Choose Your Choice</span>
        </option>
        <option className="text-biruAltera font-Inter h-16">{optionOne}</option>
        <option className="text-biruAltera font-Inter">{optionTwo}</option>
        <option className="text-biruAltera font-Inter">{optionThree}</option>
      </select>
    </div>
  );
};

const DropDownTwo = ({ name, optionOne, optionTwo }) => {
  return (
    <div className="w-full max-w-md m-1">
      <div className="label-text font-Inter text-biruAltera my-2">{name}</div>
      <select className="select select-bordered w-full max-w-md focus:outline-none bg-abuAltera focus:border-biruAltera focus:ring-1 focus:ring-biruAltera ">
        <option disabled selected className="text-biruAltera">
          <span className="text-biruAltera">Choose Your Choice</span>
        </option>
        <option className="text-biruAltera font-Inter h-16">{optionOne}</option>
        <option className="text-biruAltera font-Inter">{optionTwo}</option>
      </select>
    </div>
  );
};

export { DropDown, DropDownTwo };
