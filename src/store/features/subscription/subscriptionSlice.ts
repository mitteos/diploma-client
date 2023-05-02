import {UserState} from "@/store/features/user/types";
import {createSlice, isAnyOf} from "@reduxjs/toolkit";
import { subscriptionAsyncActions } from ".";

interface InitialState {
    isLoading: boolean
    error?: string | unknown;
    mySubscriptions: UserState[] | null
}

const initialState: InitialState = {
    isLoading: false,
    error: "",
    mySubscriptions: null
}

const subscriptionSlice = createSlice({
    name: "subscriptions",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(subscriptionAsyncActions.create.fulfilled, (state, action) => {
            state.isLoading = false
            state.mySubscriptions = action.payload
            state.error = ""
        })
        builder.addCase(subscriptionAsyncActions.getAll.fulfilled, (state, action) => {
            state.isLoading = false
            state.mySubscriptions = action.payload
            state.error = ""
        })


        builder.addMatcher(
            isAnyOf(
                subscriptionAsyncActions.create.pending,
                subscriptionAsyncActions.getAll.pending,
            ),
            (state) => {
                state.isLoading = true
                state.error = ""
            }
        )
        builder.addMatcher(
            isAnyOf(
                subscriptionAsyncActions.create.rejected,
                subscriptionAsyncActions.getAll.rejected,
            ),
            (state, action) => {
                state.isLoading = false
                state.error = action.payload
            }
        )
    }
})

export const subscriptionReducer = subscriptionSlice.reducer
export const subscriptionActions = subscriptionSlice.actions
