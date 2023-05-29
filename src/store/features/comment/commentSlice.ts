import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { CommentState } from "./types";
import { commentAsyncActions } from ".";

interface InitialState {
    isLoading: boolean;
    error?: string | unknown;
    comments: CommentState[]
}

const initialState: InitialState = {
    isLoading: false,
    error: "",
    comments: []
}

const commentSlice = createSlice({
    name: "comment",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(commentAsyncActions.create.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = ""
        })
        builder.addCase(commentAsyncActions.remove.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = ""
        })


        builder.addMatcher(
            isAnyOf(
                commentAsyncActions.create.pending,
                commentAsyncActions.remove.pending,
            ),
            (state) => {
                state.isLoading = true
                state.error = ""
            }
        )
        builder.addMatcher(
            isAnyOf(
                commentAsyncActions.create.rejected,
                commentAsyncActions.remove.rejected,
            ),
            (state, action) => {
                state.isLoading = false
                state.error = action.payload
            }
        )
    },
})

export const commentReducer = commentSlice.reducer
export const commentActions = commentSlice.actions