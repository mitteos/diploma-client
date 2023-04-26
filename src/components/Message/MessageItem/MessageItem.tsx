import React from 'react';
import styled from "styled-components";

interface MessageItemProps {
    isMyMessage: boolean
}

export const MessageItem: React.FC<MessageItemProps> = ({isMyMessage}) => {
    return (
        <Container $isMyMessage={isMyMessage}>
            <Item>
                <Text>Lorem ipsum dolor sit amet.</Text>
                <Time>22:32</Time>
            </Item>
        </Container>
    );
};

const Container = styled.div<{$isMyMessage: boolean}>`
  width: 100%;
  display: flex;
  justify-content: ${({$isMyMessage}) => $isMyMessage ? "flex-end" : "flex-start"};
`
const Item = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background: #fff;
  box-shadow: 4px 8px 18px 0px rgba(34, 60, 80, 0.2);
  padding: 10px;
`
const Text = styled.p`
  font-size: 14px;
  font-weight: 400;
`
const Time = styled.p`
  font-size: 12px;
  color: #9a9a9a;
`
