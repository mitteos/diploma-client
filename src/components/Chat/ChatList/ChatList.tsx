import React from 'react';
import styled from "styled-components";
import {ChatItem} from "@/components/Chat/ChatItem";
import {Navigation} from "@/components/Chat";

export const ChatList = () => {
    return (
        <Container>
            <Navigation/>
            <ChatItem/>
            <ChatItem isSend={true}/>
            <ChatItem isSend={true}/>
            <ChatItem isNew={true}/>
            <ChatItem isSend={true}/>
        </Container>
    );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 34px;
  max-width: 400px;
  padding: 20px 10px;
`
