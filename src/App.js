import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AdminRoutes from "./routes/AdminRoutes";
import useAppAuth from "./hooks/useAppAuth";
import { adminApi_handleAdminLogin } from "./api/paths/admin_api";
import { useEffect, useState } from "react";
import StudentLogin from "./pages/Student/StudentLogin";
import TeacherLogin from "./pages/Teacher/TeacherLogin";


function App() {


 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/admin/*" element={<AdminRoutes />} />
        <Route path="/student" element={<StudentLogin />} />
        <Route path="/teacher" element={<TeacherLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
