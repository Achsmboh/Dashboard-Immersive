import React from "react";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import { Navbar } from "../components/Navbar";
import { ModalThree } from "../components/Modal";
import Card from "../components/Card";
import { DropDownThree } from "../components/DropDown";

function MenteeLog() {
  return (
    <Layout>
      {/* Modal Edit Log */}
      <div className="modal" id="my-modal-2">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Edit Log</h3>
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
          <div className="form-control w-full max-w-md">
            <label className="label">
              <span className="label-text  font-Inter text-biruAltera">Feedback :</span>
            </label>
            <textarea className="textarea textarea-bordered h-24 focus:border-biruAltera focus:ring-1 focus:ring-biruAltera focus:outline-none bg-abuAltera" placeholder="Feedback"></textarea>
          </div>

          <div className="grid grid-cols-2  max-w-md w-full mt-3">
            <a href="#" className="btn bg-red-600 normal-case font-Inter border-none mx-1 hover:bg-red-900">
              Cancel
            </a>

            <a href="#" className="btn bg-blue-600 normal-case font-Inter border-none mx-1 hover:bg-biruAltera">
              Change
            </a>
          </div>
        </div>
      </div>
      {/* Akhir Modal Edit Log */}
      <div className="grid grid-cols-4">
        <div>
          <Sidebar menteeFontStile={"font-bold"} menteeShadow={"shadow-lg"} />
        </div>
        <div className="col-span-3 bg-abuAltera rounded-r-3xl overflow-auto h-screen">
          <Navbar name={"John Doe"} title={"Mentee Log"} />
          <div className="p-5 w-full">
            <div className="grid grid-cols-2">
              <div>
                <div className="mr-1 p-3">
                  <div>
                    <p className="font-Inter text-biruAltera">
                      <span className="text-2xl  font-bold">Hendra Kurnia</span> (-Hendra-)
                    </p>
                  </div>
                  <div>
                    <p className="font-Inter  text-biruAltera">Front End Enginer</p>
                  </div>
                  <div>
                    <p className="font-Inter font-semibold text-biruAltera">IPA</p>
                  </div>
                  <div>
                    <p className="font-Inter font-semibold text-biruAltera">SMA N 1 New York</p>
                  </div>
                </div>
              </div>
              <div className="flex items-end">
                <div className="mr-1 p-3 text-left ">
                  <div>
                    <p className="font-Inter font-semibold text-biruAltera">Phone : 0834223232</p>
                  </div>
                  <div>
                    <p className="font-Inter font-semibold text-biruAltera">Telegram : @hendra</p>
                  </div>
                  <div>
                    <p className="font-Inter font-semibold text-biruAltera">DIscord : @henr_</p>
                  </div>
                  <div>
                    <p className="font-Inter font-semibold text-biruAltera">Email :hendra@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <ModalThree />
            </div>
            <div className="w-full  mt-5 flex flex-col items-end ">
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default MenteeLog;
