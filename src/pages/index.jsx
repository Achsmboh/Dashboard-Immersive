import "../styles/App.css";
import Layout from "../components/Layout";
import fotoLogin from "../assets/login.png";
import Input from "../components/Input";
import CostumButton from "../components/CostumButton";

function Login() {
  return (
    <Layout>
      <div className="w-full h-full flex justify-center items-center">
        <div className="bg-abuAltera w-11/12 h-5/6 rounded-3xl grid grid-cols-2">
          <div className="rounded-l-3xl">
            <div className="grid grid-rows-6 h-full">
              <div className="mt-5 ml-5 z-10">
                <img src="https://academy.alterra.id/wp-content/uploads/2022/06/Logo-Colour-Transparant-1.png" alt="logo altera" width={110} />
              </div>
              <div className="grid row-span-5 w-full h-full ">
                <div className="w-full h-full flex flex-col justify-center items-center">
                  <img src={fotoLogin} alt="vektor login" width={500} />
                  <h1 className="font-Inter text-biruAltera font-bold text-5xl text-center mt-5">Login</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-r-3xl flex justify-center items-center">
            <div className="flex flex-col w-full items-center font-Inter">
              <h2 className="text-3xl font-bold text-left w-2/3 ">Welcome Back!</h2>
              <Input placeholder={"Your email"} label={"Email :"} type={"text"} />
              <Input placeholder={"Your Password"} label={"Password"} type={"password"} />
              <CostumButton />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Login;
