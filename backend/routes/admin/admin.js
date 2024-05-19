import express from "express";
import {
  addTeacherToFirebase,
  addUnivertyListController,
  getUnivertyAndProgramsController,
} from "../../controllers/admin/teacherController.js";

const adminRoutes = express.Router();

adminRoutes.post("/add_teacher", addTeacherToFirebase);
adminRoutes.post("/add_universty", addUnivertyListController);
/** Get Data For Teacher Form */
adminRoutes.get("/universty_programs", getUnivertyAndProgramsController);
export default adminRoutes;
