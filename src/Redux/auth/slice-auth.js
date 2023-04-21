import persistReducer from 'redux-persist/es/persistReducer';
import {initAuth} from './init-state'
import storage from 'redux-persist/lib/storage'
console.log(initAuth)

const { createSlice } = require("@reduxjs/toolkit");

const authSlice = createSlice({
    name: 'auth',
    initialState: initAuth
    
})

const persistConfig = {
    key: 'user',
    storage,
    whitelist: ['token'],
  }


  export const authReducer = persistReducer(persistConfig, authSlice.reducer)
