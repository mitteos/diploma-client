import React from 'react';
import styled from "styled-components";
import {useRouter} from "next/router";
import {useAppDispatch, useAppSelector} from "@/hooks/redux";
import SvgUnknownProfile from "@/assets/svgr/UnknownProfile";
import * as process from "process";
import SvgArrow from "@/assets/svgr/Arrow";
import {chatActions} from "@/store/features/chat";

export const UserHeader: React.FC<{}> = () => {

    const {query} = useRouter()
    const {chats} = useAppSelector(state => state.chat)
    const dispatch = useAppDispatch()

    const handleCloseChat = () => {
        dispatch(chatActions.setChatModalActive(false))
    }

    return (
        <Container>
            <CloseChatBtn onClick={handleCloseChat}>
                <SvgArrow fill="#000" />
            </CloseChatBtn>
            <UserContainer>
                {query.chatId
                    ? chats.find(user => query.chatId && user.chatId === +query.chatId)!.user.image
                        ? <Avatar>
                            <ProfileIcon src={process.env.NEXT_PUBLIC_IMAGE_URL + chats.find(user => query.chatId &&  user.chatId === +query.chatId)!.user.image} alt="user"/>
                        </Avatar>
                        : <Avatar>
                            <SvgUnknownProfile fill="#306EEA" />
                        </Avatar>
                    : <Avatar>
                        <SvgUnknownProfile fill="#306EEA" />
                    </Avatar>
                }

                <Name>{query.chatId ? `${chats.find(el => !!query.chatId && el.chatId === +query.chatId)?.user.name} ${chats.find(el => !!query.chatId && el.chatId === +query.chatId)?.user.surname}` : "Выберите получателя"} </Name>
            </UserContainer>
        </Container>
    );
};

const Container = styled.div`
  width: 100%;
  padding: 10px 20px;
  display: flex;
  gap: 10px;
  align-items: center;
  box-shadow: 0px 8px 16px 0px rgba(34, 60, 80, 0.2);
  margin-bottom: 10px;
`
const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
const CloseChatBtn = styled.div`
  display: none;
  @media (max-width: 730px) {
    display: block;
    cursor: pointer;
    width: 20px;
    height: 20px;
    svg {
      width: 100%;
      height: 100%;
    }
  }
`
const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  object-fit: cover;
  svg {
    width: 100%;
    height: 100%;
  }
`
const Name = styled.p`
  font-weight: 700;
  font-size: 18px;
`
const ProfileIcon = styled.img`
  border-radius: 100%;
  width: 40px;
  height: 40px;
  object-fit: cover;
`
