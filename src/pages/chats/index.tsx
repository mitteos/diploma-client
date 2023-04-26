import React from 'react';
import {MainLayout} from "@/layouts";
import {ChatList, Navigation} from "@/components/Chat";
import {NextPage} from "next";
import styled from "styled-components";
import {MessageContainer} from "@/components/Message";

const ChatsPage: NextPage = () => {
    return (
        <MainLayout title="Сообщения" variant="message">
            <ChatContainer>
                <ChatList/>
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
`
