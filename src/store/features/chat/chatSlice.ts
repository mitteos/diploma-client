import {UserState} from "@/store/features/user/types";
import {createSlice, isAnyOf} from "@reduxjs/toolkit";
import {ChatState} from "@/store/features/chat/types";
import { chatAsyncActions } from ".";

interface InitialState {
    isLoading: boolean;
    error?: string | unknown;
    chats: ChatState[],
}

const initialState: InitialState = {
    isLoading: false,
    error: "",
    chats: []
}

const chatSlice = createSlice({
    name: "chat",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(chatAsyncActions.getAll.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = ""
            state.chats = action.payload
        })
        builder.addCase(chatAsyncActions.create.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = ""
        })


        builder.addMatcher(
            isAnyOf(
                chatAsyncActions.getAll.pending,
            ),
            (state) => {
                state.isLoading = true
                state.error = ""
            }
        )
        builder.addMatcher(
            isAnyOf(
                chatAsyncActions.getAll.rejected,
            ),
            (state, action) => {
                state.isLoading = false
                state.error = action.payload
            }
        )
    }
})

export const chatReducer = chatSlice.reducer
