import {createAsyncThunk} from "@reduxjs/toolkit";
import {$query} from "@/http";
import {AxiosError} from "axios";
import {ChatState} from "@/store/features/chat/types";

export const getAll = createAsyncThunk<ChatState[], {userId: number}>(
    "chat/getAll",
    async (userData, {rejectWithValue}) => {
        try {
            const {userId} = userData
            const {data} = await $query.get(`chat`, {params: {userId}})
            return data
        } catch (e) {
            if(e instanceof AxiosError) {
                return rejectWithValue(e.response?.data.message)
            }
            return rejectWithValue("Unknown error")
        }
    }
)

export const create = createAsyncThunk<number, {userId: number, sendUserId: number}>(
    "chat/create",
    async (chatData, {rejectWithValue}) => {
        try {
            const {userId, sendUserId} = chatData
            const {data} = await $query.post(`chat/create`, {userId, sendUserId})
            return data
        } catch (e) {
            if(e instanceof AxiosError) {
                return rejectWithValue(e.response?.data.message)
            }
            return rejectWithValue("Unknown error")
        }
    }
)
