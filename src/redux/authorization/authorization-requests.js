import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
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
            Notify.success(`Реєстрація успішна`)
            return data;
        } catch (error) {
            Notify.failure(`Некоректно введені дані`)
            console.log(error);
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
            Notify.failure(`Невірно введені дані`)
            return thunkAPI.rejectWithValue(error);
        }
    }
)

export const logOut = createAsyncThunk(
    'authorization/logout',
    async (_, thunkAPI) => {
        try {
            await axios.post('users/logout');
            token.unset();
        } catch (error) {
            console.log(error);
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
            const { data } = await axios.get('users/current');
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)
