import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/index.jsx";
import Dashboard from "../pages/Dashboard.jsx";
import UserList from "../pages/UserList.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/user-list" element={<UserList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
