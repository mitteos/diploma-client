import axios from "axios";
import * as process from "process";
import { store } from "@/store/store"

const $query = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL
})
const $authQuery = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL
})

$authQuery.interceptors.request.use((config) => {
    const {user} = store.getState()
    if(user.user?.token) {
        config.headers!.Authorization = `Bearer ${user.user.token}`
    }
    return config
})

export {
    $query,
    $authQuery
}
