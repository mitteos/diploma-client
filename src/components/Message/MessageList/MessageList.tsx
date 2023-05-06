import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { MessageItem } from "@/components/Message/MessageItem";
import { MessageForm } from "@/components/Message";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { messageActions, messageAsyncActions } from "@/store/features/message";
import * as process from "process";

export const MessageList = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const { query } = useRouter();
    const dispatch = useAppDispatch();
    const { messages } = useAppSelector((state) => state.message);
    const { user } = useAppSelector((state) => state.user);

    const socket = useRef<WebSocket>();

    useEffect(() => {
        if (socket.current?.readyState === socket.current?.OPEN) {
            socket.current?.close();
        }
        if (query.chatId && user) {
            dispatch(messageAsyncActions.getChat({ chatId: +query.chatId }));

            socket.current = new WebSocket(
                process.env.NEXT_PUBLIC_WEBSOCKET || ""
            );

            socket.current.onopen = () => {
                const message = {
                    event: "connect",
                    userId: user.id,
                    chatId: !!query.chatId && +query.chatId,
                };
                socket.current?.send(JSON.stringify(message));
            };

            socket.current.onmessage = (e) => {
                const message = JSON.parse(e.data);
                if (message.event === "message") {
                    dispatch(messageActions.addWsMessage(message));
                }
            };
        }
    }, [query.chatId]);

    useEffect(() => {
        scrollRef.current?.scrollTo(0, scrollRef.current.scrollHeight);
    }, [messages]);

    return (
        <Container>
            <List ref={scrollRef}>
                <ListInner>
                    {messages.length ? (
                        messages.map((mes) => (
                            <MessageItem
                                key={mes.id}
                                isMyMessage={!!user && mes.userId === user.id}
                                content={mes.content}
                                date={mes.createdAt}
                            />
                        ))
                    ) : (
                        <EmptyText>Напишите первое сообщение</EmptyText>
                    )}
                </ListInner>
            </List>
            <Form>
                <MessageForm socket={socket} />
            </Form>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;
    margin: 0 auto;
    flex: auto;
    padding-bottom: 20px;
`;
const EmptyText = styled.p`
    text-align: center;
`;
const List = styled.div`
    overflow-y: auto;
    height: 100%;
    display: flex;
`;
const ListInner = styled.div`
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-height: 10px;
    padding: 20px 0;
    @media (max-width: 876px) {
        width: 90%;
    }
`;
const Form = styled.div`
    width: 80%;
    margin: 0 auto;
    @media (max-width: 876px) {
        width: 95%;
    }
`;
