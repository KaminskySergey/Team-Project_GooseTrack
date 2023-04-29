import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';




export const fetchTasksAll = createAsyncThunk(
  'tasks/fetchAll',
  async (credentials, thunkAPI) => {
    
    const query = credentials.split('-')
    const month = Number(query[1]) - 1
    console.log(month,)
    try {
      const {data} = await axios.get(`/tasks?year=${query[0]}&month=${query[1]}`);
      
      
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addTasks = createAsyncThunk(
  'tasks/addTasks',
  async (tasksInfo, thunkAPI) => {
    try {
      const { data } = await axios.post('/tasks', tasksInfo);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteTasks = createAsyncThunk(
  'tasks/deleteTasks',
  async (tasksID, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/tasks/${tasksID}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editTasks = createAsyncThunk(
  'tasks/editTasks',
  async (tasksID, thunkAPI) => {
    try {
      const { data } = await axios.patch(`/tasks/${tasksID}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
