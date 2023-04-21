import { configureStore } from "@reduxjs/toolkit";
import { initAuth } from './auth/init-state'
import { authReducer } from './auth/slice-auth'
import persistStore from "redux-persist/es/persistStore";
import { 
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from 'redux-persist'

const initState = {
    user: initAuth,
}

export const store = configureStore({
preloadedState: initState,
devTools: true,
  reducer: {
    user: authReducer,
  },
  
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
})

export const persistor = persistStore(store)