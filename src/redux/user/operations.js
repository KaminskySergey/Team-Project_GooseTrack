import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const 
fetchUser = createAsyncThunk(
  'user/fetchUser',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/user/current');
      return data.result.user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)

export const updateUser = createAsyncThunk(
  'user/updateUser',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.patch('/user/info', credentials);
      return data.result.user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
)