import React from "react";
import Input from "./Input";
import { DropDownThree, DropDown } from "./DropDown";
import { MdModeEdit } from "react-icons/md";

const Modal = ({ title, inputOne, inputTwo, inputThree, inputFour, inputFive, disabled, onClick }) => {
  return (
    <>
      <label htmlFor={`my-modal-6`} disabled={disabled} className={` btn  normal-case bg-blue-600 hover:bg-biruAltera`}>
        + {title}
      </label>

      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-middle sm:modal-middle">
        <div className="modal-box  flex flex-col justify-center items-center">
          <h3 className="font-bold lg:text-2xl  text-base text-biruAltera text-center font-Inter ">{title}</h3>
          {inputOne}
          {inputTwo}
          {inputThree}
          {inputFour}
          {inputFive}

          <div className="grid grid-cols-2 w-2/3 md:w-full lg:w-full max-w-md mt-3">
            <label htmlFor="my-modal-6" className="btn bg-red-600 normal-case font-Inter border-none mx-1 hover:bg-red-900">
              Cancel
            </label>

            <label htmlFor="my-modal-6" onClick={onClick} className="disabled:bg-white btn bg-blue-600 normal-case font-Inter border-none mx-1 hover:bg-biruAltera">
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

const ModalThree = () => {
  return (
    <>
      {/* The button to open modal */}
      <label htmlFor="my-modal-5" className="btn normal-case bg-blue-600 hover:bg-biruAltera">
        + Add New Log
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Add New Log</h3>
          <DropDownThree
            name={"Status"}
            option1={"Interview"}
            option2={"Join class"}
            option3={"Unit 1"}
            option4={"Unit 2"}
            option5={"Unit 3"}
            option6={"Repeat unit 1"}
            option7={"Repeat unit 2"}
            option8={"Repeat unit 3"}
            option9={"Placement"}
            option10={"Eliminated"}
            option11={"Graduated"}
          />
          <div>
            {/* Input */}

            <div className="form-control w-full max-w-md">
              <label className="label">
                <span className="label-text  font-Inter text-biruAltera">Feedback :</span>
              </label>
              <textarea className="textarea textarea-bordered h-24 focus:border-biruAltera focus:ring-1 focus:ring-biruAltera focus:outline-none bg-abuAltera" placeholder="Feedback"></textarea>
            </div>
            {/* Input sampai sini */}
          </div>

          <div className="grid grid-cols-2  max-w-md w-full mt-3">
            <label htmlFor="my-modal-5" className="btn bg-red-600 normal-case font-Inter border-none mx-1 hover:bg-red-900">
              Cancel
            </label>

            <label htmlFor="my-modal-5" className="btn bg-blue-600 normal-case font-Inter border-none mx-1 hover:bg-biruAltera">
              Add
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

const ModalFour = () => {
  return (
    <div>
      <a href="#my-modal-2" className="hover:scale-110 transition text-biruAltera border border-biruAltera h-6 w-6 rounded flex justify-center items-center mx-3">
        <MdModeEdit />
      </a>
    </div>
  );
};

export { Modal, ModalTwo, ModalThree, ModalFour };
