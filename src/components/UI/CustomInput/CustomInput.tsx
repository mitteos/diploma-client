import React from 'react';
import styled from "styled-components";

interface CustomInputProps {
  placeholder: string
  className?: string
  children: React.ReactNode
}

export const CustomInput: React.FC<CustomInputProps> = ({placeholder, className, children}) => {
    return (
        <Container className={className}>
            <Input placeholder={placeholder}/>
            <Button>
              {children}
            </Button>
        </Container>
    );
};

const Container = styled.div`
  position: relative;
  width: 100%;
`
const Input = styled.input`
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
const Button = styled.div`
  position: absolute;
  top: 50%;
  right: 25px;
  transform: translateY(-50%);
  cursor: pointer;
`
