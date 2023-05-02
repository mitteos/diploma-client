import {createAsyncThunk} from "@reduxjs/toolkit";
import {UserState} from "@/store/features/user/types";
import {$query} from "@/http";
import {AxiosError} from "axios";

export const create = createAsyncThunk<UserState[], {userId: number; subUserId: number}>(
    "subscription/create",
    async (subscriptionData, {rejectWithValue}) => {
        try {
            const {userId, subUserId} = subscriptionData
            const {data} = await $query.post(`subscription`, {userId, subUserId})
            return data
        } catch (e) {
            if(e instanceof AxiosError) {
                return rejectWithValue(e.response?.data.message)
            }
            return rejectWithValue("Unknown error")
        }
    }
)

export const getAll = createAsyncThunk<UserState[], {userId: number}>(
    "subscription/getAll",
    async (subscriptionData, {rejectWithValue}) => {
        try {
            const {userId} = subscriptionData
            const {data} = await $query.get(`subscription`, {params: {userId}})
            return data
        } catch (e) {
            if(e instanceof AxiosError) {
                return rejectWithValue(e.response?.data.message)
            }
            return rejectWithValue("Unknown error")
        }
    }
)
