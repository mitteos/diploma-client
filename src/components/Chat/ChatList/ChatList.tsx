import React, {useEffect} from 'react';
import styled from "styled-components";
import {ChatItem} from "@/components/Chat/ChatItem";
import {Navigation} from "@/components/Chat";
import {useAppDispatch, useAppSelector} from "@/hooks/redux";
import { chatAsyncActions } from '@/store/features/chat';

export const ChatList = () => {

    const {chats} = useAppSelector(state => state.chat)
    const {user} = useAppSelector(state => state.user)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if(user) {
            dispatch(chatAsyncActions.getAll({userId: user.id}))
        }
    }, [])

    return (
        <Container>
            <Navigation/>
            {!!chats.length
                ? chats.map(chat =>
                    <ChatItem key={chat.chatId} info={chat}/>
                )
                : <EmptyText>У вас еще нет активных чатов</EmptyText>
            }
        </Container>
    );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 34px;
  max-width: 400px;
  padding: 20px 10px;
  box-shadow: 8px 0px 15px 0px rgba(34, 60, 80, 0.12);
`
const EmptyText = styled.p`
  font-weight: 600;
  font-size: 16px;
  color: #454545;
  text-align: center;
`
