import {createSlice} from "@reduxjs/toolkit";
import {handleNotificationPrompt} from "../../_helpers";
import Cookies from "js-cookie";

const initialState = {
    error: null,
    loading: false,
    session_token: null
};

export const AuthSlices = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        startCall: (state, action) => {
            state.error = null;
            state.loading = true;
        },

        endCall: (state, action) => {
            state.error = null;
            state.loading = false;
        },

        catchError: (state, action) => {
            state.error = action.payload.message;
            state.loading = false;
            const error_message = `${action.payload.message ? action.payload.message : ''}`;

            handleNotificationPrompt('Error!', error_message, 'error');
            return false;
        },

        login: (state, action) => {
            Cookies.set('session_user_id', action.payload.id, {expires: 1});
            Cookies.set('session_token', action.payload.session_token, {expires: 1});

            state.error = null;
            state.loading = false;
            state.session_token = action.payload.session_token;
        },

        logout: (state, action) => {
            state.error = null;
            state.loading = false;
            state.session_token = null;
        }
    }
});

export const {endCall, catchError} = AuthSlices.actions;