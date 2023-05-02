import React from 'react';
import {FeedItem} from "@/components/Feed";
import styled from "styled-components";
import {PostState} from "@/store/features/post/types";

interface FeedListProps {
    items: PostState[]
    variant?: "primary" | "profile"
}

export const FeedList: React.FC<FeedListProps> = ({items, variant = "primary"}) => {

    return (
        <Container>
            {items.length
                ? items?.map(post =>
                    <FeedItem key={post.id} info={post} variant={variant}/>
                )
                : <EmptyTitle>{variant === "primary" ? "Подпишитесь на других пользователей, чтобы видеть больше записей" : "Пользователь еще не добавлял записи"}</EmptyTitle>
            }
        </Container>
    );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
  width: 100%;
`
const EmptyTitle = styled.p`
  font-weight: 600;
  font-size: 16px;
  color: #454545;
`
