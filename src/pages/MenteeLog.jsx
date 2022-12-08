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
      <div className="lg:grid grid-cols-6">
        <div className="lg:grid hidden">
          <Sidebar menteeFontStile={"font-bold"} menteeShadow={"shadow-lg"} />
        </div>
        <div className="col-span-5 bg-abuAltera lg:rounded-r-3xl md:rounded-r-3xl overflow-auto h-screen">
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
