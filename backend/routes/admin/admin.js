import express from "express";
import {
  addTeacherToFirebase,
  addUnivertyListController,
  getALLTeacherBackend,
  getUnivertyAndProgramsController,
} from "../../controllers/admin/teacherController.js";
import {
  addUnivertyStudentController,
  getAllStudentsController,
  getUnivertyAndProgramsStudentController,
} from "../../controllers/admin/studentController.js";
import { uploadTempBackend } from "../../controllers/admin/tempController.js";
import { getDepartmentsController } from "../../controllers/admin/departmentController.js";
import { getDegreeSchemaController } from "../../controllers/admin/degreeSchemaController.js";
import {
  addCourseDataController,
  getAllCourses,
  getCourseInitialDataController,
  getCoursesByDepartmentController,
} from "../../controllers/admin/coursesController.js";
import {
  addProgramDataController,
  getProgramDataController,
} from "../../controllers/admin/programController.js";
import {
  addClassDataController,
  getALLClassesController,
  getAllStudentsClassController,
} from "../../controllers/admin/classesController.js";

const adminRoutes = express.Router();
/** Students */
adminRoutes.get("/add-student", getUnivertyAndProgramsStudentController);
adminRoutes.post("/add-student", addUnivertyStudentController);
adminRoutes.get("/students", getAllStudentsController);

/** Classes */
adminRoutes.get("/add-class", getAllStudentsClassController);
adminRoutes.post("/add-class", addClassDataController);
adminRoutes.get("/classes", getALLClassesController);

/** Add Data For New Program Form*/
adminRoutes.post("/add-program", addProgramDataController);
adminRoutes.get("/programs", getProgramDataController);

adminRoutes.post("/add_teacher", addTeacherToFirebase);
/** Get All Teachers*/
adminRoutes.get("/teachers", getALLTeacherBackend);
adminRoutes.post("/add_universty", addUnivertyListController);

/** Get Data For Teacher Form */
adminRoutes.get("/universty_programs", getUnivertyAndProgramsController);
adminRoutes.post("/temp", uploadTempBackend);

/** Get All Departments*/
adminRoutes.get("/departments", getDepartmentsController);

/** Get All Degree Schema*/
adminRoutes.get("/degree-schemas", getDegreeSchemaController);

/** Get All Courses*/
adminRoutes.get("/courses", getAllCourses);
adminRoutes.get("/add-course", getCourseInitialDataController);
adminRoutes.post("/add-course", addCourseDataController);

export default adminRoutes;
