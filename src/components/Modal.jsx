import React from "react";
import Input from "./Input";

const Modal = ({ title, inputOne, inputTwo, inputThree, inputFour, inputFive }) => {
  return (
    <>
      <label htmlFor={`my-modal-6`} className="btn normal-case bg-blue-600 hover:bg-biruAltera">
        + {title}
      </label>

      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box  flex flex-col justify-center items-center">
          <h3 className="font-bold text-2xl text-biruAltera text-center font-Inter">{title}</h3>
          {inputOne}
          {inputTwo}
          {inputThree}
          {inputFour}
          {inputFive}

          <div className="grid grid-cols-2  max-w-md w-full mt-3">
            <label htmlFor="my-modal-6" className="btn bg-red-600 normal-case font-Inter border-none mx-1 hover:bg-red-900">
              Cancel
            </label>

            <label htmlFor="my-modal-6" className="btn bg-blue-600 normal-case font-Inter border-none mx-1 hover:bg-biruAltera">
              Add
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

const ModalTwo = () => {
  return (
    <>
      <label htmlFor={`my-modal-6`} className="btn normal-case bg-blue-600 hover:bg-biruAltera">
        + Add New Class
      </label>

      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box  flex flex-col justify-center items-center">
          <h3 className="font-bold text-2xl text-biruAltera text-center font-Inter">Add New Class</h3>
          <Input label={"Class Name :"} placeholder={"Back End Enginer Batch 10"} type={"text"} />
          <Input label={"Mentor :"} placeholder={"name"} type={"text"} />
          <Input label={"Start Date :"} placeholder={"2022-01-25"} type={"number"} />
          <Input label={"End Date:"} placeholder={"2022-03-30"} type={"number"} />
          <div className="grid grid-cols-2  max-w-md w-full mt-3">
            <label htmlFor="my-modal-6" className="btn bg-red-600 normal-case font-Inter border-none mx-1 hover:bg-red-900">
              Cancel
            </label>

            <label htmlFor="my-modal-6" className="btn bg-blue-600 normal-case font-Inter border-none mx-1 hover:bg-biruAltera">
              Add
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export { Modal, ModalTwo };
