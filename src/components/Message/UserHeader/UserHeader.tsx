import React from 'react';
import styled from "styled-components";
import AvatarIcon from "@/assets/png/chatItem.png";
import Image from "next/image";
import {useRouter} from "next/router";
import {Profile} from "@/assets/svgr";
import {useAppSelector} from "@/hooks/redux";

export const UserHeader: React.FC<{}> = () => {

    const {query} = useRouter()
    const {chats} = useAppSelector(state => state.chat)

    return (
        <Container>
            <UserContainer>
                {query.chatId
                    ? <Avatar src={AvatarIcon} alt="name" />
                    : <MaskProfileIcon>
                        <Profile fill="#fff"/>
                    </MaskProfileIcon>
                }

                <Name>{query.chatId ? `${chats.find(el => !!query.chatId && el.chatId === +query.chatId)?.user.name} ${chats.find(el => !!query.chatId && el.chatId === +query.chatId)?.user.surname} | chat id: ${query.chatId}` : "Выберите получателя"} </Name>
            </UserContainer>
        </Container>
    );
};

const Container = styled.div`
  width: 100%;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 8px 16px 0px rgba(34, 60, 80, 0.2);
  margin-bottom: 10px;
`
const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
const Avatar = styled(Image)`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  object-fit: cover;
`
const Name = styled.p`
  font-weight: 700;
  font-size: 18px;
`
const MaskProfileIcon = styled.div`
  border-radius: 100%;
  background: #9b9b9b;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`
