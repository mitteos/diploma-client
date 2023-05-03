export interface UserState {
    id: number;
    email: string;
    name: string;
    image: string | null;
    surname: string;
    birthday: Date;
    role: string;
    token?: string;
}

export interface UserSignInState {
    token: string;
    user: UserState;
}
