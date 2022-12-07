import React from "react";

const CostumButton = ({ label, onClick, type, loading }) => {
  return (
    <button onClick={onClick} type={type} disabled={loading} className="mt-4 btn normal-case bg-biruAltera rounded-md text-white  lg:w-full md:w-full w-2/3 max-w-md h-12 font-bold hover:bg-orangeAltera font-Inter">
      {label}
    </button>
  );
};

const CostumButtonTwo = ({ label, onClick, type }) => {
  return (
    <div onClick={onClick} className="w-56 py-3 h-16">
      <button type={type} className="bg-blue-700 rounded-md text-white  w-56 h-12 font-bold hover:bg-orangeAltera font-Inter">
        {label}
      </button>
    </div>
  );
};

export { CostumButton, CostumButtonTwo };
