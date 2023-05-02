export interface UserState {
    id: number;
    email: string;
    name: string;
    surname: string;
    birthday: Date;
    role: string;
    token?: string;
}

export interface UserSignInState {
    token: string;
    user: UserState;
}
