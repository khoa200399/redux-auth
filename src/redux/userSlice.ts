import { createSlice } from "@reduxjs/toolkit";
import { api } from "./api";
import { RootState } from "./store";

const initialState = {
  currentUser: null,
  errorMsg: ''
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
        state.currentUser = null;
        state.errorMsg = '';
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(api.endpoints.login.matchFulfilled,(state,action) => {
        state.currentUser = action.payload;
    })
  },
});

export const selectUser = (state:RootState) => state.user.currentUser;
export const {logout} = userSlice.actions;
export default userSlice.reducer;