import {createSlice, isAnyOf} from "@reduxjs/toolkit";
import {UserState} from "@/store/features/user/types";
import { userAsyncActions } from ".";

interface InitialState {
    isLoading: boolean;
    error?: string | unknown;
    user: UserState | null;
    searchUsers: UserState[] | null
    searchOneUser: UserState | null
}

const initialState: InitialState = {
    isLoading: false,
    error: "",
    user: null,
    searchUsers: null,
    searchOneUser: null
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        userLogout(state) {
            state.searchUsers = null
            state.user = null
            state.searchOneUser = null
        },
        clearSearchUsers(state) {
            state.searchUsers = null
        }
    },
    extraReducers: (builder) => {
        builder.addCase(userAsyncActions.login.fulfilled, (state, action) => {
            state.isLoading = false
            state.user = {
                token: action.payload.token,
                ...action.payload.user
            }
        })
        builder.addCase(userAsyncActions.register.fulfilled, (state) => {
            state.isLoading = false
            state.error = ""
        })
        builder.addCase(userAsyncActions.search.fulfilled, (state, action) => {
            state.isLoading = false
            state.searchUsers = action.payload
            state.error = ""
        })
        builder.addCase(userAsyncActions.getUser.fulfilled, (state, action) => {
            state.isLoading = false
            state.searchOneUser = action.payload
            state.error = ""
        })


        builder.addMatcher(
            isAnyOf(
                userAsyncActions.login.pending,
                userAsyncActions.register.pending,
                userAsyncActions.search.pending,
                userAsyncActions.getUser.pending,
            ),
            (state) => {
                state.isLoading = true
                state.error = ""
            }
        )
        builder.addMatcher(
            isAnyOf(
                userAsyncActions.login.rejected,
                userAsyncActions.register.rejected,
                userAsyncActions.search.rejected,
                userAsyncActions.getUser.rejected,
            ),
            (state, action) => {
                state.isLoading = false
                state.error = action.payload
            }
        )
    }
})

export const userReducer = userSlice.reducer
export const userActions = userSlice.actions
