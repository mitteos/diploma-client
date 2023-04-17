import React from 'react';
import styled from "styled-components";
import SvgAdd from "@/assets/svgr/Add";

export const AddPostForm = () => {
    return (
        <AddPostContainer>
            <CustomInputContainer>
                <CustomInput placeholder="New post..."/>
                <CustomInputButton fill="#696969" />
            </CustomInputContainer>
            <AddPostButton>post</AddPostButton>
        </AddPostContainer>
    );
};

const AddPostContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 39px;
  max-width: 700px;
  margin: 15px 0 38px;
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
