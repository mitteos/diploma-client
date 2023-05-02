import {UserState} from "@/store/features/user/types";
import {LikeState} from "@/store/features/like/types";
import {CommentState} from "@/store/features/comment/types";

export interface PostState {
    id: number;
    createdAt: Date;
    image: string | null;
    content: string;
    userId: number;
    user: UserState;
    likes: LikeState[];
    comments: CommentState[]
}

export interface CreatePostState {
    content: string;
    image: File | null;
    userId?: number;
}
