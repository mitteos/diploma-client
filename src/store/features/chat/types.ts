import {UserState} from "@/store/features/user/types";
import {MessageState} from "@/store/features/message/types";

export interface ChatUserState {
    name: string;
    surname: string;
    image: string;
}

export interface ChatState {
    chatId: number;
    user: ChatUserState;
    lastMessage: MessageState | null;
}
