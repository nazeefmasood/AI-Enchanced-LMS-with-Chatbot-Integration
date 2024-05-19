import { combineSlices, configureStore } from "@reduxjs/toolkit";
import authSlice from "../features/auth/authSlice";
import addTeacherSlice from "../features/teacher/addTeacherSlice";

const reducer = combineSlices({ auth: authSlice, addTeacher: addTeacherSlice });
const store = configureStore({
  reducer: reducer,
});

export default store;
