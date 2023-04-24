import { configureStore } from '@reduxjs/toolkit';
import persistStore from "redux-persist/es/persistStore";
import { authReducer } from 'redux/auth/authSlise';
import { initAuth } from 'redux/auth/initAuth';
import { tasksSlise } from './tasks/tasksSlise';
import { initTasks } from './tasks/initTasks';
import { 
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from 'redux-persist'
    
const initState = {
  auth: initAuth,
  tasks: initTasks,
};

export const store = configureStore({
  preloadedState: initState,
  devTools: true,
  reducer: {

    auth: authReducer,
    tasks: tasksSlise.reducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    
})

export const persistor = persistStore(store);
