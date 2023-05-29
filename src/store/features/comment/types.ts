export interface CommentState {
    id: number;
    userId: number;
    postId: number;
    content: string;
    user: {
        name: string;
        surname: string;
        image: string | null;
    }
}

export interface CreateCommentState {
    userId: number;
    postId: number;
    content: string;
}

export interface CommentPostState {
    id: number;
    name: string;
    surname: string;
    image: string | null;
    content: string;
    createdAt: Date;
}