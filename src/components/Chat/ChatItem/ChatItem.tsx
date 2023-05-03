import React from 'react';
import styled, {css} from "styled-components";
import Image from "next/image";
import Link from "next/link";
import {ChatState} from "@/store/features/chat/types";
import * as process from "process";
import SvgUnknownProfile from "@/assets/svgr/UnknownProfile";
import {useAppDispatch} from "@/hooks/redux";
import {useRouter} from "next/router";
import {chatActions} from "@/store/features/chat";

interface ChatItemProps {
    isSend?: boolean
    isNew?: boolean
    info: ChatState
}

export const ChatItem: React.FC<ChatItemProps> = ({isSend = false, isNew = false, info}) => {

    const dispatch = useAppDispatch()
    const {push} = useRouter()

    const handleChooseChat = () => {
        dispatch(chatActions.setChatModalActive(true))
        push({pathname: "/chats", query: {chatId: info.chatId}})
    }

    return (
        <Container onClick={handleChooseChat}>
            {info.user.image
                ? <Icon src={process.env.NEXT_PUBLIC_IMAGE_URL + info.user.image} alt="avatar"/>
                : <UnknownIcon>
                    <SvgUnknownProfile fill="#306EEA" />
                </UnknownIcon>
            }

            <InfoContainer>
                <Header>
                    <Name>{info.user.name} {info.user.surname}</Name>
                    <Time>14:42</Time>
                </Header>
                <MessageContainer>
                    {isSend
                        ? <MessageText>Вы:</MessageText>
                        : isNew && <MessageIndicator/>
                    }
                    <MessageText $isSend={isSend}>Lorem ipsum dolor sit amet...</MessageText>
                </MessageContainer>
            </InfoContainer>
        </Container>
    );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  align-items: center;
  @media (max-width: 876px) {
    gap: 10px;
  }
`
const Icon = styled(Image)`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 100%;
  @media (max-width: 876px) {
    width: 60px;
    height: 60px;
  }
`
const UnknownIcon = styled.div`
  width: 40px;
  height: 40px;
  svg {
    width: 100%;
    height: 100%;
  }
`
const InfoContainer = styled.div`
  display: flex;
  flex: auto;
  flex-direction: column;
  gap: 10px;
`
const Name = styled.p`
  font-weight: 700;
  font-size: 16px;
  color: #000000;
  @media (max-width: 876px) {
    font-size: 14px;
  }
`
const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const MessageIndicator = styled.div`
  min-width: 13px;
  height: 13px;
  border-radius: 100%;
  background: #114FEE;
  @media (max-width: 876px) {
    min-width: 8px;
    height: 8px;
  }
`
const MessageText = styled.p<{ $isSend?: boolean }>`
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #5E5E5E;
  ${({$isSend}) => $isSend && css`
    padding: 3px 12px;
    background: #EEEEEE;
    border-radius: 11px;
  `};
  @media (max-width: 876px) {
    font-size: 12px;
  }
`
const Time = styled.p`
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #5E5E5E;
  @media (max-width: 876px) {
    font-size: 12px;
  }
`
