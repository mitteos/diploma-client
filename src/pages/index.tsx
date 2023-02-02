import {MainLayout} from "@/layouts";
import styled from "styled-components";
import Image from "next/image";
import SvgAdd from "@/assets/svgr/Add";
import PopularImage1 from "@/assets/png/popular1.png"
import PopularImage2 from "@/assets/png/popular2.png"
import PopularAuthorImage from "@/assets/png/popularAuthor.png"

const Home = () => {
    return (
        <MainLayout title="Home">
            <AddPostContainer>
            <CustomInputContainer>
                <CustomInput placeholder="New post..."/>
                <CustomInputButton fill="#696969" />
            </CustomInputContainer>
                <AddPostButton>post</AddPostButton>
            </AddPostContainer>

            <PopularContainer>
                <PopularTitle>Most popular</PopularTitle>
                <PopularRow>
                    <PopularItem>
                        <PopularItemRow>
                            <PopularItemImage src={PopularImage1} alt=""/>
                            <PopularItemImage src={PopularImage2} alt=""/>
                        </PopularItemRow>
                        <PopularProfile>
                            <PopularProfileIcon src={PopularAuthorImage} alt="" />
                            <PopularProfileName>Alex Grow</PopularProfileName>
                            <PopularProfileInfo>1.3M likes</PopularProfileInfo>
                        </PopularProfile>
                    </PopularItem>
                    <PopularItem>
                        <PopularItemRow>
                            <PopularItemImage src={PopularImage1} alt=""/>
                            <PopularItemImage src={PopularImage2} alt=""/>
                        </PopularItemRow>
                        <PopularProfile>
                            <PopularProfileIcon src={PopularAuthorImage} alt="" />
                            <PopularProfileName>Alex Grow</PopularProfileName>
                            <PopularProfileInfo>1.3M likes</PopularProfileInfo>
                        </PopularProfile>
                    </PopularItem>
                    <PopularItem>
                        <PopularItemRow>
                            <PopularItemImage src={PopularImage1} alt=""/>
                            <PopularItemImage src={PopularImage2} alt=""/>
                        </PopularItemRow>
                        <PopularProfile>
                            <PopularProfileIcon src={PopularAuthorImage} alt="" />
                            <PopularProfileName>Alex Grow</PopularProfileName>
                            <PopularProfileInfo>1.3M likes</PopularProfileInfo>
                        </PopularProfile>
                    </PopularItem>
                    <PopularItem>
                        <PopularItemRow>
                            <PopularItemImage src={PopularImage1} alt=""/>
                            <PopularItemImage src={PopularImage2} alt=""/>
                        </PopularItemRow>
                        <PopularProfile>
                            <PopularProfileIcon src={PopularAuthorImage} alt="" />
                            <PopularProfileName>Alex Grow</PopularProfileName>
                            <PopularProfileInfo>1.3M likes</PopularProfileInfo>
                        </PopularProfile>
                    </PopularItem>
                    <PopularItem>
                        <PopularItemRow>
                            <PopularItemImage src={PopularImage1} alt=""/>
                            <PopularItemImage src={PopularImage2} alt=""/>
                        </PopularItemRow>
                        <PopularProfile>
                            <PopularProfileIcon src={PopularAuthorImage} alt="" />
                            <PopularProfileName>Alex Grow</PopularProfileName>
                            <PopularProfileInfo>1.3M likes</PopularProfileInfo>
                        </PopularProfile>
                    </PopularItem>
                    <PopularItem>
                        <PopularItemRow>
                            <PopularItemImage src={PopularImage1} alt=""/>
                            <PopularItemImage src={PopularImage2} alt=""/>
                        </PopularItemRow>
                        <PopularProfile>
                            <PopularProfileIcon src={PopularAuthorImage} alt="" />
                            <PopularProfileName>Alex Grow</PopularProfileName>
                            <PopularProfileInfo>1.3M likes</PopularProfileInfo>
                        </PopularProfile>
                    </PopularItem>
                </PopularRow>
            </PopularContainer>
        </MainLayout>
    );
};

export default Home;

const AddPostContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 39px;
  margin-bottom: 38px;
`
const CustomInputContainer = styled.div`
  position: relative;
  width: 100%;
`
const CustomInput = styled.input`
  background: #FFFFFF;
  box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.25);
  border-radius: 56px;
  border: none;
  color: #696969;
  padding: 14px 56px 14px 25px;
  font-weight: 500;
  font-size: 18px;
  width: 100%;
  &:focus {
    outline: none;
  }
`
const CustomInputButton = styled(SvgAdd)`
  position: absolute;
  top: 50%;
  right: 25px;
  transform: translateY(-50%);
  cursor: pointer;
`
const AddPostButton = styled.div`
  background: linear-gradient(90deg, #306EEA 0%, #306EEA 0.01%, #A200DB 100%);
  border-radius: 32px;
  padding: 19px 65px;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 14px;
  color: #fff;
  cursor: pointer;
  transition: all .5s ease;
  &:hover {
    box-shadow: 0px 4px 14px #346BEA;
  }
`

const PopularContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px
`
const PopularTitle = styled.h1`
  font-weight: 700;
  font-size: 26px;
`
const PopularRow = styled.div`
  display: flex;
  gap: 13px;
`
const PopularItem = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 0px 7px 1px rgba(0, 0, 0, 0.25);
  border-radius: 13px;
  padding: 11px 16px 18px 16px;
`
const PopularItemRow = styled.div`
  display: flex;
  gap: 9px;
`
const PopularItemImage = styled(Image)`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 19px;
`
const PopularProfile = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin-top: -44px;
`
const PopularProfileIcon = styled(Image)`
  border-radius: 100%;
  margin: 0 auto;
  width: 62px;
  height: 62px;
  object-fit: cover;
  margin: 0 0 5px;
  box-shadow: 0px 0px 0px 5px #FFFFFF;
`
const PopularProfileName = styled.h2`
  font-weight: 700;
  font-size: 16px;
`
const PopularProfileInfo = styled.p`
  font-weight: 600;
  font-size: 12px;
`
