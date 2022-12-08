import React from "react";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import { Navbar } from "../components/Navbar";
import { ModalThree } from "../components/Modal";
import Card from "../components/Card";

import axios from "axios";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import Swal from "sweetalert2";
import { useLocation } from "react-router-dom";

function MenteeLog() {
  const location = useLocation();
  const id = location?.state?.id;

  console.log(id);

  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const cookie = useCookies();

  useEffect(() => {
    getDetailMentee();
  }, []);

  function getDetailMentee() {
    setLoading(true);
    axios
      .get(`http://54.89.143.211:8080/mentees/${id}`, { headers: { Authorization: `Bearer ${cookie[0].token}` } })
      .then((ress) => {
        const result = ress.data.data;
        setData(result);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }
  console.log("data", data);

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
                      <span className="text-2xl  font-bold">{data?.name}</span> (-{data?.nickname}-)
                    </p>
                  </div>
                  <div>
                    <p className="font-Inter  text-biruAltera">{data?.class_name}</p>
                  </div>
                  <div>
                    <p className="font-Inter font-semibold text-biruAltera">{data?.education_major}</p>
                  </div>
                  <div>
                    <p className="font-Inter font-semibold text-biruAltera">{data?.institution}</p>
                  </div>
                </div>
              </div>
              <div className="flex items-end">
                <div className="mr-1 p-3 text-left ">
                  <div>
                    <p className="font-Inter font-semibold text-biruAltera">Phone : {data?.phone_number}</p>
                  </div>
                  <div>
                    <p className="font-Inter font-semibold text-biruAltera">Telegram : {data?.telegram_account}</p>
                  </div>
                  <div>
                    <p className="font-Inter font-semibold text-biruAltera">DIscord : {data?.discord_account}</p>
                  </div>
                  <div>
                    <p className="font-Inter font-semibold text-biruAltera">Email : {data?.email}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <ModalThree />
            </div>
            <div className="w-full  mt-5 flex flex-col items-end ">
              {/* {data.logs !== null ? (
                data.logs.map((item) => <Card log={item.Log} Mentor={item.user_name} status={item.status} />)
              ) : (
                <div>
                  <h1>Tidak ada Log</h1>
                </div>
              )} */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default MenteeLog;
