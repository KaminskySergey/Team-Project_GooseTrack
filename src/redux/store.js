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
  REGISTER,
} from 'redux-persist'
import { initUser } from './user/initUser';
import { userInfoSlise } from './user/userSlise';
import { initTheme } from './theme/initTheme';
import { themeReducer } from './theme/themeSlice';

const initState = {
  auth: initAuth,
  tasks: initTasks,
  user: initUser,
  theme: initTheme,
};

export const store = configureStore({
  preloadedState: initState,
  devTools: true,
  reducer: {
    auth: authReducer,
    tasks: tasksSlise.reducer,
    user: userInfoSlise.reducer,
    theme: themeReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
