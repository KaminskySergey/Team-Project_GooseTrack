import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { persistAuthReducer } from 'redux/auth/authSlise';
import { tasksSlise } from './tasks/tasksSlise';
import { initAuth } from 'redux/auth/initAuth';
import { initTasks } from './tasks/initTasks';

const initState = {
  auth: initAuth,
  tasks: initTasks,
};

export const store = configureStore({
  reducer: {
    auth: persistAuthReducer,
    tasks: tasksSlise.reducer,
  },
  devTools: true,
  preloadedState: initState,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);
