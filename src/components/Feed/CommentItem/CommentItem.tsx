import SvgUnknownProfile from "@/assets/svgr/UnknownProfile";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { commentAsyncActions } from "@/store/features/comment";
import { CommentState } from "@/store/features/comment/types";
import { postAsyncActions } from "@/store/features/post";
import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";
import {useRouter} from "next/router";

interface CommentItemProps {
    info: CommentState;
}

export const CommentItem: React.FC<CommentItemProps> = ({ info }) => {
    const [isRemoveVisible, setIsRemoveVisible] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    const { user } = useAppSelector((state) => state.user);
    const {pathname} = useRouter()

    const handleRemoveClick = () => {
        if (user) {
            dispatch(commentAsyncActions.remove({ commentId: info.id })).then(
                (res) => {
                    dispatch(postAsyncActions.getFeed({ userId: user.id }));
                }
            );
        }
    };

    return (
        <Container
            onMouseEnter={() => setIsRemoveVisible(true)}
            onMouseLeave={() => setIsRemoveVisible(false)}
        >
            <Header>
                <Profile href={`/profile/${info.userId}`}>
                    {info.user?.image ? (
                        <Image
                            src={
                                process.env.NEXT_PUBLIC_IMAGE_URL +
                                info.user.image
                            }
                            alt=""
                        />
                    ) : (
                        <UnknownImage>
                            <SvgUnknownProfile fill="#114FEE"/>
                        </UnknownImage>
                    )}
                    <ProfileName $isProfile={pathname.includes("/profile")}>
                        {info.user.name} {info.user.surname}
                    </ProfileName>
                </Profile>
                <RemoveBtn
                    onClick={handleRemoveClick}
                    $isActive={isRemoveVisible}
                    $isProfile={pathname.includes("/profile")}
                >
                    +
                </RemoveBtn>
            </Header>
            <Content $isProfile={pathname.includes("/profile")}>{info.content}</Content>
        </Container>
    );
};

const Container = styled.div``;
const Profile = styled(Link)`
    display: flex;
    align-items: center;
    gap: 10px;
`;
const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 0 8px;
`;
const RemoveBtn = styled.p<{ $isActive: boolean; $isProfile: boolean }>`
    cursor: pointer;
    font-size: 20px;
    transform: rotate(45deg);
    transition: all 0.3s ease;
    opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
    visibility: ${({ $isActive }) => ($isActive ? "visible" : "hidden")};
    color: ${({$isProfile}) => $isProfile ? "#fff" : "#000"}
`;
const ProfileName = styled.p<{$isProfile: boolean}>`
    font-size: 14px;
  color: ${({$isProfile}) => $isProfile ? "#fff" : "#000"};
`;
const Content = styled.p<{$isProfile: boolean}>`
    font-size: 12px;
  color: ${({$isProfile}) => $isProfile ? "#fff" : "#000"};
`;
const Image = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 100%;
    object-fit: cover;
`;
const UnknownImage = styled.div`
    width: 30px;
    height: 30px;
    background: #fff;
    border-radius: 100%;
    svg {
        width: 100%;
        height: 100%;
    }
`;
