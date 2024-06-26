import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("user")) || {
  active: false,
  userData: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.active = true;
      state.userData = action.payload;
    },
    toggleActive: (state, action) => {
      state.active = action.payload;
    },
  },
});

export const { addUser, toggleActive } = userSlice.actions;

export default userSlice.reducer;
