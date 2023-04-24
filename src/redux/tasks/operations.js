import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTasksAll = createAsyncThunk(
  'tasks/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/tasks');
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

// export const editTasks = createAsyncThunk(
//   'tasks/editTasks',
//   async (tasksID, thunkAPI) => {
//     try {
//       const { data } = await axios.patch(`/tasks/${tasksID}`);
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
