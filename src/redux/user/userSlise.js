import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { initUser } from "./initUser";
import { fetchUser, updateUser } from "./operations";
import { handleFulfilled, handlePending, handleRejected } from "./userSliseRedusers";

export const userInfoSlise = createSlice({
  name: 'user',
  initialState: initUser,
  extraReducers: builder => builder
    .addMatcher(isAnyOf(fetchUser.pending, updateUser.pending), handlePending)
    .addMatcher(isAnyOf(fetchUser.rejected, updateUser.rejected), handleRejected)
    .addMatcher(isAnyOf(fetchUser.fulfilled, updateUser.fulfilled), handleFulfilled)
  ,
});