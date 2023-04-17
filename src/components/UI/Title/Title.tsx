import styled from "styled-components";
import React from "react";

interface TitleProps {
    children: React.ReactNode
}
export const Title: React.FC<TitleProps> = ({children}) => {
    return (
        <Text>
            {children}
        </Text>
    );
};
const Text = styled.h1`
  font-weight: 700;
  font-size: 26px;
`
