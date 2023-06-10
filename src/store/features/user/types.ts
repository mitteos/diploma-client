import { PostState } from "../post/types";
import { SubscriptionState } from "../subscription/types";
import {LikeState} from "@/store/features/like/types";

export interface UserState {
    id: number;
    email: string;
    name: string;
    image: string | null;
    surname: string;
    birthday: Date;
    role: string;
    posts: PostState[];
    subscriptions: SubscriptionState[];
    token?: string;
}

export interface PopularUserState {
    id: number;
    name: string;
    surname: string;
    likes: LikeState[];
    image: string;
}

export interface UserEditState {
    name: string;
    surname: string;
    birthday: Date;
    image: string;
}
