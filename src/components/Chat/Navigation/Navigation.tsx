import React from 'react';
import styled from "styled-components";
import {CustomInput} from "@/components/UI";
import {SearchIcon} from "@/assets/svgr";

export const Navigation = () => {
  return (
      <Container>
        <Input placeholder="Search...">
          <SearchIcon />
        </Input>
      </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Input = styled(CustomInput)`
  max-width: 460px;
`
