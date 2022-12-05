import React from "react";
import { Navbar } from "../components/Navbar";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  return (
    <Layout>
      <div className="grid grid-cols-4">
        <div className="grid">
          <Sidebar dashboardFontStyle={"font-bold"} dashboardShadow={"shadow-xl"} />
        </div>
        <div className="grid col-span-3 bg-transparent">
          <div className="bg-abuAltera rounded-r-3xl">
            <Navbar title={"Dashboard"} name={"John Doe"} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;
