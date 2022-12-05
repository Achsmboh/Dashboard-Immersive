import "../styles/App.css";
import Layout from "../components/Layout";
import Sidebar from "../components/Sidebar";

function App() {
  return (
    <Layout>
      <div className="h-full">
        <div className="grid grid-cols-4">
          <Sidebar />

          <div className="bg-red-400 grid col-span-3">3</div>
        </div>
      </div>
    </Layout>
  );
}

export default App;
