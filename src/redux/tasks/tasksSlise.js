import { createSlice } from '@reduxjs/toolkit';
import { initTasks } from './initTasks';

import { fetchTasksAll, addTasks, deleteTasks, editTasks, transferTask } from './operations';

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


        // const todo = action.payload.filter(todo => todo.category === 'toDo')
        // state.todo = [todo, ...state.todo]
        // const inProgress = action.payload.filter(todo => todo.category === 'inProgress')
        // state.inProgress = [inProgress, ...state.inProgress]
        // const done = action.payload.filter(todo => todo.category === 'done')
        // state.done = [done, ...state.done]
        const newItem = action.payload.task;
        switch (newItem.category) {
          case "toDo":
            state.todo = [newItem, ...state.todo]
            break;
          case "inProgress":
            state.inProgress = [newItem, ...state.inProgress]
            break;
          case "done":
            state.done = [newItem, ...state.done]
            break;
          default:
            break;
        }
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

        state.todo = state.todo.filter(task => task._id !== action.payload.task._id)
        state.inProgress = state.inProgress.filter(task => task._id !== action.payload.task._id)
        state.done = state.done.filter(task => task._id !== action.payload.task._id)
      })
      //========editTasks
      .addCase(transferTask.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(transferTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const { _id, category } = action.payload.task;
        
        const done = state.done.find(task => task._id === _id);
        const todo = state.todo.find(task => task._id === _id);
        const inProgress = state.inProgress.find(task => task._id === _id);
        
        
        if ( !todo && !done &&  !inProgress) return;
        // Удаляем задачу из предыдущей категории
        if (done) {
          state[done.category] = state[done.category].filter(t => t._id !== _id);
        }
        if (todo) {
          
          state[todo.category] = state[todo.category].filter(t => t._id !== _id);
        }
        if (inProgress) {
          state[inProgress.category] = state[inProgress.category].filter(t => t._id !== _id);
        }
      
        // Добавляем задачу в новую категорию
        state[category].push(action.payload.task);
        state[category] = [...state[category],]
      })
      .addCase(transferTask.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ? action.payload.message : action.error.message;
      })

        .addCase(editTasks.pending, (state, action) => {

        state.isLoading = true;
      })
      .addCase(editTasks.rejected, (state, action) => {

        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(editTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        // todoList

        state.todo = state.todo.map(task => {
          if (task._id === action.payload.task._id) {
            
            return action.payload.task;
          } else {
            return task;
          }
        });
        // isProgressList
        state.inProgress = state.inProgress.map(task => {
          if (task._id === action.payload.task._id) {
            return action.payload.task;
          } else {
            return task;
          }
        });
        // isDone
        state.done = state.done.map(task => {
          if (task._id === action.payload.task._id) {
            return action.payload.task;
          } else {
            return task;
          }
        });
      }
      )
      
      
      
      
      
});
