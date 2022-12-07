import React from "react";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import { Navbar } from "../components/Navbar";
import { CardTabelTwo } from "../components/CardTabel";
import { ModalTwo } from "../components/Modal";

function ClassList() {
  return (
    <Layout>
      <div className="grid grid-cols-6">
        <div>
          <Sidebar classShadow={"shadow-lg"} classFontStyle={"font-bold"} />
        </div>
        <div className="grid col-span-5">
          <div className="bg-abuAltera h-screen overflow-auto rounded-r-3xl">
            <Navbar title={"Class List"} name={"John Doe"} />
            <div className=" p-5">
              <div className="bg-white rounded-lg shadow-lg">
                <div className="p-3">
                  <div className="flex justify-end">
                    <ModalTwo />
                  </div>
                  {/* Tabel Header */}
                  <div className=" grid grid-cols-12 mt-5 mb-1">
                    <div className="text-center">
                      <p className="text-biruAltera font-Inter font-bold">No</p>
                    </div>
                    <div className=" col-span-3 text-center">
                      <p className="text-biruAltera font-Inter font-bold">Name Class</p>
                    </div>
                    <div className=" col-span-3 text-center">
                      <p className="text-biruAltera font-Inter font-bold">Mentor</p>
                    </div>
                    <div className="col-span-2 text-center">
                      <p className="text-biruAltera font-Inter font-bold">Start Class</p>
                    </div>
                    <div className="text-center col-span-2">
                      <p className="text-biruAltera font-Inter font-bold">End CLass</p>
                    </div>

                    <div className=" text-center">
                      <p className="text-biruAltera font-Inter font-bold">Action</p>
                    </div>
                  </div>
                  <div>
                    <CardTabelTwo no={1} nameClass={"Front End Enginer Batch 10"} mentor={"Mas Bagas"} startClass={"2022-10-24"} endClass={"2022-12-31"} />
                    <CardTabelTwo no={1} nameClass={"Back End Enginer Batch 13"} mentor={"Mas Fachkri"} startClass={"2022-10-24"} endClass={"2022-12-31"} />
                  </div>
                  {/* Akhir Tabel Header */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ClassList;
