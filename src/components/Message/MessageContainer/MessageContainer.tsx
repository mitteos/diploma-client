import React from 'react';
import styled from "styled-components";
import {MessageList, UserHeader} from "@/components/Message";
import {useRouter} from "next/router";

export const MessageContainer = () => {

    const {query} = useRouter()

    return (
        <Container>
            <UserHeader />
            {!!query.chatId && <MessageList />}
        </Container>
    );
};

const Container = styled.div`
  flex: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  max-height: 100%;
`
