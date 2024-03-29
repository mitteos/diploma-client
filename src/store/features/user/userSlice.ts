import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {PopularUserState, UserState} from "@/store/features/user/types";
import { userAsyncActions } from ".";

interface InitialState {
    isLoading: boolean;
    error?: string | unknown;
    user: UserState | null;
    searchUsers: UserState[] | null;
    searchOneUser: UserState | null;
    popularUsers: PopularUserState[] | null;
}

const initialState: InitialState = {
    isLoading: false,
    error: "",
    user: null,
    searchUsers: null,
    searchOneUser: null,
    popularUsers: null
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        userLogout(state) {
            state.searchUsers = null;
            state.user = null;
            state.searchOneUser = null;
        },
        clearSearchUsers(state) {
            state.searchUsers = null;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(userAsyncActions.login.fulfilled, (state, action) => {
            state.isLoading = false;
            state.user = action.payload;
        });
        builder.addCase(userAsyncActions.register.fulfilled, (state) => {
            state.isLoading = false;
            state.error = "";
        });
        builder.addCase(userAsyncActions.check.fulfilled, (state, action) => {
            state.isLoading = false;
            state.user = action.payload;
            state.error = "";
        });
        builder.addCase(userAsyncActions.search.fulfilled, (state, action) => {
            state.isLoading = false;
            state.searchUsers = action.payload;
            state.error = "";
        });
        builder.addCase(userAsyncActions.getUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.searchOneUser = action.payload;
            state.error = "";
        });
        builder.addCase(userAsyncActions.getPopularUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.popularUsers = action.payload;
            state.error = "";
        });
        builder.addCase(userAsyncActions.edit.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = "";
            if (state.user) {
                state.user.name = action.payload.name;
                state.user.surname = action.payload.surname;
                state.user.image = action.payload.image;
                state.user.birthday = action.payload.birthday;
            }
        });
        builder.addCase(userAsyncActions.setRole.fulfilled, (state, action) => {
            state.isLoading = false;
            state.searchUsers = state.searchUsers && state.searchUsers.map(user => {
                if(user.id === action.payload.userId) {
                    return {
                        ...user,
                        role: action.payload.role
                    }
                }
                return user
            })
            state.error = "";
        });

        builder.addMatcher(
            isAnyOf(
                userAsyncActions.login.pending,
                userAsyncActions.register.pending,
                userAsyncActions.search.pending,
                userAsyncActions.getUser.pending,
                userAsyncActions.check.pending,
                userAsyncActions.edit.pending,
                userAsyncActions.getPopularUsers.pending
            ),
            (state) => {
                state.isLoading = true;
                state.error = "";
            }
        );
        builder.addMatcher(
            isAnyOf(
                userAsyncActions.login.rejected,
                userAsyncActions.register.rejected,
                userAsyncActions.search.rejected,
                userAsyncActions.getUser.rejected,
                userAsyncActions.check.rejected,
                userAsyncActions.edit.rejected,
                userAsyncActions.getPopularUsers.rejected
            ),
            (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            }
        );
    },
});

export const userReducer = userSlice.reducer;
export const userActions = userSlice.actions;
