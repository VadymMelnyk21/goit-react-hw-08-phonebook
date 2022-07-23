import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Vadym ${token}`
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
}

export const register = createAsyncThunk(
    'authorization/register',
    async (credentials, thunkAPI) => {
        try {
            const { data } = await axios.post('users/signup', credentials);
            token.set(data.token);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

export const logIn = createAsyncThunk(
    'authorization/login',
    async (credentials, thunkAPI) => {
        try {
            const { data } = await axios.post('users/login', credentials);
            token.set(data.token);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

export const logOut = createAsyncThunk(
    'authorization/logOut',
    async (_, thunkAPI) => {
        try {
            await axios.post('users/logOut');
            token.unset();
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)

export const getCurrentUser = createAsyncThunk(
    'authorization/refresh',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;

        if (persistedToken === null) {
            return thunkAPI.rejectWithValue();
        }

        token.set(persistedToken);
        try {
            const { data } = await axios.get('user/current');
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)
