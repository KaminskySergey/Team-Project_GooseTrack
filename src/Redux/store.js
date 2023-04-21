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
import { initAuth } from 'redux/auth/initAuth';

const initState = {
  auth: initAuth,
}

export const store = configureStore({
  reducer: {
    auth: persistAuthReducer,

  },
  devTools: true,
  preloadedState: initState,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
  }
});

export const persistor = persistStore(store);