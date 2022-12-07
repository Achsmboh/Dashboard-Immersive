import React from "react";
import { Navbar } from "../components/Navbar";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import { FiHexagon } from "react-icons/fi";
import { CgFileDocument } from "react-icons/cg";
import { VscFeedback } from "react-icons/vsc";

function Dashboard() {
  return (
    <Layout>
      <div className="grid grid-cols-6">
        <div className="grid">
          <Sidebar dashboardFontStyle={"font-bold"} dashboardShadow={"shadow-xl"} />
        </div>
        <div className="grid col-span-5 bg-transparent">
          <div className="bg-abuAltera rounded-r-3xl h-screen overflow-auto">
            <Navbar title={"Dashboard"} name={"John Doe"} />
            <div className=" grid grid-cols-3 p-5">
              <div className="bg-white shadow-2xl rounded-lg h-64 m-2 p-3 hover:z-10 transition hover:scale-110">
                <div className="flex justify-start items-center">
                  <div className="text-biruAltera mx-2">
                    <FiHexagon />
                  </div>
                  <h3 className="font-bold font-Inter text-biruAltera">Mentee Active</h3>
                </div>
                <div className="flex justify-center items-center h-4/5">
                  <h1 className="text-biruAltera font-Inter text-7xl font-bold">10</h1>
                </div>
              </div>
              <div className="bg-white shadow-2xl rounded-lg h-64 m-2 p-3 hover:z-10 transition hover:scale-110">
                <div className="flex justify-start items-center">
                  <div className="text-biruAltera mx-2">
                    <CgFileDocument />
                  </div>
                  <h3 className="font-bold font-Inter text-biruAltera">Mentee Placement</h3>
                </div>
                <div className="flex justify-center items-center h-4/5">
                  <h1 className="text-biruAltera font-Inter text-7xl font-bold">10</h1>
                </div>
              </div>
              <div className="bg-white shadow-2xl rounded-lg h-64 m-2 p-3 hover:z-10 transition hover:scale-110">
                <div className="flex justify-start items-center">
                  <div className="text-biruAltera mx-2">
                    <VscFeedback />
                  </div>
                  <h3 className="font-bold font-Inter text-biruAltera">Mentee Feedback</h3>
                </div>
                <div className="flex justify-center items-center h-4/5">
                  <h1 className="text-biruAltera font-Inter text-7xl font-bold">10</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;
