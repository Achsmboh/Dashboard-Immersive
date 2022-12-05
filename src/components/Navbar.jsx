import React from "react";

export const Navbar = ({ title, name }) => {
  return (
    <div className="p-5 z-20 sticky top-1">
      <div className="navbar bg-base-100 rounded-2xl">
        <div className="flex-1 p-2 ">
          <div className="flex flex-col">
            <h2 className="text-biruAltera font-bold font-Inter">Immersive Dashboard</h2>
            <h2 className="text-biruAltera font-Inter">{title}</h2>
          </div>
        </div>
        <div className="flex-none gap-2">
          <div className="mr-5">
            <div>
              <h3 className="text-biruAltera font-Inter">Hallo,</h3>
              <h3 className="text-biruAltera font-Inter font-bold">{name}</h3>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" />
              </div>
            </label>
            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
              <li>
                <a className="justify-between text-biruAltera font-Inter">Profile</a>
              </li>
              <li>
                <a className="text-biruAltera font-Inter">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
