import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  token: null,
  email: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateAuthSlice: (state, action) => {
      state.email = action.payload.email;
      state.id = action.payload.uid;
      state.token = action.payload.access_token;
    },
    emptyAuthSlice: (state, action) => {
      state.email = null;
      state.id = null;
      state.token = null;
    },
  },
});

{
  /** https://www.softkraft.co/how-to-setup-slices-with-redux-toolkit/ */
}

export const { updateAuthSlice, emptyAuthSlice } = authSlice.actions;
export default authSlice.reducer;
