import React from "react";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import { Navbar } from "../components/Navbar";
import { CardTabelThree } from "../components/CardTabel";
import { DropDownTwo, DropDown } from "../components/DropDown";
import { CostumButtonTwo } from "../components/CostumButton";
import { Link } from "react-router-dom";

function MenteList() {
  return (
    <Layout>
      <div className="lg:grid grid-cols-6">
        <div className="lg:grid hidden">
          <Sidebar menteeFontStile={"font-bold"} menteeShadow={"shadow-lg"} />
        </div>
        <div className="col-span-5 bg-abuAltera lg:rounded-r-3xl h-screen overflow-auto">
          <Navbar title={"Mentee List"} />
          <div className="p-5">
            <div className="bg-white rounded-lg shadow-lg">
              <div className="p-3">
                <a href="/add-mentee" className="flex lg:justify-end md:justify-end justify-center">
                  <CostumButtonTwo label={"+ Add New Mentee"} />
                </a>
                <div className="grid lg:grid-cols-4 md:grid-col-4">
                  <div className="flex justify-center items-center">
                    <DropDownTwo name={"Class :"} optionOne={"FE 10"} optionTwo={"BE 13"} />
                  </div>
                  <div className="flex justify-center items-center">
                    <DropDown name={"Status :"} optionOne={"Placement"} optionTwo={"Active"} optionThree={"Eliminate"} />
                  </div>
                  <div className="flex justify-center items-center">
                    <DropDownTwo name={"Category"} optionOne={"Informatic"} optionTwo={"Non-Informatic"} />
                  </div>
                  <div className="flex flex lg:justify-end md:justify-end justify-center justify-end lg:items-end md:items-end items-center">
                    <CostumButtonTwo label={"Filter"} />
                  </div>
                </div>

                {/* Tabel Header */}
                <div className=" grid grid-cols-12 mt-5 mb-1">
                  <div className="text-center">
                    <p className="text-biruAltera font-Inter font-bold lg:text-base md:text-sm text-xs">No</p>
                  </div>
                  <div className="  col-span-3 text-center">
                    <p className="text-biruAltera font-Inter font-bold lg:text-base md:text-sm text-xs">Name</p>
                  </div>
                  <div className="md:col-span-3 lg:col-span-3 col-span-2 text-center bg-blue-100">
                    <p className="text-biruAltera font-Inter font-bold lg:text-base md:text-sm text-xs">Class</p>
                  </div>
                  <div className="col-span-2 text-center">
                    <p className="text-biruAltera font-Inter font-bold lg:text-base md:text-sm text-xs lg:grid md:grid hidden">Category</p>
                    <p className="text-biruAltera font-Inter font-bold lg:text-base md:text-sm text-xs grid lg:hidden md:hidden">Cat</p>
                  </div>
                  <div className="text-center lg:grid md:grid hidden">
                    <p className="text-biruAltera font-Inter font-bold lg:text-base md:text-sm text-xs">Gender</p>
                  </div>
                  <div className="text-center lg:col-span-1 md:col-span-1 col-span-2">
                    <p className="text-biruAltera font-Inter font-bold lg:text-base md:text-sm text-xs">Status</p>
                  </div>
                  <div className=" text-center lg:col-span-1 md:col-span-1 col-span-2">
                    <p className="text-biruAltera font-Inter font-bold lg:text-base md:text-sm text-xs">Action</p>
                  </div>
                </div>
                {/* Akhir Tabel Header */}
                <div>
                  <Link to={"/mentee-log"}>
                    <CardTabelThree no={1} name={"Jesica World"} kelas={"Front End 10"} category={"IT"} gender={"Male"} status={"active"} />
                  </Link>
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
