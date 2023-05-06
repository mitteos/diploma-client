import React from "react";
import styled from "styled-components";
import SubsBg from "@/assets/png/subscriptionBG.png";
import AvatarIcon from "@/assets/png/subscriptionItemIcon.png";
import Image from "next/image";
import Link from "next/link";
import SvgSendMail from "@/assets/svgr/SendMail";
import SvgClose from "@/assets/svgr/Close";
import { UserState } from "@/store/features/user/types";

interface SubscriptionItemProps {
    info: UserState;
}

export const SubscriptionItem: React.FC<SubscriptionItemProps> = ({ info }) => {
    return (
        <Container $bg={SubsBg.src} href={`/profile/${info.id}`}>
            <Content>
                <Avatar src={AvatarIcon} alt="name" />
                <Name>
                    {info.name} {info.surname}
                </Name>
                <Description>
                    I like doing the best work in the world...
                </Description>
                {/*<NavigationContainer>*/}
                {/*    <NavigationItem href="">*/}
                {/*        <SvgSendMail fill="#114FEE"/>*/}
                {/*    </NavigationItem>*/}
                {/*    <NavigationItem href="">*/}
                {/*        <SvgClose />*/}
                {/*    </NavigationItem>*/}
                {/*</NavigationContainer>*/}
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
const Avatar = styled(Image)`
    width: 140px;
    height: 140px;
    border-radius: 100%;
    object-fit: cover;
    margin: -93px 0 13px;
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
