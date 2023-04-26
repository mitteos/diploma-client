import React from 'react';
import styled from "styled-components";
import AvatarIcon from "@/assets/png/chatItem.png";
import Image from "next/image";

export const UserHeader: React.FC<{}> = () => {
    return (
        <Container>
            <UserContainer>
                <Avatar src={AvatarIcon} alt="name" />
                <Name>Shary Shorew</Name>
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
