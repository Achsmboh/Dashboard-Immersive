import React from "react";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import { Navbar } from "../components/Navbar";
import { CardTabel } from "../components/CardTabel";
import { Modal } from "../components/Modal";
import Input from "../components/Input";
import { DropDownTwo, DropDown } from "../components/DropDown";
import { CostumButtonTwo } from "../components/CostumButton";

function MenteList() {
  return (
    <Layout>
      <div className="grid grid-cols-4">
        <div>
          <Sidebar menteeFontStile={"font-bold"} menteeShadow={"shadow-lg"} />
        </div>
        <div className="col-span-3 bg-abuAltera rounded-r-3xl h-screen overflow-auto">
          <Navbar title={"Mentee List"} name={"John Doe"} />
          <div className="p-5">
            <div className="bg-white rounded-lg shadow-lg">
              <div className="p-3">
                <div className="flex justify-end">
                  <CostumButtonTwo label={"+ Add New Mentee"} />
                </div>
                <div className="grid grid-cols-4">
                  <div className="flex justify-center items-center">
                    <DropDownTwo name={"Class :"} optionOne={"FE 10"} optionTwo={"BE 13"} />
                  </div>
                  <div className="flex justify-center items-center">
                    <DropDown name={"Status :"} optionOne={"Placement"} optionTwo={"Active"} optionThree={"Eliminate"} />
                  </div>
                  <div className="flex justify-center items-center">
                    <DropDownTwo name={"Category"} optionOne={"Informatic"} optionTwo={"Non-Informatic"} />
                  </div>
                  <div className="flex justify-end items-end">
                    <CostumButtonTwo label={"Filter"} />
                  </div>
                </div>

                {/* Tabel Header */}
                <div className=" grid grid-cols-12 mt-5 mb-1">
                  <div className="text-center">
                    <p className="text-biruAltera font-Inter font-bold">No</p>
                  </div>
                  <div className=" col-span-3 text-center">
                    <p className="text-biruAltera font-Inter font-bold">Name</p>
                  </div>
                  <div className=" col-span-3 text-center">
                    <p className="text-biruAltera font-Inter font-bold">Class</p>
                  </div>
                  <div className="col-span-2 text-center">
                    <p className="text-biruAltera font-Inter font-bold">Category</p>
                  </div>
                  <div className="text-center">
                    <p className="text-biruAltera font-Inter font-bold">Gender</p>
                  </div>
                  <div className="text-center">
                    <p className="text-biruAltera font-Inter font-bold">Status</p>
                  </div>
                  <div className=" text-center">
                    <p className="text-biruAltera font-Inter font-bold">Action</p>
                  </div>
                </div>
                {/* Akhir Tabel Header */}
                <div>
                  <CardTabel no={1} name={"Jesica World"} email={"Front End 10"} team={"IT"} role={"Male"} status={"active"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default MenteList;
