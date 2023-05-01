import { createSlice } from '@reduxjs/toolkit';
import { initTasks } from './initTasks';

import { fetchTasksAll, addTasks, deleteTasks, editTasks } from './operations';


export const tasksSlise = createSlice({
  name: 'tasks',
  initialState: initTasks,
  extraReducers: builder =>
    builder
      //========fetchAllTasks
      .addCase(fetchTasksAll.pending, (state, action) => {
        // handlePending();
        state.isLoading = true;
      })
      .addCase(fetchTasksAll.rejected, (state, action) => {
        // handleRejected();
        state.isLoading = false;
  state.error = action.payload;
      })
      .addCase(fetchTasksAll.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        
        const todo = action.payload.task.filter(todo => todo.category === 'toDo');
        state.todo = todo
        const inProgress = action.payload.task.filter(todo => todo.category === 'inProgress');
        state.inProgress = inProgress
        const done = action.payload.task.filter(todo => todo.category === 'done');
        
        state.done = done

        

        
        
      })

      //========addTasks
      .addCase(addTasks.pending, (state, action) => {
        
        state.isLoading = true;
      })
      .addCase(addTasks.rejected, (state, action) => {
        // handleRejected();
        state.isLoading = false;
  state.error = action.payload;
      })
      .addCase(addTasks.fulfilled, (state, action) => {
        
        state.isLoading = false;
        state.error = null;
        // state.todo = [action.payload.task, ...state.todo]
        // state.inProgress = [action.payload.task, ...state.inProgress]
        // state.done = [action.payload.task, ...state.done]
        
        // state.todo = action.payload.todo;
        // state.inProgress = action.payload.inProgress;
        // state.done = action.payload.done;
      })

      //========deleteTasks
      .addCase(deleteTasks.pending, (state, action) => {
        // handlePending();
        state.isLoading = true;
      })
      .addCase(deleteTasks.rejected, (state, action) => {
        // handleRejected();
        state.isLoading = false;
  state.error = action.payload;
      })
      .addCase(deleteTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(task => task._id !== action.payload.task._id)
        // const index = state.items.findIndex(
        //   tasks => tasks._id === action.payload.task._id
        // );
        // state.tasks.items.splice(index, 1);
      })
      //========editTasks
      .addCase(editTasks.pending, (state, action) => {
        // handlePending();
        state.isLoading = true;
      })
      .addCase(editTasks.rejected, (state, action) => {
        // handleRejected();
        state.isLoading = false;
  state.error = action.payload;
      })
      .addCase(editTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.map(task => {
          if (task._id === action.payload.task._id) {
            return action.payload.task;
          } else {
            return task;
          }
        });
      }),
});
