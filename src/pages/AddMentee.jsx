import React from "react";
import Layout from "../components/Layout";
import Input from "../components/Input";
import { DropDownTwo } from "../components/DropDown";
import Sidebar from "../components/Sidebar";
import { Navbar } from "../components/Navbar";
import Swal from "sweetalert2";

import { useState, useEffect } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

function AddMentee() {
  const navigate = useNavigate();
  const cookie = useCookies();
  const [loading, setLoading] = useState(false);
  const [nama, setName] = useState("");
  const [nicknama, setNickName] = useState("");
  const [gendar, setGender] = useState("");
  const [emaiil, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [telegram, setTelegram] = useState("");
  const [discord, setDiscord] = useState("");
  const class_iid = useState(1);
  const [address, setAddress] = useState("");
  const [home, setHome] = useState("");
  const [statuus, setStatus] = useState("");
  const [eduTipe, setEduTipe] = useState("");
  const [major, setMajor] = useState("");
  const [institusi, setInstitusi] = useState("");
  const [graduatee, setGraduate] = useState("");
  const [emerContact, setEmerContact] = useState("");
  const [emerName, setEmerName] = useState("");
  const [emeStatus, setEmeStatus] = useState("");

  function addMentee() {
    setLoading(true);
    const body = {
      name: nama,
      nickname: nicknama,
      gender: gendar,
      email: emaiil,
      phone_number: phoneNumber,
      telegram_account: telegram,
      discord_account: discord,
      class_id: 1,
      address: address,
      home_address: home,
      status: statuus,
      education_type: eduTipe,
      education_major: major,
      institution: institusi,
      graduate: graduatee,
      emergency_contact: emerContact,
      emergency_contact_name: emerName,
      emergency_contact_status: emeStatus,
    };
    axios
      .post("http://54.89.143.211:8080/mentees", body, { headers: { Authorization: `Bearer ${cookie[0].token}` } })
      .then((ress) => {
        const { message } = ress.data;
        Swal.fire({
          position: "center",
          icon: "success",
          title: message,
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/mentee-list");
      })
      .catch((err) => {
        console.log(err);
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
          <Sidebar menteeFontStile={"font-bold"} menteeShadow={"shadow-lg"} />
        </div>
        <div className="col-span-5 bg-abuAltera lg:rounded-r-3xl md:rounded-r-3xl h-screen overflow-auto">
          <Navbar title={"Add New Mentee"} name={"John Doe"} />
          <div className="p-5">
            <div className="bg-white rounded-3xl shadow-lg p-3">
              <div className="grid lg:grid-cols-2 md:grid-col-2">
                <div className="flex justify-center">
                  <Input onChange={(e) => setName(e.target.value)} label={"Full Name :"} type={"text"} placeholder="Mentee Name" w={"w-md"} />
                </div>
              </div>

              <div className="grid lg:grid-cols-2 md:grid-col-2">
                <div className="flex justify-center">
                  <Input onChange={(e) => setNickName(e.target.value)} label={"Nick Name :"} type={"text"} placeholder="Mentee Nick Name" w={"w-md"} />
                </div>
                <div className="flex justify-center">
                  <Input onChange={(e) => setEmail(e.target.value)} label={"Email :"} type={"email"} w={"w-md"} />
                </div>
              </div>
              <div className="grid lg:grid-cols-2 md:grid-col-2">
                <div className="flex justify-center">
                  <Input type={"text"} onChange={(e) => setPhoneNumber(e.target.value)} label={"Phone Number :"} placeholder={"+62.."} w={"w-md"} />
                </div>
                <div className="flex justify-center">
                  <DropDownTwo onChange={(e) => setGender(e.target.value)} name={"Gender :"} optionOne={"Male"} optionTwo={"Female"} />
                </div>
              </div>
              <div className="grid lg:grid-cols-2 md:grid-col-2">
                <div className="flex justify-center">
                  <Input onChange={(e) => setTelegram(e.target.value)} label={"Telegram :"} type={"text"} w={"w-md"} />
                </div>
                <div className="flex justify-center">
                  <Input onChange={(e) => setDiscord(e.target.value)} label={"Discord :"} type={"text"} w={"w-md"} />
                </div>
              </div>
              <div className="flex justify-center lg:px-6 md:px-6 w-full">
                <div className=" lg:w-11/12 w-full flex justify-center">
                  <div className="form-control w-2/3 lg:w-full   ">
                    <label className="label">
                      <span className="label-text  font-Inter text-biruAltera">Address According the ID Card :</span>
                    </label>
                    <textarea onChange={(e) => setAddress(e.target.value)} className="textarea textarea-bordered h-24 focus:border-biruAltera focus:ring-1 focus:ring-biruAltera focus:outline-none bg-abuAltera"></textarea>
                  </div>
                </div>
              </div>
              <div className="flex justify-center lg:px-6 md:px-6 w-full">
                <div className=" lg:w-11/12 w-full flex justify-center">
                  <div className="form-control w-2/3 lg:w-full   ">
                    <label className="label">
                      <span className="label-text  font-Inter text-biruAltera">Domicile Address :</span>
                    </label>
                    <textarea onChange={(e) => setHome(e.target.value)} className="textarea textarea-bordered h-24 focus:border-biruAltera focus:ring-1 focus:ring-biruAltera focus:outline-none bg-abuAltera"></textarea>
                  </div>
                </div>
              </div>
              {/* Emegency Data */}
              <div className="pl-9 pt-5">
                <h3 className="font-bold font-Inter text-biruAltera">Emergency Data</h3>
              </div>
              <div className="grid lg:grid-cols-2 md:grid-col-2">
                <div className="flex justify-center">
                  <Input onChange={(e) => setEmerName(e.target.value)} label={"Name :"} type={"text"} placeholder="Name" w={"w-md"} />
                </div>
              </div>
              <div className="grid lg:grid-cols-2 md:grid-col-2">
                <div className="flex justify-center">
                  <Input onChange={(e) => setEmeStatus(e.target.value)} label={"Status :"} type={"text"} placeholder="Parent" w={"w-md"} />
                </div>
                <div className="flex justify-center">
                  <Input onChange={(e) => setEmerContact(e.target.value)} label={"Phone Number :"} type={"text"} placeholder={"+62"} w={"w-md"} />
                </div>
              </div>
              <div className="pl-9 pt-5">
                <h3 className="font-bold font-Inter text-biruAltera">Education Data</h3>
              </div>
              <div className="grid lg:grid-cols-2 md:grid-col-2">
                <div className="flex justify-center">
                  <DropDownTwo onChange={(e) => setEduTipe(e.target.value)} name={"Type :"} optionOne={"IT"} optionTwo={"Non-IT"} />
                </div>
                <div className="flex justify-center">
                  <Input onChange={(e) => setMajor(e.target.value)} label={"Major :"} type={"text"} placeholder="IPA" w={"w-md"} />
                </div>
              </div>
              <div className="grid lg:grid-cols-2 md:grid-col-2">
                <div className="flex justify-center">
                  <Input onChange={(e) => setInstitusi(e.target.value)} label={"Institution :"} type={"text"} placeholder="SMA N New York" w={"w-md"} />
                </div>
                <div className="flex justify-center">
                  <Input onChange={(e) => setGraduate(e.target.value)} label={"Graduate :"} type={"text"} placeholder={"2022"} w={"w-md"} />
                </div>
              </div>
              <div className="grid lg:grid-cols-2 md:grid-col-2 mt-5">
                <div className="flex justify-center"></div>
                <div className="grid grid-cols-2 px-9 ">
                  <a href="mentee-list" className="flex justify-center items-end mr-1">
                    <button className="btn normal-case lg:w-2/3 md:w-2/3 w-full bg-orangeAltera hover:bg-red-900">Cancel</button>
                  </a>
                  <div className="flex justify-center items-end ml-1">
                    <button onClick={() => addMentee()} type="submit" className="btn normal-case lg:w-2/3 md:w-2/3 w-full bg-biruAltera hover:bg-green-900">
                      Add
                    </button>
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
