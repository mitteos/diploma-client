import React from 'react';
import styled from "styled-components";
import {MessageList, UserHeader} from "@/components/Message";
import {useRouter} from "next/router";
import {useAppSelector} from "@/hooks/redux";

export const MessageContainer = () => {

    const {query} = useRouter()
    const {isChatModalActive} = useAppSelector(state => state.chat)

    return (
        <Container $isActive={isChatModalActive}>
            <UserHeader />
            {!!query.chatId && <MessageList />}
        </Container>
    );
};

const Container = styled.div<{$isActive: boolean}>`
  flex: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  max-height: 100%;
  @media (max-width: 876px) {
    padding-bottom: 60px;
  }
  @media (max-width: 730px) {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    transition: all .3s ease;
    transform: translateX(${({$isActive}) => $isActive ? "0px" : "100%"});
  }
  @media (max-width: 540px) {
    padding-bottom: 45px;
  }
`
