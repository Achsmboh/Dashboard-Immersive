import React from "react";
import Layout from "../components/Layout";
import Input from "../components/Input";
import { DropDown, DropDownTwo } from "../components/DropDown";
import Sidebar from "../components/Sidebar";
import { Navbar } from "../components/Navbar";

function AddMentee() {
  return (
    <Layout>
      <div className="grid grid-cols-6">
        <div>
          <Sidebar menteeFontStile={"font-bold"} menteeShadow={"shadow-lg"} />
        </div>
        <div className="col-span-5 bg-abuAltera rounded-r-3xl h-screen overflow-auto">
          <Navbar title={"Add New Mentee"} name={"John Doe"} />
          <div className="p-5">
            <div className="bg-white rounded-3xl shadow-lg p-3">
              <div className="grid grid-cols-2">
                <div className="flex justify-center">
                  <Input label={"Full Name :"} type={"text"} placeholder="Mentee Name" w={"w-md"} />
                </div>
              </div>

              <div className="grid grid-cols-2">
                <div className="flex justify-center">
                  <Input label={"Nick Name :"} type={"text"} placeholder="Mentee Nick Name" w={"w-md"} />
                </div>
                <div className="flex justify-center">
                  <Input label={"Email :"} type={"email"} w={"w-md"} />
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div className="flex justify-center">
                  <Input label={"Phone Number :"} placeholder={"+62.."} w={"w-md"} />
                </div>
                <div className="flex justify-center">
                  <DropDownTwo name={"Gender :"} optionOne={"Male"} optionTwo={"Female"} />
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div className="flex justify-center">
                  <Input label={"Telegram :"} type={"text"} w={"w-md"} />
                </div>
                <div className="flex justify-center">
                  <Input label={"Discord :"} type={"text"} w={"w-md"} />
                </div>
              </div>
              <div className="flex justify-center px-9">
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text  font-Inter text-biruAltera">Address According the ID Card :</span>
                  </label>
                  <textarea className="textarea textarea-bordered h-24 focus:border-biruAltera focus:ring-1 focus:ring-biruAltera focus:outline-none bg-abuAltera"></textarea>
                </div>
              </div>
              <div className="flex justify-center px-9">
                <div className="form-control w-full ">
                  <label className="label">
                    <span className="label-text  font-Inter text-biruAltera">Domicile Address :</span>
                  </label>
                  <textarea className="textarea textarea-bordered h-24 focus:border-biruAltera focus:ring-1 focus:ring-biruAltera focus:outline-none bg-abuAltera"></textarea>
                </div>
              </div>
              {/* Emegency Data */}
              <div className="pl-9 pt-5">
                <h3 className="font-bold font-Inter text-biruAltera">Emergency Data</h3>
              </div>
              <div className="grid grid-cols-2">
                <div className="flex justify-center">
                  <Input label={"Name :"} type={"text"} placeholder="Name" w={"w-md"} />
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div className="flex justify-center">
                  <Input label={"Status :"} type={"text"} placeholder="Parent" w={"w-md"} />
                </div>
                <div className="flex justify-center">
                  <Input label={"Phone Number :"} type={"number"} placeholder={"+62"} w={"w-md"} />
                </div>
              </div>
              <div className="pl-9 pt-5">
                <h3 className="font-bold font-Inter text-biruAltera">Education Data</h3>
              </div>
              <div className="grid grid-cols-2">
                <div className="flex justify-center">
                  <DropDownTwo name={"Type :"} optionOne={"IT"} optionTwo={"Non-IT"} />
                </div>
                <div className="flex justify-center">
                  <Input label={"Major :"} type={"text"} placeholder="IPA" w={"w-md"} />
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div className="flex justify-center">
                  <Input label={"Institution :"} type={"text"} placeholder="SMA N New York" w={"w-md"} />
                </div>
                <div className="flex justify-center">
                  <Input label={"Graduate :"} type={"number"} placeholder={"2022"} w={"w-md"} />
                </div>
              </div>
              <div className="grid grid-cols-2 mt-5">
                <div className="flex justify-center"></div>
                <div className="grid grid-cols-2 px-9 ">
                  <a href="mentee-list" className="flex justify-center items-end mr-1">
                    <button className="btn normal-case w-full bg-orangeAltera hover:bg-red-900">Cancel</button>
                  </a>
                  <div className="flex justify-center items-end ml-1">
                    <button className="btn normal-case w-full bg-biruAltera hover:bg-green-900">Add</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AddMentee;
