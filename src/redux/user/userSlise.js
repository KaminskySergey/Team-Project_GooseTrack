import { createSlice } from "@reduxjs/toolkit";
import { initUser } from "./initUser";
import { fetchUser, updateUser } from "./operations";

const handlePending = (state) => {
  state.loading = true;
  state.error = false;
};

const handleRejected = (state) => {
  state.loading = false;
  state.error = true;
};

const handleFulfilled = (state, action) => {
  state.loading = false;
  state.error = false;
  state.info = action.payload;
};

export const userInfoSlise = createSlice({
  name: 'user',
  initialState: initUser,
  extraReducers: builder => builder
    //========fetchUser
    .addCase(fetchUser.pending, handlePending)
    .addCase(fetchUser.rejected, handleRejected)
    .addCase(fetchUser.fulfilled, handleFulfilled)
    //========updateUser
    .addCase(updateUser.pending, handlePending)
    .addCase(updateUser.rejected, handleRejected)
    .addCase(updateUser.fulfilled, handleFulfilled),
});