import { $query } from "@/http"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { CommentState, CreateCommentState } from "./types"
import { AxiosError } from "axios"

export const create = createAsyncThunk<CommentState, CreateCommentState>(
    "comment/create",
    async (commentData, {rejectWithValue}) => {
        try {
            const {content, postId, userId} = commentData
            const {data} = await $query.post("comment", {userId, postId, content})
            return data
        } catch (e) {
            if(e instanceof AxiosError) {
                return rejectWithValue(e.response?.data.message)
            }
            return rejectWithValue("Unknown error")
        }
    }
)

export const remove = createAsyncThunk<{}, {commentId: number}>(
    "comment/remove",
    async (commentData, {rejectWithValue}) => {
        try {
            const {commentId} = commentData
            const {data} = await $query.post("comment/remove", {commentId})
            return data
        } catch (e) {
            if(e instanceof AxiosError) {
                return rejectWithValue(e.response?.data.message)
            }
            return rejectWithValue("Unknown error")
        }
    }
)