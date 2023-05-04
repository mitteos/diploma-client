import {createAsyncThunk} from "@reduxjs/toolkit";
import {$query} from "@/http";
import {AxiosError} from "axios";
import {CreatePostState, PostState} from "@/store/features/post/types";
import FormData from "form-data";

export const getFeed = createAsyncThunk<PostState[], {userId?: number}>(
    "post/getFeed",
    async (postData, {rejectWithValue}) => {
        try {
            const {userId} = postData
            const {data} = await $query.get("post", {params: {userId: userId}})
            return data
        } catch (e) {
            if(e instanceof AxiosError) {
                return rejectWithValue(e.response?.data.message)
            }
            return rejectWithValue("Unknown error")
        }
    }
)

export const getUser = createAsyncThunk<PostState[], {userId?: number}>(
    "post/getUser",
    async (postData, {rejectWithValue}) => {
        try {
            const {userId} = postData
            const {data} = await $query.get("post/user", {params: {userId: userId}})
            return data
        } catch (e) {
            if(e instanceof AxiosError) {
                return rejectWithValue(e.response?.data.message)
            }
            return rejectWithValue("Unknown error")
        }
    }
)

export const create = createAsyncThunk<PostState[], CreatePostState>(
    "post/create",
    async (postData, {rejectWithValue}) => {
        try {
            const {userId, image, content} = postData
            const formData = new FormData()
            formData.append("userId", userId)
            formData.append("image", image)
            formData.append("content", content)
            const {data} = await $query.post("post", formData)
            return data
        } catch (e) {
            if(e instanceof AxiosError) {
                return rejectWithValue(e.response?.data.message)
            }
            return rejectWithValue("Unknown error")
        }
    }
)


