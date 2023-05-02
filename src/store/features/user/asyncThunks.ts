import {createAsyncThunk} from "@reduxjs/toolkit";
import {UserSignInState, UserState} from "@/store/features/user/types";
import {AxiosError} from "axios";
import {$query} from "@/http";

interface UserLoginProps {
    email: string;
    password: string;
}

interface UserRegisterProps extends UserLoginProps{
    name: string;
    surname: string;
    birthday: Date
}

export const login = createAsyncThunk<UserSignInState, UserLoginProps>(
    "user/userLogin",
    async (userData, {rejectWithValue}) => {
        try {
            const {email, password} = userData
            const {data} = await $query.post("user/login", {email, password})
            return data
        } catch (e) {
            if(e instanceof AxiosError) {
                return rejectWithValue(e.response?.data.message)
            }
            return rejectWithValue("Unknown error")
        }
    }
)

export const register = createAsyncThunk<UserRegisterProps, UserRegisterProps>(
    "user/userRegister",
    async (userData, {rejectWithValue}) => {
        try {
            const {email, password, name, surname, birthday} = userData
            const {data} = await $query.post("user/registration", {email, password, name, surname, birthday})
            return data
        } catch (e) {
            if(e instanceof AxiosError) {
                return rejectWithValue(e.response?.data.message)
            }
            return rejectWithValue("Unknown error")
        }
    }
)

export const search = createAsyncThunk<UserState[], {username: string}>(
    "user/search",
    async (userData, {rejectWithValue}) => {
        try {
            const {username} = userData
            const {data} = await $query.get("user/search", {params: {username: username}})
            return data
        } catch (e) {
            if(e instanceof AxiosError) {
                return rejectWithValue(e.response?.data.message)
            }
            return rejectWithValue("Unknown error")
        }
    }
)

export const getUser = createAsyncThunk<UserState, {userId: number}>(
    "user/getUser",
    async (userData, {rejectWithValue}) => {
        try {
            const {userId} = userData
            const {data} = await $query.get(`user/get-profile`, {params: {userId}})
            return data
        } catch (e) {
            if(e instanceof AxiosError) {
                return rejectWithValue(e.response?.data.message)
            }
            return rejectWithValue("Unknown error")
        }
    }
)
