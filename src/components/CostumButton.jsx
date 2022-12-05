import React from "react";

const CostumButton = ({ label }) => {
  return (
    <div className="w-full max-w-md py-3 h-16">
      <button className="bg-biruAltera rounded-md text-white  w-full max-w-md h-12 font-bold hover:bg-orangeAltera font-Inter">{label}</button>
    </div>
  );
};

const CostumButtonTwo = ({ label }) => {
  return (
    <div className="w-56 py-3 h-16">
      <button className="bg-blue-700 rounded-md text-white  w-56 h-12 font-bold hover:bg-orangeAltera font-Inter">{label}</button>
    </div>
  );
};

export { CostumButton, CostumButtonTwo };
