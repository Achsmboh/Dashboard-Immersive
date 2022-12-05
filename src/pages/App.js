import "../styles/App.css";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";
import Input from "../components/Input";

function App() {
  return (
    <Layout>
      <div className="h-full">
        <div className="grid grid-cols-4">
          <Sidebar />
          <div className="grid bg-white col-span-3">
            <Input label={"Email"} placeholder={"your"} />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default App;
