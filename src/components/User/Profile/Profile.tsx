import React, { useEffect } from "react";
import HeaderBGImage from "@/assets/png/profileBG.png";
import SvgSendMail from "@/assets/svgr/SendMail";
import { FeedList } from "@/components/Feed";
import { MainLayout } from "@/layouts";
import styled from "styled-components";
import Image from "next/image";
import { UserState } from "@/store/features/user/types";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { postAsyncActions } from "@/store/features/post";
import { subscriptionAsyncActions } from "@/store/features/subscription";
import { $query } from "@/http";
import { useRouter } from "next/router";
import { chatAsyncActions } from "@/store/features/chat";
import SvgUnknownProfile from "@/assets/svgr/UnknownProfile";
import { userAsyncActions } from "@/store/features/user";

interface ProfileProps {
    user: UserState;
}

export const Profile: React.FC<ProfileProps> = ({ user }) => {
    const { push } = useRouter();
    const dispatch = useAppDispatch();
    const { posts } = useAppSelector((state) => state.post);
    const { user: myProfile } = useAppSelector((state) => state.user);
    const { mySubscriptions } = useAppSelector((state) => state.subscription);
    const subscriptionsIds =
        (mySubscriptions && mySubscriptions.map((el) => el.id)) || [];

    useEffect(() => {
        dispatch(postAsyncActions.getUser({ userId: user?.id }));
    }, [user]);

    const handleFollowClick = () => {
        if (myProfile && user) {
            dispatch(
                subscriptionAsyncActions.create({
                    userId: myProfile.id,
                    subUserId: user.id,
                })
            ).then((res) => {
                dispatch(userAsyncActions.getUser({userId: user.id}))
            })
        }
    };

    const handleCheckChatClick = async () => {
        if (myProfile && user) {
            await $query
                .get<{ chatId: number | null }>(`chat/check`, {
                    params: { userId: myProfile.id, sendUserId: user.id },
                })
                .then(async (res) => {
                    if (res.data.chatId) {
                        const id = res.data.chatId;
                        push({ pathname: "/chats", query: { chatId: id } });
                    } else {
                        await $query
                            .post<number>("chat/create", {
                                userId: myProfile.id,
                                sendUserId: user.id,
                            })
                            .then((res) => {
                                dispatch(
                                    chatAsyncActions.getAll({
                                        userId: myProfile.id,
                                    })
                                );
                                push({
                                    pathname: "/chats",
                                    query: { chatId: res.data },
                                });
                            });
                    }
                });
        }
    };

    return (
        <MainLayout title="Profile" variant="profile">
            <Header>
                <HeaderBG src={HeaderBGImage} alt="header bg" />
            </Header>
            <InfoContainer>
                {user.image ? (
                    <AvatarContainer>
                        <Avatar src={user.image} alt="avatar" />
                    </AvatarContainer>
                ) : (
                    <AvatarUnknown>
                        <SvgUnknownProfile fill="#306EEA" />
                    </AvatarUnknown>
                )}
                <ProfileInfo>
                    <Name>
                        {user?.name} {user?.surname}
                    </Name>
                    <Description>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Etiam tristique imperdiet est, ac lobortis justo
                        lobortis at. Ut sit amet nisl sem.
                    </Description>
                </ProfileInfo>
                <StatContainer>
                    {/* <StatItem>
                        <StatCount>1.3M</StatCount>
                        <StatName>likes</StatName>
                    </StatItem> */}
                    <StatItem>
                        <StatCount>{user.subscriptions?.length}</StatCount>
                        <StatName>Подписчиков</StatName>
                    </StatItem>
                    <StatItem>
                        <StatCount>{user.posts?.length}</StatCount>
                        <StatName>постов</StatName>
                    </StatItem>
                </StatContainer>
                {myProfile && myProfile.id !== user?.id && (
                    <ControlContainer>
                        <SendMailBtn onClick={handleCheckChatClick}>
                            <SvgSendMail fill="#306EEA" />
                            <SendMailBtnText>
                                Отправить сообщение
                            </SendMailBtnText>
                        </SendMailBtn>
                        <FollowBtn onClick={handleFollowClick}>
                            {!!user && subscriptionsIds.includes(user.id)
                                ? "Отписаться"
                                : "Подписаться"}
                        </FollowBtn>
                    </ControlContainer>
                )}
                <List>
                    <FeedList items={posts} variant="profile" />
                </List>
            </InfoContainer>
        </MainLayout>
    );
};

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
`;
const HeaderBG = styled(Image)`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-top-left-radius: 32px;
    border-top-right-radius: 32px;
`;
const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 35px;
    margin-top: -63px;
    @media (max-width: 855px) {
        width: 90%;
        margin: -63px auto 0 auto;
    }
`;
const AvatarContainer = styled.div`
    background: linear-gradient(90deg, #306eea 0%, #306eea 0.01%, #a200db 100%);
    border-radius: 100%;
    width: 120px;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const AvatarUnknown = styled.div`
    width: 120px;
    height: 120px;
    background: #060419;
    border-radius: 100%;
    svg {
        width: 120px;
        height: 120px;
    }
`;
const Avatar = styled(Image)`
    border-radius: 100%;
    width: 92%;
    height: 92%;
    object-fit: cover;
`;
const ProfileInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;
const Name = styled.h1`
    font-weight: 700;
    font-size: 28px;
    color: #fff;
    text-align: center;
`;
const Description = styled.p`
    font-weight: 600;
    font-size: 16px;
    color: #d3d3d3;
    max-width: 640px;
    margin: 0 auto;
`;
const StatContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    max-width: 395px;
    margin: 0 auto;
    width: 90%;
`;
const StatItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const StatCount = styled.h2`
    font-weight: 700;
    font-size: 26px;
    color: #fff;
`;
const StatName = styled.p`
    font-weight: 600;
    font-size: 20px;
    color: #a5a5a5;
`;
const ControlContainer = styled.div`
    display: flex;
    align-items: center;
    max-width: 450px;
    width: 80%;
    justify-content: space-between;
    @media (max-width: 600px) {
        flex-direction: column;
        gap: 10px;
    }
`;
const SendMailBtn = styled.button`
    padding: 9px 21px;
    position: relative;
    border-radius: 26px;
    display: flex;
    align-items: center;
    gap: 19px;
    background: #060419;
    margin: 0 0 2px;
    border: none;
    cursor: pointer;
    &::before {
        content: "";
        position: absolute;
        z-index: -1;
        top: -2px;
        left: -2px;
        right: -2px;
        bottom: -2px;
        border-radius: 26px;
        background: linear-gradient(
            90deg,
            #306eea 0%,
            #306eea 0.01%,
            #a200db 100%
        );
    }
    @media (max-width: 600px) {
        align-self: stretch;
        justify-content: center;
    }
`;
const SendMailBtnText = styled.p`
    font-weight: 700;
    font-size: 12px;
    background: linear-gradient(90deg, #306eea 0%, #306eea 0.01%, #a200db 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    transition: all 0.5s ease;
`;
const FollowBtn = styled.button`
    font-weight: 700;
    font-size: 12px;
    color: #fff;
    padding: 14px 35px;
    background: linear-gradient(90deg, #306eea 0%, #306eea 0.01%, #a200db 100%);
    border-radius: 26px;
    border: none;
    cursor: pointer;
    &:focus {
        outline: none;
    }
    @media (max-width: 600px) {
        align-self: stretch;
    }
`;
const List = styled.div`
    max-width: 900px;
    width: 70%;
    margin: 0 auto;
    @media (max-width: 855px) {
        width: 100%;
    }
`;
