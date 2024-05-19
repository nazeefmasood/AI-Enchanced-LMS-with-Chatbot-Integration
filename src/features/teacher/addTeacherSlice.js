import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  universtyList: [],
  programsList: [],
  degreeList: [],
};

const addTeacherSlice = createSlice({
  name: "add_teacher",
  initialState,
  reducers: {
    updateAddTeacherSlice: (state, action) => {
      state.universtyList = [...action.payload.universtyList];
      state.degreeList = [...action.payload.degreeList];
      state.programsList = [...action.payload.programsList];
    },
    emptyAddTeacherSlice: (state, action) => {
      state.universtyList = [];
      state.programsList = [];
      state.degreeList = [];
    },
  },
});

{
  /** https://www.softkraft.co/how-to-setup-slices-with-redux-toolkit/ */
}

export const { updateAddTeacherSlice, emptyAddTeacherSlice } =
  addTeacherSlice.actions;
export default addTeacherSlice.reducer;
