import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    error: null,
    loading: false,
    products: null
};

export const CommonSlices = createSlice({
    name: 'common',
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
        },

        products: (state, action) => {
            state.error = null;
            state.loading = false;
            state.products = action.payload.products;
        }
    }
});

export const {endCall, catchError} = CommonSlices.actions;
