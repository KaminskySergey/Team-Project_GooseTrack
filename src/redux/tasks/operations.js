import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';




export const fetchTasksAll = createAsyncThunk(
  'tasks/fetchAll',
  async (credentials, thunkAPI) => {

    const query = credentials.split('-')
    const month = Number(query[1]);
    console.log(query)
    try {
      const { data } = await axios.get(`/tasks?year=${query[0]}&month=${month}`);


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
  async ({ title, startTime, endTime, priority, _id }, thunkAPI) => {
    try {
      const { data } = await axios.patch(`/tasks/${_id}`, { title, startTime, endTime, priority });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


export const transferTask = createAsyncThunk(
  'tasks/transferTask',
  async ({ _id, category }, { getState }) => {
    console.log(category, 'ttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt')
    console.log(_id)
    try {
      const { data } = await axios.patch(`/tasks/${_id}`, { category })
      console.log(data, 'data')
      return data
    } catch (error) {

    }
    // console.log({ taskId, sourceColumnId, destinationColumnId }, '{ taskId, sourceColumnId, destinationColumnId }')
    // console.log(tasks)
    // const task = tasks[sourceColumnId].find((task) => task.id === taskId);
    // const newSourceColumn = tasks[sourceColumnId].filter(
    //   (task) => task.id !== taskId
    // );
    // const newDestinationColumn = [...tasks[destinationColumnId], task];

    // return { newSourceColumn, newDestinationColumn };
  }
);