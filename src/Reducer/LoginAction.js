import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
};

export const userSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    userLogin(state, action) {
      // console.log('email', action.payload)
      state.email = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { userLogin } = userSlice.actions;

export default userSlice.reducer;
