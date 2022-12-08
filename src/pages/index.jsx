import "../styles/App.css";
import Layout from "../components/Layout";
import fotoLogin from "../assets/login.png";
import Input from "../components/Input";
import { CostumButton } from "../components/CostumButton";

import Swal from "sweetalert2";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [cookies, setCookies] = useCookies();

  const navigate = useNavigate();

  useEffect(() => {
    if (email && password) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [email, password]);

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    const body = {
      email,
      password,
    };

    axios
      .post(`http://54.89.143.211:8080/login`, body)
      .then((ress) => {
        const { data, message } = ress.data;
        console.log("data", data);
        const token = data.Token;
        const email = data.Email;
        const role = data.Role;

        setCookies("token", token, { path: "/" });
        setCookies("email", email, { path: "/" });
        setCookies("role", role, { path: "/" });
        Swal.fire({
          position: "center",
          icon: "success",
          title: message,
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/dashboard");
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
  };

  return (
    <Layout>
      <div className="w-full h-full flex justify-center items-center">
        <div className="bg-abuAltera w-11/12 lg:h-5/6 md:h-5/6 rounded-3xl grid lg:grid-cols-2 ">
          <div className="rounded-l-3xl">
            <div className="grid lg:grid-rows-6 md:grid-rows-6 h-full">
              <div className="mt-5 ml-5 z-10">
                <img src="https://academy.alterra.id/wp-content/uploads/2022/06/Logo-Colour-Transparant-1.png" alt="logo altera" className="lg:w-28 md:w-28 w-20" />
              </div>
              <div className="grid row-span-5 w-full h-full ">
                <div className="w-full h-full flex flex-col justify-center items-center">
                  <img src={fotoLogin} alt="vektor login" className="lg:w-2/3 w-2/4" />
                  <h1 className="font-Inter text-biruAltera font-bold lg:text-5xl md:text-3xl text-2xl text-center my-5">Login</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white lg:rounded-r-3xl md:rounded-r-3xl flex justify-center items-center lg:rounded-br-3xl lg:rounded-bl-none rounded-b-3xl   md:p-3">
            <form className="flex flex-col w-full items-center font-Inter" onSubmit={(e) => handleSubmit(e)}>
              <h2 className="lg:text-3xl font-bold lg:text-left md:text-left text-center mt-3 lg:w-2/3  text-biruAltera md:text-2xl">Welcome Back!</h2>
              <Input placeholder={"Your email"} label={"Email :"} type={"text"} onChange={(e) => setEmail(e.target.value)} />
              <Input placeholder={"Your Password"} label={"Password"} type={"password"} onChange={(e) => setPassword(e.target.value)} />
              <div className={"w-full flex justify-center mb-5"}>
                <CostumButton type={"submit"} label={"Sign in"} loading={loading || disabled} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Login;
