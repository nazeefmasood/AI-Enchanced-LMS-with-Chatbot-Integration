import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AdminLogin from "./pages/AdminLogin";
import StudentLogin from "./pages/StudentLogin";
import TeacherLogin from "./pages/TeacherLogin";
import AdminLayout from "./Layout/AdminLayout";
import AllTeachers from "./pages/AllTeachers";
import AdminDashboard from "./pages/AdminDashboard";
import AddTeacher from "./pages/AddTeacher";
import { adminApi_handleAdminLogin } from "./api/paths/admin_api";
function App() {
  adminApi_handleAdminLogin();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="teachers" element={<AllTeachers />} />
          <Route path="add-teacher" element={<AddTeacher />} />
        </Route>
        <Route path="/student" element={<StudentLogin />} />
        <Route path="/teacher" element={<TeacherLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
