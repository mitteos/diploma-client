import {createSlice} from "@reduxjs/toolkit";
import { likeAsyncActions } from ".";

const initialState = {
    isLoading: false
}

const likeSlice = createSlice({
    name: "like",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(likeAsyncActions.create.fulfilled, (state) => {
            state.isLoading = false
        })
    }
})

export const likeReducer = likeSlice.reducer
