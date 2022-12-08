import React from "react";
import { MdModeEdit } from "react-icons/md";
import { FaTrash } from "react-icons/fa";

const CardTabel = ({ name, email, team, role, status, no, key, disabled, onClick }) => {
  return (
    <div key={key} className={`grid grid-cols-12 mt-5 mb-1 bg-abuAltera h-12 rounded-lg hover:z-10 transition hover:scale-105 hover:bg-orangeAltera`}>
      <div className=" flex items-center justify-center">
        <p className="text-biruAltera font-Inter font-bold lg:text-base md:text-sm text-xs">{no}</p>
      </div>
      <div className=" col-span-3 flex items-center justify-center">
        <p className="text-biru Altera font-Inter font-bold lg:text-base md:text-sm text-xs">{name}</p>
      </div>
      <div className="  hidden col-span-3 lg:flex md:flex items-center justify-center">
        <p className=" text-biruAltera font-Inter font-bold lg:text-base md:text-sm text-xs">{email}</p>
      </div>
      <div className="col-span-2 text-center flex items-center justify-center">
        <p className="text-biruAltera font-Inter font-bold lg:text-base md:text-sm text-xs">{team}</p>
      </div>
      <div className="text-center lg:col-span-1 md:col-span-1  col-span-2   flex items-center justify-center">
        <p className="text-biruAltera font-Inter font-bold lg:text-base md:text-sm text-xs">{role}</p>
      </div>
      <div className="text-center flex lg:col-span-1 md:col-span-1 col-span-2  items-center justify-center">
        <div className={`${status == "Active" ? "bg-green-200" : "bg-yellow-200"}  rounded-lg w-20 h-5 px-1 flex justify-center items-center`}>
          <p className={`${status == "Active" ? "text-green-700" : "text-yellow-700"}  font-Inter font-bold lg:text-base md:text-sm text-xs`}>{status}</p>
        </div>
      </div>
      <div className=" text-center flex lg:col-span-1 md:col-span-1 col-span-2  items-center justify-center w-full ">
        <div className="flex justify-around w-full">
          <button
            disabled={disabled}
            className="disabled:text-gray-500 disabled:border-gray-500 hover:scale-110 transition text-biruAltera border border-biruAltera lg:h-6 md:h5 md:w-5 h-4 lg:w-6 w-4 rounded flex justify-center items-center "
          >
            <MdModeEdit className=" lg:text-base md:text-sm text-xs" />
          </button>
          <button
            onClick={onClick}
            disabled={disabled}
            className="hover:scale-110 hover:z-30 disabled:text-gray-500 disabled:border-gray-500 transition text-red-700 border border-red-700 lg:h-6 md:h5 md:w-5 h-4 lg:w-6 w-4 rounded flex justify-center items-center "
          >
            <FaTrash className="lg:text-base md:text-sm text-xs" />
          </button>
        </div>
      </div>
    </div>
  );
};

