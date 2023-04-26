import React from 'react';
import styled from "styled-components";
import {MessageItem} from "@/components/Message/MessageItem";
import {MessageForm} from "@/components/Message";

export const MessageList = () => {
    return (
        <Container>
            <MessageItem isMyMessage={true} />
            <MessageItem isMyMessage={true} />
            <MessageItem isMyMessage={false} />
            <MessageItem isMyMessage={false} />
            <MessageItem isMyMessage={true} />
            <MessageForm />
        </Container>
    );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 15px;
  width: 90%;
  margin: 0 auto;
  flex: auto;
  padding-bottom: 20px;
`
