import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { initAuth } from './initAuth'

// import { register, logIn, logOut, fetchCurrentUser } from './operations';


const authSlice = createSlice({
    name: 'auth',
    initialState: initAuth,
    extraReducers: builder =>
        builder
    // .addCase(register.fulfilled, (state, action) => {
    //     state.user = action.payload.user;
    //     state.token = action.payload.token;
    //     state.isLoggedIn = true;
    //     state.error = false;
    // })
    // .addCase(register.pending, (state) => {
    //     state.error = false;
    // })
    // .addCase(register.rejected, (state) => {
    //     state.error = true;
    // })
    // .addCase(logIn.fulfilled, (state, action) => {
    //     state.user = action.payload.user;
    //     state.token = action.payload.token;
    //     state.isLoggedIn = true;
    //     state.error = false;
    // })
    // .addCase(logIn.pending, (state) => {
    //     state.error = false;
    // })
    // .addCase(logIn.rejected, (state) => {
    //     state.error = true;
    // })
    // .addCase(logOut.fulfilled, (state) => {
    //     state.user = { name: null, email: null };
    //     state.token = null;
    //     state.isLoggedIn = false;
    //     state.error = false;
    // })
    // .addCase(fetchCurrentUser.pending, (state) => {
    //     state.isRefreshing = true;
    // })
    // .addCase(fetchCurrentUser.fulfilled, (state, action) => {
    //     state.user = action.payload;
    //     state.isLoggedIn = true;
    //     state.isRefreshing = false;
    // })
    // .addCase(fetchCurrentUser.rejected, (state) => {
    //     state.isRefreshing = false;
    // })
});

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
};

export const persistAuthReducer = persistReducer(authPersistConfig, authSlice.reducer)