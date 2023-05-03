import React, {useEffect} from 'react';
import {MainLayout} from "@/layouts";
import {ChatList} from "@/components/Chat";
import {NextPage} from "next";
import styled from "styled-components";
import {MessageContainer} from "@/components/Message";
import {useRouter} from "next/router";
import {useAppDispatch} from "@/hooks/redux";
import {chatActions} from "@/store/features/chat";

const ChatsPage: NextPage = () => {

    const {query} = useRouter()
    const dispatch = useAppDispatch()

    useEffect(() => {
        if(!query.chatId) {
            dispatch(chatActions.setChatModalActive(false))
        }
    }, [query])

    return (
        <MainLayout title="Сообщения" variant="message">
            <ChatContainer>
                <ChatList />
                <MessageContainer />
            </ChatContainer>
        </MainLayout>
    );
};

export default ChatsPage;

const ChatContainer = styled.div`
  display: flex;
  gap: 10px;
  height: 100%;
  position: relative;
`
