import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminDashboard from "../pages/Admin/AdminDashboard";
import AdminLogin from "../pages/Admin/AdminLogin";
import AllTeachers from "../pages/Admin/Teachers/AllTeachers";
import AddTeacher from "../pages/Admin/Teachers/AddTeacher";
import AdminLayout from "../Layout/AdminLayout";
import AdminAuth from "../components/Auth/AdminAuth";
import AddNewStudent from "../pages/Admin/Students/AddNewStudent";
import AddNewDegreeSchema from "../pages/Admin/DegreeSchema/AddNewDegreeSchema";
import AddNewCourse from "../pages/Admin/Courses/AddNewCourse";
import AllStudents from "../pages/Admin/Students/AllStudents";
import AllCourses from "../pages/Admin/Courses/AllCourses";
import AllDegreeSchemas from "../pages/Admin/DegreeSchema/AllDegreeSchemas";
function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AdminAuth />}>
        <Route path="login" element={<AdminLogin />} />
        <Route path="/" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />

          <Route path="teachers" element={<AllTeachers />} />
          <Route path="add-teacher" element={<AddTeacher />} />

          <Route path="students" element={<AllStudents />} />
          <Route path="add-student" element={<AddNewStudent />} />

          <Route path="degree-schemas" element={<AllDegreeSchemas />} />
          <Route path="add-schema" element={<AddNewDegreeSchema />} />

          <Route path="courses" element={<AllCourses />} />
          <Route path="add-course" element={<AddNewCourse />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default AdminRoutes;
