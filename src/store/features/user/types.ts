import { PostState } from "../post/types";
import { SubscriptionState } from "../subscription/types";

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