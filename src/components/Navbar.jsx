import React from "react";
import { useCookies } from "react-cookie";
import { HiUsers, HiUserGroup } from "react-icons/hi";
import { MdDashboard, MdClass } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

export const Navbar = ({ title, name }) => {
  const cookie = useCookies();
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
            <div className="lg:grid md:grid hidden">
              <h3 className="text-biruAltera font-Inter">Hallo,</h3>
              <h3 className="text-biruAltera font-Inter font-bold">
                {cookie.map((item) => {
                  return item.email;
                })}
              </h3>
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
                <a href="/dashboard" className=" flex items-center  h-full">
                  <div className="flex items-center mr-3  h-full text-biruAltera">
                    <MdDashboard />
                  </div>
                  <h2 className={`text-biruAltera  font-Inter `}>Dashboard</h2>
                </a>
              </li>
              <li>
                <a href="/mentee-list" className=" flex items-center  h-full">
                  <div className="flex items-center mr-3  h-full text-biruAltera">
                    <HiUserGroup />
                  </div>
                  <h2 className={` text-biruAltera`}>Mentee</h2>
                </a>
              </li>
              <li>
                <a href="user-list" className=" flex items-center  h-full">
                  <div className="flex items-center mr-3  h-full text-biruAltera">
                    <HiUsers />
                  </div>
                  <h2 className={` text-biruAltera`}>User</h2>
                </a>
              </li>
              <li>
                <a href="/class-list" className=" flex items-center  h-full">
                  <div className="flex items-center mr-3  h-full text-biruAltera">
                    <MdClass />
                  </div>
                  <h2 className={` text-biruAltera`}>Class</h2>
                </a>
              </li>
              <li>
                <a href="/edit-profile" className=" flex items-center  h-full">
                  <div className="flex items-center mr-3  h-full text-biruAltera">
                    <CgProfile />
                  </div>
                  <h2 className={`text-biruAltera`}>Profile</h2>
                </a>
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
