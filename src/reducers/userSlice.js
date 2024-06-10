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
      const newUser = { active: true, userData: action.payload };
      state = newUser;
    },
    toggleActive: (state, action) => {
      state = { ...state, active: action.payload };
    },
  },
});

export const { addUser, toggleActive } = userSlice.actions;

export default userSlice.reducer;
