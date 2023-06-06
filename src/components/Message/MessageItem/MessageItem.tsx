import React from 'react';
import styled from "styled-components";

interface MessageItemProps {
    isMyMessage: boolean
    content: string
    date: Date
}

export const MessageItem: React.FC<MessageItemProps> = ({isMyMessage, content, date}) => {

    const currentDate = new Date(date)
    const messDate = {
        hour: currentDate.getHours() < 10 ? `0${currentDate.getHours()}` : currentDate.getHours(),
        minutes: currentDate.getMinutes() < 10 ? `0${currentDate.getMinutes()}` : currentDate.getMinutes()
    }

    return (
        <Container $isMyMessage={isMyMessage}>
            <Item $isMyMessage={isMyMessage}>
                <Text>{content}</Text>
                <Time>{messDate.hour}:{messDate.minutes}</Time>
            </Item>
            {isMyMessage
                ? <AppendixRight>
                    <svg width="9" height="20" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <filter x="-50%" y="-14.7%" width="200%" height="141.2%" filterUnits="objectBoundingBox" id="a">
                                <feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                                <feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1"
                                                result="shadowBlurOuter1"></feGaussianBlur>
                                <feColorMatrix
                                    values="0 0 0 0 0.0621962482 0 0 0 0 0.138574144 0 0 0 0 0.185037364 0 0 0 0.15 0"
                                    in="shadowBlurOuter1"></feColorMatrix>
                            </filter>
                        </defs>
                        <g fill="none" fillRule="evenodd">
                            <path
                                d="M6 17H0V0c.193 2.84.876 5.767 2.05 8.782.904 2.325 2.446 4.485 4.625 6.48A1 1 0 016 17z"
                                fill="#000" filter="url(#a)"></path>
                            <path
                                d="M6 17H0V0c.193 2.84.876 5.767 2.05 8.782.904 2.325 2.446 4.485 4.625 6.48A1 1 0 016 17z"
                                fill="#fff" className="corner"></path>
                        </g>
                    </svg>
                </AppendixRight>
                : <AppendixLeft>
                    <svg width="9" height="20" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <filter x="-50%" y="-14.7%" width="200%" height="141.2%" filterUnits="objectBoundingBox" id="a">
                                <feOffset dy="1" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                                <feGaussianBlur stdDeviation="1" in="shadowOffsetOuter1"
                                                result="shadowBlurOuter1"></feGaussianBlur>
                                <feColorMatrix
                                    values="0 0 0 0 0.0621962482 0 0 0 0 0.138574144 0 0 0 0 0.185037364 0 0 0 0.15 0"
                                    in="shadowBlurOuter1"></feColorMatrix>
                            </filter>
                        </defs>
                        <g fill="none" fillRule="evenodd">
                            <path
                                d="M3 17h6V0c-.193 2.84-.876 5.767-2.05 8.782-.904 2.325-2.446 4.485-4.625 6.48A1 1 0 003 17z"
                                fill="#000" filter="url(#a)"></path>
                            <path
                                d="M3 17h6V0c-.193 2.84-.876 5.767-2.05 8.782-.904 2.325-2.446 4.485-4.625 6.48A1 1 0 003 17z"
                                fill="#FFF" className="corner"></path>
                        </g>
                    </svg>
                </AppendixLeft>
            }
        </Container>
    );
};

const Container = styled.div<{$isMyMessage: boolean}>`
  width: 100%;
  display: flex;
  justify-content: ${({$isMyMessage}) => $isMyMessage ? "flex-end" : "flex-start"};
  position: relative;
`
const Item = styled.div<{$isMyMessage: boolean}>`
  display: flex;
  flex-direction: column;
  border-radius: ${({$isMyMessage}) => $isMyMessage ? "10px 10px 0px 10px" : "10px 10px 10px 0"};
  background: #fff;
  box-shadow: 4px 8px 18px 0px rgba(34, 60, 80, 0.2);
  padding: 10px;
`
const Text = styled.p`
  font-size: 14px;
  font-weight: 400;
  max-width: 490px;
`
const Time = styled.p`
  font-size: 12px;
  color: #9a9a9a;
  text-align: right;
`
const AppendixRight = styled.div`
  position: absolute;
  right: -7px;
  bottom: 0;
  width: 7px;
  height: 17px;
`
const AppendixLeft = styled(AppendixRight)`
  left: -7px;
`
