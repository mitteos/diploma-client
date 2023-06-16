import PopularImage1 from "@/assets/png/popular1.png";
import PopularImage2 from "@/assets/png/popular2.png";
import styled from "styled-components";
import Image from "next/image";
import {PopularUserState} from "@/store/features/user/types";
import React from "react";
import Link from "next/link";
import * as process from "process";
import SvgUnknownProfile from "@/assets/svgr/UnknownProfile";

interface PopularItemProps {
    info: PopularUserState
}

export const PopularItem: React.FC<PopularItemProps> = ({info}) => {
    return (
        <Container>
            <Row>
                <PopularImage src={PopularImage1} alt=""/>
                <PopularImage src={PopularImage2} alt=""/>
            </Row>
            <Profile>
                {info.image
                    ? <ProfileIcon src={process.env.NEXT_PUBLIC_IMAGE_URL + info.image} alt="" />
                    : <UnknownProfile width={62} height={62} fill="#114FEE" />
                }
                <ProfileName href={`/profile/${info.id}`}>{info.name} {info.surname}</ProfileName>
                <ProfileInfo>Лайки: {info.likes.length}</ProfileInfo>
            </Profile>
        </Container>
    );
};

const Container = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 0px 7px 1px rgba(0, 0, 0, 0.25);
  border-radius: 13px;
  padding: 11px 16px 18px 16px;
  width: 240px;
`
const Row = styled.div`
  display: flex;
  gap: 9px;
`
const PopularImage = styled(Image)`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 19px;
`
const Profile = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin-top: -44px;
`
const ProfileIcon = styled.img`
  border-radius: 100%;
  width: 62px;
  height: 62px;
  object-fit: cover;
  margin: 0 0 5px;
  box-shadow: 0px 0px 0px 5px #FFFFFF;
`
const ProfileName = styled(Link)`
  font-weight: 700;
  font-size: 16px;
  color: #000;
`
const ProfileInfo = styled.p`
  font-weight: 600;
  font-size: 12px;
`
const UnknownProfile = styled(SvgUnknownProfile)`
  box-shadow: 0px 0px 0px 2px #FFFFFF;
  border-radius: 100%;
  background: #fff;
`
