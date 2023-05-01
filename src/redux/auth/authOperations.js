import axios from "axios";


import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://goosetrack.onrender.com/api'

const setAuthHeader = token => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
}
const setClearHeader = () => {
    axios.defaults.headers.common.Authorization = null;
}

export const register = createAsyncThunk('auth/register', async (credentials, thunkAPI) => {
    try {
        
        const { data } = await axios.post('/auth/register', credentials)
        setAuthHeader(data.data.token)
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

export const login = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
    try {
        
        const { data } = await axios.post('/auth/login', credentials)

        setAuthHeader(data.data.token)

        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
        await axios.get('/user/logout')
        setClearHeader()
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

export const refresh = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
    const { token } = thunkAPI.getState().auth
    
    if (!token) {
        return thunkAPI.rejectWithValue('Not Valid Token')
    }

    setAuthHeader(token)

    try {
        const { data } = await axios.get('/user/current')
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})