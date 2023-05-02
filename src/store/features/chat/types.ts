import {UserState} from "@/store/features/user/types";

export interface ChatUserState {
    name: string;
    surname: string;
    image: string;
}

export interface ChatState {
    chatId: number;
    user: ChatUserState
}
