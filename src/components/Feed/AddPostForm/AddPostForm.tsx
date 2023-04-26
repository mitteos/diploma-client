import React from 'react';
import styled from "styled-components";
import SvgAdd from "@/assets/svgr/Add";
import {CustomInput} from "@/components/UI";

export const AddPostForm = () => {
    return (
        <AddPostContainer>
            <CustomInput placeholder="New post">
              <SvgAdd fill="#696969" />
            </CustomInput>
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
