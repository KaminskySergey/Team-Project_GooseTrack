import { createSlice } from '@reduxjs/toolkit';
import { initTasks } from './initTasks';

import { fetchTasksAll, addTasks, deleteTasks, editTasks } from './operations';

const handlePending = state => {
  state.tasks.isLoading = true;
};
const handleRejected = (state, action) => {
  state.tasks.isLoading = false;
  state.tasks.error = action.payload;
};

export const tasksSlise = createSlice({
  name: 'tasks',
  initialState: initTasks,
  extraReducers: builder =>
    builder
      //========fetchAllTasks
      .addCase(fetchTasksAll.pending, (state, action) => {
        handlePending();
      })
      .addCase(fetchTasksAll.rejected, (state, action) => {
        handleRejected();
      })
      .addCase(fetchTasksAll.fulfilled, (state, action) => {
        state.tasks.isLoading = false;
        state.tasks.error = null;
        state.tasks.items = action.payload;
      })

      //========addTasks
      .addCase(addTasks.pending, (state, action) => {
        handlePending();
      })
      .addCase(addTasks.rejected, (state, action) => {
        handleRejected();
      })
      .addCase(addTasks.fulfilled, (state, action) => {
        state.tasks.isLoading = false;
        state.tasks.error = null;
        state.tasks.items.push(action.payload);
      })

      //========deleteTasks
      .addCase(deleteTasks.pending, (state, action) => {
        handlePending();
      })
      .addCase(deleteTasks.rejected, (state, action) => {
        handleRejected();
      })
      .addCase(deleteTasks.fulfilled, (state, action) => {
        state.tasks.isLoading = false;
        state.tasks.error = null;
        const index = state.tasks.items.findIndex(
          tasks => tasks.id === action.payload.id
        );
        state.tasks.items.splice(index, 1);
      })
      //========editTasks
      .addCase(editTasks.pending, (state, action) => {
        handlePending();
      })
      .addCase(editTasks.rejected, (state, action) => {
        handleRejected();
      }),
  // .addCase(editTasks.fulfilled, (state, action) => {
  //   state.tasks.isLoading = false;
  //   state.tasks.error = null;
  //   const index = state.tasks.items.findIndex(
  //     tasks => tasks.id === action.payload.id
  //   );

  // }),
});
