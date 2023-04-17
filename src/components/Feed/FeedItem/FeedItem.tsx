import React from 'react';
import styled from "styled-components";
import PostAuthorImage from "@/assets/png/postAuthor.png";
import PostImage1 from "@/assets/png/postImage1.png";
import PostImage2 from "@/assets/png/postImage2.png";
import Image from "next/image";

interface FeedItemProps {
    variant?: "primary" | "profile"
}

export const FeedItem: React.FC<FeedItemProps> = ({variant = "primary"}) => {
    return (
        <Container $variant={variant}>
            <Profile>
                <ProfileImage src={PostAuthorImage} alt="post author" />
                <ProfileInfo>
                    <ProfileName $variant={variant}>Peorica Siemona</ProfileName>
                    <PostDate>1 min ago</PostDate>
                </ProfileInfo>
            </Profile>
            <PostText $variant={variant}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tristique imperdiet est, ac lobortis justo lobortis at. Ut sit amet nisl sem.</PostText>
            <PostImages>
                <PostImagesItem src={PostImage1} alt="post image" />
                <PostImagesItem src={PostImage2} alt="post image" />
            </PostImages>
        </Container>
    );
};

const Container = styled.div<{$variant: "primary" | "profile"}>`
  background: ${({$variant}) => $variant === "primary" ? "#FFFFFF" : "#060419"};
  border-radius: 23px;
  padding: 21px 15px;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  gap: 17px;
  transition: all .5s ease;
  &:hover {
    box-shadow: ${({$variant}) => $variant === "primary" ? "2px 4px 10px 1px rgba(0, 0, 0, 0.15)" : "2px 4px 10px 1px rgba(255, 255, 255, 0.15)"};
  }
`
const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`
const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`
const ProfileImage = styled(Image)`
  border-radius: 100%;
  width: 64px;
  height: 64px;
  object-fit: cover;
`
const ProfileName = styled.h1<{$variant: "primary" | "profile"}>`
  font-weight: 700;
  font-size: 16px;
  color: ${({$variant}) => $variant === "profile" && "#fff"};
`
const PostDate = styled.p`
  font-weight: 600;
  font-size: 12px;
  color: #6A6A6A;
`
const PostText = styled.p<{$variant: "primary" | "profile"}>`
  font-weight: 600;
  font-size: 16px;
  color: ${({$variant}) => $variant === "primary" ? "#454545" : "#DBDBDB"};
  width: 100%;
`
const PostImages = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`
const PostImagesItem = styled(Image)`
  width: 326px;
  height: 249px;
  object-fit: cover;
  border-radius: 26px;
`
