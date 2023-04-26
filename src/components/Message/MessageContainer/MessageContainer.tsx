import React from 'react';
import styled from "styled-components";
import {MessageList, UserHeader} from "@/components/Message";

export const MessageContainer = () => {
    return (
        <Container>
            <UserHeader />
            <MessageList />
        </Container>
    );
};

const Container = styled.div`
  flex: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
`
