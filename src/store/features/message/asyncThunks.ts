import {createAsyncThunk} from "@reduxjs/toolkit";
import {$query} from "@/http";
import {AxiosError} from "axios";
import {MessageState} from "@/store/features/message/types";

export const getChat = createAsyncThunk<MessageState[], {chatId: number}>(
    "message/getChat",
    async (messageData, {rejectWithValue}) => {
        try {
            const {chatId} = messageData
            const {data} = await $query.get("message", {params: {chatId: chatId}})
            return data
        } catch (e) {
            if(e instanceof AxiosError) {
                return rejectWithValue(e.response?.data.message)
            }
            return rejectWithValue("Unknown error")
        }
    }
)

export const create = createAsyncThunk<MessageState, {chatId: number; userId: number; content: string}>(
    "message/create",
    async (messageData, {rejectWithValue}) => {
        try {
            const {chatId, userId, content} = messageData
            const {data} = await $query.post("message", {chatId, userId, content})
            return data
        } catch (e) {
            if(e instanceof AxiosError) {
                return rejectWithValue(e.response?.data.message)
            }
            return rejectWithValue("Unknown error")
        }
    }
)
