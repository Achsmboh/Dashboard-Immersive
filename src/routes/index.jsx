import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/index.jsx";
import Dashboard from "../pages/Dashboard.jsx";
import UserList from "../pages/UserList.jsx";
import ClassList from "../pages/ClassList.jsx";
import MenteList from "../pages/MenteList.jsx";
import MenteeLog from "../pages/MenteeLog.jsx";
import EditProfile from "../pages/EditProfile.jsx";
import AddMentee from "../pages/AddMentee.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/user-list" element={<UserList />} />
        <Route path="/class-list" element={<ClassList />} />
        <Route path="/mentee-list" element={<MenteList />} />
        <Route path="/mentee/:id" element={<MenteeLog />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/add-mentee" element={<AddMentee />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