const CardTabelTwo = ({ key, nameClass, mentor, startClass, endClass, no, onClick }) => {
  return (
    <div key={key} className={`grid grid-cols-12 mt-5 mb-1 bg-abuAltera  h-12 rounded-lg hover:z-10 transition hover:scale-105 hover:bg-orangeAltera`} onClick={onClick}>
      <div className=" flex items-center justify-center">
        <p className="text-biruAltera font-Inter font-bold lg:text-base md:text-sm text-xs">{no}</p>
      </div>
      <div className=" col-span-3 flex items-center justify-center">
        <p className="text-biruAltera font-Inter font-bold lg:text-base md:text-sm text-xs">{nameClass}</p>
      </div>
      <div className=" col-span-3 flex items-center justify-center">
        <p className="text-biruAltera font-Inter font-bold lg:text-base md:text-sm text-xs">{mentor}</p>
      </div>
      <div className="lg:col-span-2 md:col-span-2 col-span-3 text-center flex items-center justify-center">
        <p className="text-biruAltera font-Inter font-bold lg:text-base md:text-sm text-xs">{startClass.slice(0, 10)}</p>
      </div>
      <div className="lg:grid md:grid hidden col-span-2 text-center flex items-center justify-center">
        <p className="text-biruAltera font-Inter font-bold lg:text-base md:text-sm text-xs">{endClass.slice(0, 10)}</p>
      </div>

      <div className=" text-center flex items-center justify-center w-full col-span-2 lg:col-span-1 md:col-span-1 ">
        <div className="flex justify-around w-full">
          <button className="disabled:text-gray-500 disabled:border-gray-500 hover:scale-110 transition text-biruAltera border border-biruAltera lg:h-6 md:h5 md:w-5 h-4 lg:w-6 w-4 rounded flex justify-center items-center">
            <MdModeEdit />
          </button>
          <button className="hover:scale-110 hover:z-30 disabled:text-gray-500 disabled:border-gray-500 transition text-red-700 border border-red-700 lg:h-6 md:h5 md:w-5 h-4 lg:w-6 w-4 rounded flex justify-center items-center ">
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
};

const CardTabelThree = ({ name, kelas, category, gender, status, no, key, disabled, onClick, onDetail }) => {
  return (
    <div key={key} onClick={onDetail} className={`grid grid-cols-12 mt-5 mb-1 bg-abuAltera h-12 rounded-lg hover:z-10 transition hover:scale-105 hover:bg-orangeAltera`}>
      <div className=" flex items-center justify-center">
        <p className="text-biruAltera font-Inter font-bold lg:text-base md:text-sm text-xs">{no}</p>
      </div>
      <div className=" col-span-3 flex items-center justify-center">
        <p className="text-biru Altera font-Inter font-bold lg:text-base md:text-sm text-xs">{name}</p>
      </div>
      <div className="md:col-span-3 lg:col-span-3 col-span-2 flex items-center justify-center">
        <p className=" text-biruAltera font-Inter font-bold lg:text-base md:text-sm text-xs">{kelas}</p>
      </div>
      <div className="col-span-2 text-center flex items-center justify-center">
        <p className="text-biruAltera font-Inter font-bold lg:text-base md:text-sm text-xs">{category}</p>
      </div>
      <div className="text-center lg:grid md:grid hidden col-span-1   flex items-center justify-center">
        <p className="text-biruAltera font-Inter font-bold lg:text-base md:text-sm text-xs">{gender}</p>
      </div>
      <div className="text-center flex lg:col-span-1 md:col-span-1 col-span-2  items-center justify-center">
        <div className={` rounded-lg w-20 h-5 px-1 flex justify-center items-center`}>
          <p className={`text-bg-biruAltera  font-Inter font-bold lg:text-base md:text-sm text-xs`}>{status}</p>
        </div>
      </div>
      <div className=" text-center flex lg:col-span-1 md:col-span-1 col-span-2  items-center justify-center w-full ">
        <div className="flex justify-around w-full">
          <button
            disabled={disabled}
            className="disabled:text-gray-500 disabled:border-gray-500 hover:scale-110 transition text-biruAltera border border-biruAltera lg:h-6 md:h5 md:w-5 h-4 lg:w-6 w-4 rounded flex justify-center items-center "
          >
            <MdModeEdit className=" lg:text-base md:text-sm text-xs" />
          </button>
          <button
            onClick={onClick}
            disabled={disabled}
            className="hover:scale-110 hover:z-30 disabled:text-gray-500 disabled:border-gray-500 transition text-red-700 border border-red-700 lg:h-6 md:h5 md:w-5 h-4 lg:w-6 w-4 rounded flex justify-center items-center "
          >
            <FaTrash className="lg:text-base md:text-sm text-xs" />
          </button>
        </div>
      </div>
    </div>
  );
};

export { CardTabel, CardTabelTwo, CardTabelThree };
