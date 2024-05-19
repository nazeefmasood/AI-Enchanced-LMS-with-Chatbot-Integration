import baseURL from "../baseUrl";
import bsCourses from "../bs_courses";
import masterDegree from "../master_degree";
import phdCourse from "../phdCoures";
import schoolsName from "../schools";
import universtyList from "../universities";
import collegesList from "../colleges";
import degreeSchemas from "../degreeschema";
import matricProgram from "../matric";
import intermediateCourse from "../intermediate";
const adminUrl = `/admin`;

export const adminApi_handleAdminLogin = async () => {
  try {
    return await baseURL.post(`${adminUrl}/auth`, {
      email: "comsatsadmin@gmail.com",
      password: "Admin@123",
    });
  } catch (error) {}
};
export const adminApi_verifyAdminID = async (data) => {
  try {
    return await baseURL.post(`${adminUrl}/verify_id`, data);
  } catch (error) {}
};

export const adminApi_AddTeacher = async (data) => {
  console.log(
    "🔴 ~ file: admin_api.js:19 ~ constadminApi_AddTeacher= ~ data:",
    data
  );

  try {
    return await baseURL.post(`${adminUrl}/add_teacher`, data);
  } catch (error) {}
};

export const addUniverstyList = async () => {
  try {
    return await baseURL.post(`${adminUrl}/add_universty`, intermediateCourse);
  } catch (error) {
    return error;
  }
};
export const getUniverstyAndProgramsList = async () => {
  try {
    return await baseURL.get(`${adminUrl}/universty_programs`);
  } catch (error) {
    return error;
  }
};
