import React from "react";
import { MdModeEdit } from "react-icons/md";
import { FaTrash } from "react-icons/fa";

const CardTabel = ({ name, email, team, role, status, no }) => {
  return (
    <div className={`grid grid-cols-12 mt-5 mb-1 bg-abuAltera h-12 rounded-lg hover:z-10 transition hover:scale-105 hover:bg-orangeAltera`}>
      <div className=" flex items-center justify-center">
        <p className="text-biruAltera font-Inter font-bold">{no}</p>
      </div>
      <div className=" col-span-3 flex items-center justify-center">
        <p className="text-biru Altera font-Inter font-bold">{name}</p>
      </div>
      <div className=" col-span-3 flex items-center justify-center">
        <p className="text-biruAltera font-Inter font-bold">{email}</p>
      </div>
      <div className="col-span-2 text-center flex items-center justify-center">
        <p className="text-biruAltera font-Inter font-bold">{team}</p>
      </div>
      <div className="text-center flex items-center justify-center">
        <p className="text-biruAltera font-Inter font-bold">{role}</p>
      </div>
      <div className="text-center flex items-center justify-center">
        <div className="bg-green-200 rounded-lg w-20 h-5 px-1 flex justify-center items-center">
          <p className="text-green-700 font-Inter font-bold">{status}</p>
        </div>
      </div>
      <div className=" text-center flex items-center justify-center w-full ">
        <div className="flex justify-around w-full">
          <button className="hover:scale-110 transition text-biruAltera border border-biruAltera h-6 w-6 rounded flex justify-center items-center">
            <MdModeEdit />
          </button>
          <button className="hover:scale-110 transition text-red-700 border border-red-700 h-6 w-6 rounded flex justify-center items-center">
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
};

const CardTabelTwo = ({ nameClass, mentor, startClass, endClass, no }) => {
  return (
    <div className={`grid grid-cols-12 mt-5 mb-1 bg-abuAltera  h-12 rounded-lg hover:z-10 transition hover:scale-105 hover:bg-orangeAltera`}>
      <div className=" flex items-center justify-center">
        <p className="text-biruAltera font-Inter font-bold">{no}</p>
      </div>
      <div className=" col-span-3 flex items-center justify-center">
        <p className="text-biru Altera font-Inter font-bold">{nameClass}</p>
      </div>
      <div className=" col-span-3 flex items-center justify-center">
        <p className="text-biruAltera font-Inter font-bold">{mentor}</p>
      </div>
      <div className="col-span-2 text-center flex items-center justify-center">
        <p className="text-biruAltera font-Inter font-bold">{startClass}</p>
      </div>
      <div className="col-span-2 text-center flex items-center justify-center">
        <p className="text-biruAltera font-Inter font-bold">{endClass}</p>
      </div>

      <div className=" text-center flex items-center justify-center w-full ">
        <div className="flex justify-around w-full">
          <button className="hover:scale-110 transition text-biruAltera border border-biruAltera h-6 w-6 rounded flex justify-center items-center">
            <MdModeEdit />
          </button>
          <button className="hover:scale-110 transition text-red-700 border border-red-700 h-6 w-6 rounded flex justify-center items-center">
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
};

export { CardTabel, CardTabelTwo };
