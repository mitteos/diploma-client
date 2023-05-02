export interface MessageState {
    id: number;
    chatId: number;
    userId: number;
    content: string;
    createdAt: Date;
    event?: "message" | "connect"

}
