import { createAsyncThunk } from "@reduxjs/toolkit";
import {PopularUserState, UserEditState, UserState} from "@/store/features/user/types";
import { AxiosError } from "axios";
import { $authQuery, $query } from "@/http";
import jwtDecode from "jwt-decode";
import { PostState } from "../post/types";
import { SubscriptionState } from "../subscription/types";

interface UserLoginProps {
    email: string;
    password: string;
}

interface UserRegisterProps extends UserLoginProps {
    name: string;
    surname: string;
    birthday: Date;
}

interface EditUserProps {
    userId: number;
    name: string;
    surname: string;
    birthday: Date;
    image: File
}

export const login = createAsyncThunk<UserState, UserLoginProps>(
    "user/userLogin",
    async (userData, { rejectWithValue }) => {
        try {
            const { email, password } = userData;
            const { data } = await $query.post<{token: string, posts: PostState[], subscriptions: SubscriptionState[]}>("user/login", {
                email,
                password,
            });
            const userInfo = jwtDecode<UserState>(data.token)
            return ({
                ...userInfo,
                posts: data.posts,
                subscriptions: data.subscriptions

            })
        } catch (e) {
            if (e instanceof AxiosError) {
                return rejectWithValue(e.response?.data.message);
            }
            return rejectWithValue("Unknown error");
        }
    }
);

export const register = createAsyncThunk<UserRegisterProps, UserRegisterProps>(
    "user/userRegister",
    async (userData, { rejectWithValue }) => {
        try {
            const { email, password, name, surname, birthday } = userData;
            const { data } = await $query.post("user/registration", {
                email,
                password,
                name,
                surname,
                birthday,
            });
            return data;
        } catch (e) {
            if (e instanceof AxiosError) {
                return rejectWithValue(e.response?.data.message);
            }
            return rejectWithValue("Unknown error");
        }
    }
);

export const check = createAsyncThunk<UserState, {}>(
    "user/check",
    async (userData, { rejectWithValue }) => {
        try {
            const { data } = await $authQuery.get("user/check");
            return jwtDecode(data);
        } catch (e) {
            if (e instanceof AxiosError) {
                return rejectWithValue(e.response?.data.message);
            }
            return rejectWithValue("Unknown error");
        }
    }
);

export const edit = createAsyncThunk<UserEditState, EditUserProps>(
    "user/edit",
    async (userData, { rejectWithValue }) => {
        try {
            const {birthday, image, name, surname, userId} = userData
            const formData = new FormData()
            formData.append("userId", userId.toString())
            formData.append("name", name)
            formData.append("surname", surname)
            formData.append("image", image)
            formData.append("birthday", birthday.toString())
            const { data } = await $query.post("user/edit", formData);
            const result = jwtDecode<UserEditState>(data)
            return result

        } catch (e) {
            if (e instanceof AxiosError) {
                return rejectWithValue(e.response?.data.message);
            }
            return rejectWithValue("Unknown error");
        }
    }
);


export const search = createAsyncThunk<UserState[], { username: string }>(
    "user/search",
    async (userData, { rejectWithValue }) => {
        try {
            const { username } = userData;
            const { data } = await $query.get("user/search", {
                params: { username: username },
            });
            return data;
        } catch (e) {
            if (e instanceof AxiosError) {
                return rejectWithValue(e.response?.data.message);
            }
            return rejectWithValue("Unknown error");
        }
    }
);

export const getUser = createAsyncThunk<UserState, { userId: number }>(
    "user/getUser",
    async (userData, { rejectWithValue }) => {
        try {
            const { userId } = userData;
            const { data } = await $query.get(`user/get-profile`, {
                params: { userId },
            });
            return data;
        } catch (e) {
            if (e instanceof AxiosError) {
                return rejectWithValue(e.response?.data.message);
            }
            return rejectWithValue("Unknown error");
        }
    }
);

export const getPopularUsers = createAsyncThunk<PopularUserState[]>(
    "user/getPopularUsers",
    async (userData, { rejectWithValue }) => {
        try {
            const { data } = await $query.get(`user/get-popular`);
            return data;
        } catch (e) {
            if (e instanceof AxiosError) {
                return rejectWithValue(e.response?.data.message);
            }
            return rejectWithValue("Unknown error");
        }
    }
);

export const setRole = createAsyncThunk<{userId: number; role: string}, {adminId: number; userId: number; role: string}>(
    "user/setRole",
    async (userData, { rejectWithValue }) => {
        try {
            const {adminId, userId, role} = userData
            const { data } = await $query.post(`user/set-role`, {adminId, userId, role});
            return data;
        } catch (e) {
            if (e instanceof AxiosError) {
                return rejectWithValue(e.response?.data.message);
            }
            return rejectWithValue("Unknown error");
        }
    }
);
