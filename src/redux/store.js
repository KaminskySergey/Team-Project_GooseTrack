import { configureStore } from '@reduxjs/toolkit';
import persistStore from "redux-persist/es/persistStore";
import { authReducer } from 'redux/auth/authSlise';
import { initAuth } from 'redux/auth/initAuth';
import { 
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from 'redux-persist'


const initState = {
  auth: initAuth,
}

export const store = configureStore({
  preloadedState: initState,
  devTools: true,
  reducer: {
    auth: authReducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
})

export const persistor = persistStore(store);