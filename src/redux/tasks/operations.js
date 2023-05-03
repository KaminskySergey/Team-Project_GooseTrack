import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTasksAll = createAsyncThunk(
  'tasks/fetchAll',
  async (credentials, thunkAPI) => {
    const query = credentials.split('-');
    const month = Number(query[1]);
    try {
      const { data } = await axios.get(
        `/tasks?year=${query[0]}&month=${month}`
      );

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
  async ({ title, startTime, endTime, priority, _id, category }, thunkAPI) => {
    try {
      const { data } = await axios.patch(`/tasks/${_id}`, {
        title,
        startTime,
        endTime,
        priority,
        category,
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
