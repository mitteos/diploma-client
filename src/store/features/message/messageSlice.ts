import {MessageState} from "@/store/features/message/types";
import {createSlice, isAnyOf, PayloadAction} from "@reduxjs/toolkit";
import { messageAsyncActions } from ".";

interface InitialState {
    isLoading: boolean;
    error?: string | unknown;
    messages: MessageState[]
}

const initialState: InitialState = {
    isLoading: false,
    error: "",
    messages: []
}

const messageSlice = createSlice({
    name: "message",
    initialState,
    reducers: {
        addWsMessage(state, action: PayloadAction<MessageState>) {
            state.messages.push(action.payload)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(messageAsyncActions.getChat.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = ""
            state.messages = action.payload
        })
        builder.addCase(messageAsyncActions.create.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = ""
        })


        builder.addMatcher(
            isAnyOf(
                messageAsyncActions.getChat.pending,
                messageAsyncActions.create.pending,
            ),
            (state) => {
                state.isLoading = true
                state.error = ""
            }
        )
        builder.addMatcher(
            isAnyOf(
                messageAsyncActions.getChat.rejected,
                messageAsyncActions.create.rejected,
            ),
            (state, action) => {
                state.isLoading = false
                state.error = action.payload
            }
        )
    }
})

export const messageReducer = messageSlice.reducer
export const messageActions = messageSlice.actions
