import React from 'react';
import {MainLayout} from "@/layouts";
import styled from "styled-components";
import Image from "next/image";
import HeaderBGImage from "@/assets/png/profileBG.png";
import AvatarImage from "@/assets/png/ProfileImage.png";
import Link from "next/link";
import SvgSendMail from "@/assets/svgr/SendMail";
import {FeedItem} from "@/components/Feed";

const ProfilePage = () => {
    return (
        <MainLayout title="Profile" variant="profile">
            <Header>
                <HeaderBG src={HeaderBGImage} alt="header bg" />
            </Header>
            <InfoContainer>
                <AvatarContainer>
                    <Avatar src={AvatarImage} alt="avatar" />
                </AvatarContainer>
                <ProfileInfo>
                    <Name>Tony Lorenzo</Name>
                    <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tristique imperdiet est, ac lobortis justo lobortis at. Ut sit amet nisl sem.</Description>
                </ProfileInfo>
                <StatContainer>
                    <StatItem>
                        <StatCount>1.3M</StatCount>
                        <StatName>likes</StatName>
                    </StatItem>
                    <StatItem>
                        <StatCount>270K</StatCount>
                        <StatName>followers</StatName>
                    </StatItem>
                    <StatItem>
                        <StatCount>164</StatCount>
                        <StatName>posts</StatName>
                    </StatItem>
                </StatContainer>
                <ControlContainer>
                    <SendMailBtn href="/chats">
                        <SvgSendMail fill="#306EEA"/>
                        <SendMailBtnText>Send mail</SendMailBtnText>
                    </SendMailBtn>
                    <FollowBtn>Follow</FollowBtn>
                </ControlContainer>
                <FeedItem variant="profile" />
            </InfoContainer>
        </MainLayout>
    );
};

export default ProfilePage;

const Header = styled.div`
  position: relative;
  width: 100%;
  height: 180px;
  z-index: -1;
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: inset 0px -28px 13px -4px #060419;
  }
`
const HeaderBG = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  
`
const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 35px;
  margin-top: -63px;
`
const AvatarContainer = styled.div`
  background: linear-gradient(90deg, #306EEA 0%, #306EEA 0.01%, #A200DB 100%);
  border-radius: 100%;
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Avatar = styled(Image)`
  border-radius: 100%;
  width: 92%;
  height: 92%;
  object-fit: cover;
`
const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`
const Name = styled.h1`
  font-weight: 700;
  font-size: 28px;
  color: #fff;
  text-align: center;
`
const Description = styled.p`
  font-weight: 600;
  font-size: 16px;
  color: #D3D3D3;
  max-width: 640px;
  margin: 0 auto;
`
const StatContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  max-width: 395px;
  margin: 0 auto;
  width: 90%;
`
const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const StatCount = styled.h2`
  font-weight: 700;
  font-size: 26px;
  color: #fff;
`
const StatName = styled.p`
  font-weight: 600;
  font-size: 20px;
  color: #A5A5A5;
`
const ControlContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 319px;
  width: 80%;
  justify-content: space-between;
`
const SendMailBtn = styled(Link)`
  padding: 9px 21px;
  position: relative;
  border-radius: 26px;
  display: flex;
  align-items: center;
  gap: 19px;
  background: #060419;
  margin: 0 0 2px;
  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border-radius: 26px;
    background: linear-gradient(90deg, #306EEA 0%, #306EEA 0.01%, #A200DB 100%);
  }
`
const SendMailBtnText = styled.p`
  font-weight: 700;
  font-size: 12px;
  background: linear-gradient(90deg, #306EEA 0%, #306EEA 0.01%, #A200DB 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  transition: all .5s ease;
`
const FollowBtn = styled.button`
  font-weight: 700;
  font-size: 12px;
  color: #fff;
  padding: 14px 35px;
  background: linear-gradient(90deg, #306EEA 0%, #306EEA 0.01%, #A200DB 100%);
  border-radius: 26px;
  border: none;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`
