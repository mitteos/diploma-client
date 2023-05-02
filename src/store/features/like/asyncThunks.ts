import {createAsyncThunk} from "@reduxjs/toolkit";
import {$query} from "@/http";
import {AxiosError} from "axios";
import {LikeState} from "@/store/features/like/types";

export const create = createAsyncThunk<LikeState, {userId: number, postId: number}>(
    "like/create",
    async (postData, {rejectWithValue}) => {
        try {
            const {userId, postId} = postData
            const {data} = await $query.post("like", {userId, postId})
            return data
        } catch (e) {
            if(e instanceof AxiosError) {
                return rejectWithValue(e.response?.data.message)
            }
            return rejectWithValue("Unknown error")
        }
    }
)
