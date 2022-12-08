import React from "react";
import { MdModeEdit } from "react-icons/md";
import { ModalFour } from "./Modal";

const Card = ({ log, Mentor, status }) => {
  return (
    <div className="bg-white card shadow-lg w-11/12 p-5 my-4 hover:z-10 transition hover:scale-100">
      <div className="grid grid-cols-4">
        <div className="flex flex-col justify-start">
          <div>
            <p className="text-biruAltera font-Inter font-bold">{status}</p>
          </div>
          <div>
            <p className="text-biruAltera font-Inter font-bold">{Mentor}</p>
          </div>
          <div className="text-biruAltera font-Inter ">2022-12-12</div>
        </div>
        <div className="col-span-3">
          <div>
            <p className="text-biruAltera font-Inter ">{log}</p>
          </div>
          <div className="mt-2 flex">
            <p className="text-biruAltera font-Inter font-bold">Change Status : {status}</p>
            <div>
              <ModalFour />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
