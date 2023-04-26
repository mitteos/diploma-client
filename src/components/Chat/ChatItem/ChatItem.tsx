import React from 'react';
import styled, {css} from "styled-components";
import ChatAvatar from "@/assets/png/chatItem.png";
import Image from "next/image";
import Link from "next/link";

interface ChatItemProps {
    isSend?: boolean
    isNew?: boolean
}

export const ChatItem: React.FC<ChatItemProps> = ({isSend = false, isNew = false}) => {
    return (
        <Container href="/chats/1">
            <Icon src={ChatAvatar} alt="avatar"/>
            <InfoContainer>
                <Header>
                    <Name>Alex Snow</Name>
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

const Container = styled(Link)`
  width: 100%;
  display: flex;
  gap: 40px;
  align-items: center;
  @media (max-width: 876px) {
    gap: 20px;
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
