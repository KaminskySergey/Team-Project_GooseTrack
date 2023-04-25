import { createSlice } from '@reduxjs/toolkit';
import { initTasks } from './initTasks';

import { fetchTasksAll, addTasks, deleteTasks, editTasks } from './operations';

// const handlePending = state => {
//   state.isLoading = true;
// };
// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

export const tasksSlise = createSlice({
  name: 'tasks',
  initialState: initTasks,
  extraReducers: builder =>
    builder
      //========fetchAllTasks
      .addCase(
        fetchTasksAll.pending,
        (state, action) => (state.isLoading = true)
      )
      .addCase(fetchTasksAll.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchTasksAll.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })

      //========addTasks
      .addCase(addTasks.pending, (state, action) => (state.isLoading = true))
      .addCase(addTasks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })

      //========deleteTasks
      .addCase(deleteTasks.pending, (state, action) => (state.isLoading = true))
      .addCase(deleteTasks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.tasks.items.findIndex(
          tasks => tasks.id === action.payload.id
        );
        state.tasks.items.splice(index, 1);
      })
      //========editTasks
      .addCase(editTasks.pending, (state, action) => (state.isLoading = true))
      .addCase(editTasks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
  // .addCase(editTasks.fulfilled, (state, action) => {
  //   state.tasks.isLoading = false;
  //   state.tasks.error = null;
  //   const index = state.tasks.items.findIndex(
  //     tasks => tasks.id === action.payload.id
  //   );

  // }),
});
