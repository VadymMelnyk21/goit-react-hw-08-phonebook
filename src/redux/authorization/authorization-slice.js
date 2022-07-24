import { createSlice } from "@reduxjs/toolkit";
import {
    register,
    logIn,
    logOut,
    getCurrentUser,
} from "./authorization-requests";

const initialState = {
    user: {
        name: null,
        email: null,
    },
    token: null,
    isLoggedIn: false,
    isFetchingCurrentUser: false,
}

const authorizationSlice = createSlice({
    name: 'auth',
    initialState,

    extraReducers: {
        [register.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },

        [logIn.fulfilled](state, action) {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },

        [logOut.fulfilled](state) {
            state.user = { name: null, email: null };
            state.token = null;
            state.isLoggedIn = false;
        },

        [getCurrentUser.pending](state) {
            state.isFetchingCurrentUser = true;
        },
        [getCurrentUser.fulfilled](state, action) {
            state.user = action.payload;
            state.isLoggedIn = true;
            state.isFetchingCurrentUser = false;
        },
        [getCurrentUser.rejected](state) {
            state.isFetchingCurrentUser = false;
        },
    },
})

export default authorizationSlice.reducer;
