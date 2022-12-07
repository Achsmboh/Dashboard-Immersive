import React from "react";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import { Navbar } from "../components/Navbar";
import { CardTabel } from "../components/CardTabel";
import { Modal } from "../components/Modal";
import Input from "../components/Input";
import { DropDownTwo } from "../components/DropDown";

function UserList() {
  return (
    <Layout>
      <div className="grid grid-cols-6">
        <div>
          <Sidebar userShadow={"shadow-lg"} userFontStyle={"font-bold"} />
        </div>
        <div className="grid col-span-5">
          <div className="bg-abuAltera h-screen overflow-auto rounded-r-3xl">
            <Navbar title={"User List"} name={"John Doe"} />
            <div className=" p-5">
              <div className="bg-white rounded-lg shadow-lg">
                <div className="p-3">
                  <div className="flex justify-end">
                    <Modal
                      title={"Add New User"}
                      inputOne={<Input label={"Name :"} placeholder={"Name"} type={"text"} />}
                      inputTwo={<Input label={"Email :"} placeholder={"name@gmail.com"} type={"email"} />}
                      inputThree={<DropDownTwo name={"Role :"} optionOne={"User"} optionTwo={"Admin"} />}
                      inputFour={<Input label={"Password :"} type={"password"} placeholder={"password"} />}
                    />
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
                      <p className="text-biruAltera font-Inter font-bold">Email</p>
                    </div>
                    <div className="col-span-2 text-center">
                      <p className="text-biruAltera font-Inter font-bold">Team</p>
                    </div>
                    <div className="text-center">
                      <p className="text-biruAltera font-Inter font-bold">Role</p>
                    </div>
                    <div className="text-center">
                      <p className="text-biruAltera font-Inter font-bold">Status</p>
                    </div>
                    <div className=" text-center">
                      <p className="text-biruAltera font-Inter font-bold">Action</p>
                    </div>
                  </div>
                  <div>
                    <CardTabel no={1} name={"Jesica World"} email={"jessicaworld@gmail.com"} team={"Akademic"} role={"user"} status={"active"} />
                    <CardTabel no={2} name={"Michael Jordan"} email={"michaeljordan@gmail.com"} team={"Placement"} role={"user"} status={"active"} />
                    <CardTabel no={3} name={"Jesica World"} email={"jessicaworld@gmail.com"} team={"Akademic"} role={"user"} status={"active"} />
                    <CardTabel no={4} name={"Jesica World"} email={"jessicaworld@gmail.com"} team={"Akademic"} role={"user"} status={"active"} />
                    <CardTabel no={5} name={"Jesica World"} email={"jessicaworld@gmail.com"} team={"Akademic"} role={"user"} status={"active"} />
                    <CardTabel no={6} name={"Jesica World"} email={"jessicaworld@gmail.com"} team={"Akademic"} role={"user"} status={"active"} />
                    <CardTabel no={7} name={"Jesica World"} email={"jessicaworld@gmail.com"} team={"Akademic"} role={"user"} status={"active"} />
                    <CardTabel no={8} name={"Jesica World"} email={"jessicaworld@gmail.com"} team={"Akademic"} role={"user"} status={"active"} />
                    <CardTabel no={9} name={"Jesica World"} email={"jessicaworld@gmail.com"} team={"Akademic"} role={"user"} status={"active"} />
                    <CardTabel no={10} name={"Jesica World"} email={"jessicaworld@gmail.com"} team={"Akademic"} role={"user"} status={"active"} />

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
