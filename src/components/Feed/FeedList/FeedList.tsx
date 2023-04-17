import React from 'react';
import {FeedItem} from "@/components/Feed";
import styled from "styled-components";

export const FeedList = () => {
    return (
        <Container>
            <FeedItem />
            <FeedItem />
            <FeedItem />
            <FeedItem />
            <FeedItem />
            <FeedItem />
            <FeedItem />
        </Container>
    );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
`
