import React from "react";
import { MdDashboard, MdClass } from "react-icons/md";
import { HiUserGroup, HiUsers } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";

const Sidebar = ({ dashboardFontStyle, dashboardShadow, menteeFontStile, menteeShadow, userFontStyle, userShadow, classFontStyle, classShadow }) => {
  return (
    <div className="bg-white h-screen  rounded-l-3xl p-3 flex flex-col">
      <div className="h-24 flex justify-center items-center ">
        <img src="https://academy.alterra.id/wp-content/uploads/2022/06/Logo-Colour-Transparant-1.png" alt="logo altera" width={110} />
      </div>
      <div className="flex flex-col justify-between h-full ">
        <div>
          <div className=" p-2  border-b-2 border-biruAltera border-dashed m-2">
            <a href="/dashboard" className={`h-16 bg-white ${dashboardShadow} rounded-xl flex items-center p-3 m-2 hover:shadow-lg hover:font-bold hover:z-10 transition hover:scale-105 `}>
              <div className=" flex items-center  h-full">
                <div className="flex items-center mr-3  h-full text-biruAltera">
                  <MdDashboard />
                </div>
                <h2 className={`text-biruAltera ${dashboardFontStyle} font-Inter `}>Dashboard</h2>
              </div>
            </a>
            <a href="/mentee-list" className={`${menteeShadow} h-16 rounded-xl flex items-center p-3 m-2 hover:shadow-lg hover:font-bold hover:z-10 transition hover:scale-105 `}>
              <div className=" flex items-center  h-full">
                <div className="flex items-center mr-3  h-full text-biruAltera">
                  <HiUserGroup />
                </div>
                <h2 className={`${menteeFontStile} text-biruAltera`}>Mentee</h2>
              </div>
            </a>
            <a href="/user-list" className={`${userShadow} h-16 rounded-xl flex items-center p-3 m-2 hover:shadow-lg hover:font-bold hover:z-10 transition hover:scale-105 `}>
              <div className=" flex items-center  h-full">
                <div className="flex items-center mr-3  h-full text-biruAltera">
                  <HiUsers />
                </div>
                <h2 className={`${userFontStyle} text-biruAltera`}>User</h2>
              </div>
            </a>
            <a href="/class-list" className={`${classShadow} h-16 rounded-xl flex items-center p-3 m-2 hover:shadow-lg hover:font-bold hover:z-10 transition hover:scale-105 `}>
              <div className=" flex items-center  h-full">
                <div className="flex items-center mr-3  h-full text-biruAltera">
                  <MdClass />
                </div>
                <h2 className={`${classFontStyle} text-biruAltera`}>Class</h2>
              </div>
            </a>
          </div>
          <div className="px-4 hover:z-10 transition hover:scale-105 ">
            <div className="h-16 rounded-xl flex items-center p-3 m-2">
              <div className=" flex items-center  h-full">
                <div className="flex items-center mr-3  h-full text-biruAltera">
                  <CgProfile />
                </div>
                <h2 className="text-biruAltera">Profile</h2>
              </div>
            </div>
          </div>
        </div>
        <a href="/" className="p-6">
          <button className="btn bg-orangeAltera w-full border-none font-Inter normal-case hover:bg-red-700">Logout</button>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
