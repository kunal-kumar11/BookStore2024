import { createSlice } from "@reduxjs/toolkit";

// Initialize state from localStorage
const initialState = {
  isLoggedIn: !!localStorage.getItem("token"), // Check if a token exists
  role: localStorage.getItem("role") || "user",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.role = "user"; // Reset role on logout
    },
    changeRole(state, action) {
      state.role = action.payload;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
