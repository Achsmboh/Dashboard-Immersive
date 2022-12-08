import React from "react";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import { Navbar } from "../components/Navbar";
import { CardTabelTwo } from "../components/CardTabel";
import { ModalTwo } from "../components/Modal";
import Input from "../components/Input";
import axios from "axios";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

function ClassList() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const cookie = useCookies();

  const [name, setClasses] = useState("");
  const [user_id, setMentor] = useState();
  const [start_date, setStart] = useState("");
  const [graduate_date, setEnd] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getAllClass();
  }, []);

  function getAllClass() {
    setLoading(true);

    axios
      .get("http://54.89.143.211:8080/classes", {
        headers: { Authorization: `Bearer ${cookie[0].token}` },
      })
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

  function addClass() {
    setLoading(true);
    const body = {
      name,
      user_id,
      start_date,
      graduate_date,
    };
    console.log("klik");

    axios
      .post("http://54.89.143.211:8080/classes", body, { headers: { Authorization: `Bearer ${cookie[0].token}` } })
      .then((ress) => {
        const { message } = ress.data;
        Swal.fire({
          position: "center",
          icon: "success",
          title: message,
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/user-list");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err,
        });
      })
      .finally(() => setLoading(false));
  }

  console.log(name);
  return (
    <Layout>
      <div className="lg:grid grid-cols-6">
        <div className="lg:grid hidden">
          <Sidebar classShadow={"shadow-lg"} classFontStyle={"font-bold"} />
        </div>
        <div className="grid col-span-5">
          <div className="bg-abuAltera h-screen overflow-auto lg:rounded-r-3xl">
            <Navbar title={"Class List"} />
            <div className=" p-5">
              <div className="bg-white rounded-lg shadow-lg">
                <div className="p-3">
                  <div className="flex lg:justify-end md:justify-end justify-center">
                    <ModalTwo
                      onClick={() => addClass()}
                      input1={<Input onChange={(e) => setClasses(e.target.value)} label={"Class Name :"} placeholder={"Back End Enginer Batch 10"} type={"text"} />}
                      input2={<Input onChange={(e) => setMentor(e.target.value)} label={"Mentor :"} placeholder={"name"} type={"number"} />}
                      input3={<Input onChange={(e) => setStart(e.target.value)} label={"Start Date :"} placeholder={"2022-01-25"} type={"text"} />}
                      input4={<Input onChange={(e) => setEnd(e.target.value)} label={"End Date:"} placeholder={"2022-03-30"} type={"text"} />}
                    />
                  </div>
                  {/* Tabel Header */}
                  <div className=" grid grid-cols-12 mt-5 mb-1">
                    <div className="text-center">
                      <p className="text-biruAltera font-Inter font-bold lg:text-base md:text-sm text-xs">No</p>
                    </div>
                    <div className=" col-span-3 text-center">
                      <p className="text-biruAltera font-Inter font-bold lg:text-base md:text-sm text-xs">Name Class</p>
                    </div>
                    <div className=" col-span-3 text-center">
                      <p className="text-biruAltera font-Inter font-bold lg:text-base md:text-sm text-xs">Mentor</p>
                    </div>
                    <div className="lg:col-span-2 md:col-span-2 col-span-3 text-center">
                      <p className="text-biruAltera font-Inter font-bold lg:text-base md:text-sm text-xs ">Start Class</p>
                    </div>
                    <div className="text-center col-span-2 lg:grid md:grid hidden">
                      <p className="text-biruAltera font-Inter font-bold lg:text-base md:text-sm text-xs">End CLass</p>
                    </div>

                    <div className=" text-center lg:col-span-1 md:col-span-1 col-span-2">
                      <p className="text-biruAltera font-Inter font-bold lg:text-base md:text-sm text-xs">Action</p>
                    </div>
                  </div>
                  <div>
                    {data?.map((item) => (
                      <CardTabelTwo key={item.id} no={data.map((datum) => datum.name).indexOf(item.name) + 1} nameClass={item.name} mentor={item.PIC} startClass={item.start_date} endClass={item.graduate_date} />
                    ))}
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
