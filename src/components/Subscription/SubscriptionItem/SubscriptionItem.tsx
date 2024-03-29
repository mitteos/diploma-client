import React from "react";
import styled from "styled-components";
import SubsBg from "@/assets/png/subscriptionBG.png";
import Link from "next/link";
import { UserState } from "@/store/features/user/types";
import SvgUnknownProfile from "@/assets/svgr/UnknownProfile";

interface SubscriptionItemProps {
    info: UserState;
}

export const SubscriptionItem: React.FC<SubscriptionItemProps> = ({ info }) => {
    return (
        <Container $bg={SubsBg.src} href={`/profile/${info.id}`}>
            <Content>
            {info.image ? (
                    <AvatarContainer>
                        <Avatar
                            src={process.env.NEXT_PUBLIC_IMAGE_URL + info.image}
                            alt="avatar"
                        />
                    </AvatarContainer>
                ) : (
                    <AvatarUnknown>
                        <SvgUnknownProfile fill="#306EEA" />
                    </AvatarUnknown>
                )}
                <Name>
                    {info.name} {info.surname}
                </Name>
                <Description>
                    I like doing the best work in the world...
                </Description>
            </Content>
        </Container>
    );
};

const Container = styled(Link)<{ $bg: string }>`
    max-width: 270px;
    background: url(${({ $bg }) => $bg}) no-repeat center / cover;
    border-radius: 29px;
    box-shadow: 0px 4px 21px 2px rgba(0, 0, 0, 0.25);
`;
const Content = styled.div`
    background: #fff;
    border-radius: 29px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24px 21px;
    margin-top: 120px;
`;
const Avatar = styled.img`
    border-radius: 100%;
    object-fit: cover;
    width: 100%;
    height: 100%;
`;
const Name = styled.p`
    font-weight: 600;
    font-size: 22px;
    color: #000;
`;
const Description = styled.p`
    font-weight: 500;
    font-size: 16px;
    color: #696969;
    margin: 0 0 25px;
`;
const NavigationContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 60px;
    justify-content: center;
`;
const NavigationItem = styled(Link)`
    width: 20px;
    cursor: pointer;
`;
const AvatarContainer = styled.div`
    background: linear-gradient(90deg, #306eea 0%, #306eea 0.01%, #a200db 100%);
    border-radius: 100%;
    width: 120px;
    height: 120px;
    display: flex;
    align-items: center;
    margin: -93px 0 13px;
    justify-content: center;
`;
const AvatarUnknown = styled.div`
    width: 120px;
    height: 120px;
    background: #fff;
    border-radius: 100%;
    margin: -93px 0 13px;
    svg {
        width: 120px;
        height: 120px;
    }
`;
