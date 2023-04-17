import PopularImage1 from "@/assets/png/popular1.png";
import PopularImage2 from "@/assets/png/popular2.png";
import PopularAuthorImage from "@/assets/png/popularAuthor.png";
import styled from "styled-components";
import Image from "next/image";

export const PopularItem = () => {
    return (
        <Container>
            <Row>
                <PopularImage src={PopularImage1} alt=""/>
                <PopularImage src={PopularImage2} alt=""/>
            </Row>
            <Profile>
                <ProfileIcon src={PopularAuthorImage} alt="" />
                <ProfileName>Alex Grow</ProfileName>
                <ProfileInfo>1.3M likes</ProfileInfo>
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
const ProfileIcon = styled(Image)`
  border-radius: 100%;
  margin: 0 auto;
  width: 62px;
  height: 62px;
  object-fit: cover;
  margin: 0 0 5px;
  box-shadow: 0px 0px 0px 5px #FFFFFF;
`
const ProfileName = styled.h2`
  font-weight: 700;
  font-size: 16px;
`
const ProfileInfo = styled.p`
  font-weight: 600;
  font-size: 12px;
`
