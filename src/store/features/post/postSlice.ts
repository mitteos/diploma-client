import {PostState} from "@/store/features/post/types";
import {createSlice, isAnyOf, PayloadAction} from "@reduxjs/toolkit";
import { postAsyncActions } from ".";
import {UserState} from "@/store/features/user/types";
import {LikeState} from "@/store/features/like/types";

interface InitialState {
    posts: PostState[];
    isLoading: boolean;
    error?: string | unknown;
}

const initialState: InitialState = {
    posts: [],
    isLoading: false,
    error: null
}

const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        toggleLike(state, action: PayloadAction<LikeState>) {
            state.posts = state.posts.map(post => {
                if(post.id === action.payload.postId) {
                    const postLikesUserIds = post.likes.map(el => el.userId)
                    if(!postLikesUserIds.includes(action.payload.userId)) {
                        return {
                            ...post,
                            likes: [...post.likes, action.payload]
                        }
                    } else {
                        return {
                            ...post,
                            likes: post.likes.filter(el => el.userId !== action.payload.userId)
                        }
                    }
                }
                return post
            })
        }
    },
    extraReducers: (builder) => {
        builder.addCase(postAsyncActions.getFeed.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = ""
            state.posts = action.payload
        })
        builder.addCase(postAsyncActions.getUser.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = ""
            state.posts = action.payload
        })
        builder.addCase(postAsyncActions.create.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = ""
        })
        builder.addCase(postAsyncActions.remove.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = ""
            state.posts = state.posts.filter(el => el.id !== action.payload)
        })
        builder.addCase(postAsyncActions.edit.fulfilled, (state, action) => {
            state.isLoading = false
            state.error = ""
            console.log(action.payload)
            state.posts = state.posts.map(post => {
                if(post.id === action.payload.id) {
                    return {
                        ...post,
                        image: action.payload.image,
                        content: action.payload.content
                    }
                }
                return post
            })
        })


        builder.addMatcher(
            isAnyOf(
                postAsyncActions.getFeed.pending,
                postAsyncActions.getUser.pending,
                postAsyncActions.create.pending,
                postAsyncActions.edit.pending,
                postAsyncActions.remove.pending,
            ),
            (state) => {
                state.isLoading = true
                state.error = ""
            }
        )
        builder.addMatcher(
            isAnyOf(
                postAsyncActions.getFeed.rejected,
                postAsyncActions.getUser.rejected,
                postAsyncActions.create.rejected,
                postAsyncActions.edit.rejected,
                postAsyncActions.remove.rejected,
            ),
            (state, action) => {
                state.isLoading = false
                state.error = action.payload
            }
        )
    }
})

export const postReducer = postSlice.reducer
export const postActions = postSlice.actions
