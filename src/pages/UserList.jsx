import React from "react";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import { Navbar } from "../components/Navbar";
import { CardTabel } from "../components/CardTabel";
import { Modal } from "../components/Modal";
import Input from "../components/Input";
import { DropDownTwo } from "../components/DropDown";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import { useState, useEffect } from "react";
import { useCookies } from "react-cookie";

function UserList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const cookie = useCookies();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function getListUser() {
    setLoading(true);
    axios
      .get("http://54.89.143.211:8080/users", { headers: { Authorization: `Bearer ${cookie[0].token}` } })
      .then((ress) => {
        const result = ress.data.data;
        setData(result);
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err,
        });
      })
      .finally(() => {
        setLoading(false);
      });
  }

  useEffect(() => {
    getListUser();
  }, []);

  function addUser(e) {
    setLoading(true);

    const body = {
      name,
      email,
      role,
      password,
    };
    axios
      .post("http://54.89.143.211:8080/users", body, { headers: { Authorization: `Bearer ${cookie[0].token}` } })
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
        getListUser();
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

  function deleteUser(id) {
    setLoading(true);
    axios
      .delete(`http://54.89.143.211:8080/users/${id}`, {
        headers: {
          Authorization: `Bearer ${cookie[0].token}`,
        },
      })
      .then((ress) => {
        const { message } = ress.data;
        Swal.fire({
          position: "center",
          icon: "success",
          title: message,
          showConfirmButton: false,
          timer: 1500,
        });
        getListUser();
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

  return (
    <Layout>
      <div className="lg:grid grid-cols-6">
        <div className="lg:grid hidden">
          <Sidebar userShadow={"shadow-lg"} userFontStyle={"font-bold"} />
        </div>
        <div className="grid col-span-5">
          <div className="bg-abuAltera h-screen overflow-auto lg:rounded-r-3xl">
            <Navbar title={"User List"} name={"John Doe"} />
            <div className=" p-5">
              <div className="bg-white rounded-lg shadow-lg">
                <div className="p-3">
                  <div className="flex justify-end">
                    <Modal
                      onClick={() => addUser()}
                      disabled={cookie[0].role === "Admin" ? false : true}
                      title={"Add New User"}
                      inputOne={<Input onChange={(e) => setName(e.target.value)} label={"Name :"} placeholder={"Name"} type={"text"} />}
                      inputTwo={<Input onChange={(e) => setEmail(e.target.value)} label={"Email :"} placeholder={"name@gmail.com"} type={"email"} />}
                      inputThree={<DropDownTwo onChange={(e) => setRole(e.target.value)} name={"Role :"} optionOne={"User"} optionTwo={"Admin"} />}
                      inputFour={<Input onChange={(e) => setPassword(e.target.value)} label={"Password :"} type={"password"} placeholder={"password"} />}
                    />
                  </div>
                  {/* Tabel Header */}
                  <div className=" grid grid-cols-12 mt-5 mb-1">
                    <div className="text-center">
                      <p className="text-biruAltera font-Inter font-bold lg:text-base md:text-sm text-xs">No</p>
                    </div>
                    <div className=" col-span-3 text-center">
                      <p className="text-biruAltera lg:text-base md:text-sm text-xs font-Inter font-bold">Name</p>
                    </div>
                    <div className=" lg:col-span-3 md:col-span-3 lg:grid md:grid hidden text-center">
                      <p className="text-biruAltera font-Inter font-bold lg:text-base md:text-sm text-xs">Email</p>
                    </div>
                    <div className="col-span-2 text-center">
                      <p className="text-biruAltera font-Inter font-bold lg:text-base md:text-sm text-xs">Team</p>
                    </div>
                    <div className="text-center lg:col-span-1 md:col-span-1 col-span-2 ">
                      <p className="text-biruAltera  font-Inter font-bold lg:text-base md:text-sm text-xs">Role</p>
                    </div>
                    <div className="text-center lg:col-span-1 md:col-span-1 col-span-2">
                      <p className="text-biruAltera font-Inter font-bold lg:text-base md:text-sm text-xs">Status</p>
                    </div>
                    <div className=" text-center lg:col-span-1 md:col-span-1 col-span-2 ">
                      <p className="text-biruAltera font-Inter font-bold lg:text-base md:text-sm text-xs">Action</p>
                    </div>
                  </div>
                  <div>
                    {data.map((item) => (
                      <CardTabel
                        onClick={() => deleteUser(item.id)}
                        no={data.map((datum) => datum.name).indexOf(item.name) + 1}
                        name={item.name}
                        email={item.email}
                        team={item.team}
                        role={item.role}
                        status={item.status}
                        key={item.id}
                        disabled={cookie[0].role === "Admin" ? false : true}
                      />
                    ))}

                    {/* Akhir Tabel Header */}
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

export default UserList;
