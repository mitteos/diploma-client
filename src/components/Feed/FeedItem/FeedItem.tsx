import React from 'react';
import styled from "styled-components";
import PostAuthorImage from "@/assets/png/postAuthor.png";
import Image from "next/image";
import {CommentIcon, LikeIcon} from "@/assets/svgr";
import {PostState} from "@/store/features/post/types";
import {useAppDispatch, useAppSelector} from "@/hooks/redux";
import { likeAsyncActions } from '@/store/features/like';
import {postActions, postAsyncActions} from '@/store/features/post';
import Link from "next/link";
import * as process from "process";
import SvgUnknownProfile from "@/assets/svgr/UnknownProfile";

interface FeedItemProps {
    variant?: "primary" | "profile"
    info: PostState
}

export const FeedItem: React.FC<FeedItemProps> = ({variant = "primary", info}) => {

    const dispatch = useAppDispatch()
    const {user} = useAppSelector(state => state.user)
    const postDate = new Date(info.createdAt)
    const isLiked = info.likes.map(el => el.userId).includes(user ? user.id : 0)

    const date = {
        day: postDate.getDate() < 10 ? `0${postDate.getDate()}` : postDate.getDate(),
        month: postDate.getMonth() < 9 ? `0${postDate.getMonth() + 1}` : postDate.getMonth() + 1,
        year: postDate.getFullYear()
    }

    const handleLikeClick = () => {
        if(user) {
            dispatch(likeAsyncActions.create({userId: user.id, postId: info.id}))
            dispatch(postActions.toggleLike({userId: user.id, postId: info.id, id: Date.now()}))
        }
    }

    return (
        <Container $variant={variant}>
            <Profile>
                {info.user.image
                    ? <ProfileImage src={process.env.NEXT_PUBLIC_IMAGE_URL + info.user.image} alt="" />
                    : <UnknownImage $variant={variant}>
                        <SvgUnknownProfile fill="#306EEA"/>
                    </UnknownImage>
                }

                <ProfileInfo>
                    <ProfileName $variant={variant} href={`/profile/${info.userId}`}>{info.user.name} {info.user.surname}</ProfileName>
                    <PostDate>{date.day}.{date.month}.{date.year}</PostDate>
                </ProfileInfo>
            </Profile>
            <PostText $variant={variant}>{info.content}</PostText>
            {info.image &&
                <PostImages>
                    <PostImagesItem src={process.env.NEXT_PUBLIC_IMAGE_URL + info.image} alt="" />
                </PostImages>
            }
            <Navigation>
                <NavigationItem onClick={handleLikeClick}>
                    <LikeIcon fill={isLiked ? "red" : "#444"}/>
                    <NavigationText>{info.likes.length}</NavigationText>
                </NavigationItem>
                <NavigationItem>
                    <CommentIcon />
                    <NavigationText>{info.comments.length}</NavigationText>
                </NavigationItem>
            </Navigation>
        </Container>
    );
};

const Container = styled.div<{$variant: "primary" | "profile"}>`
  background: ${({$variant}) => $variant === "primary" ? "#FFFFFF" : "#060419"};
  border-radius: 23px;
  padding: 21px 15px;
  max-width: 900px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 17px;
  transition: all .5s ease;
  box-shadow: ${({$variant}) => $variant === "primary" ? "2px 4px 10px 1px rgba(0, 0, 0, 0.15)" : "2px 4px 10px 1px rgba(255, 255, 255, 0.15)"};
  &:hover {
    box-shadow: ${({$variant}) => $variant === "primary" ? "2px 4px 10px 1px rgba(0, 0, 0, 0.25)" : "2px 4px 10px 1px rgba(255, 255, 255, 0.25)"};
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
const ProfileImage = styled.img`
  border-radius: 100%;
  width: 64px;
  height: 64px;
  object-fit: cover;
`
const UnknownImage = styled.div<{$variant: "primary" | "profile"}>`
  border-radius: 100%;
  width: 64px;
  height: 64px;
  background: ${({$variant}) => $variant === "profile" && "#060419"} ;
  svg {
    width: 100%;
    height: 100%;
  }
`
const ProfileName = styled(Link)<{$variant: "primary" | "profile"}>`
  font-weight: 700;
  font-size: 16px;
  color: #333;
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
  gap: 10px;
`
const PostImagesItem = styled.img`
  width: 326px;
  max-height: 249px;
  object-fit: cover;
  border-radius: 26px;
  flex: auto;
`
const Navigation = styled.div`
  display: flex;
  gap: 39px;
  align-items: center;
`
const NavigationItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`
const NavigationText = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #444444;
`
