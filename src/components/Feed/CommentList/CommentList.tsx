import { PostState } from "@/store/features/post/types";
import React from "react";
import styled from "styled-components";
import { AddCommentForm } from "../AddCommentForm";
import { CommentItem } from "../CommentItem";

interface CommentListProps {
    postInfo: PostState;
}

export const CommentList: React.FC<CommentListProps> = ({ postInfo }) => {
    return (
        <div>
            <Title>Комментарии</Title>
            <AddCommentForm postInfo={postInfo} />
            <List>
                {postInfo.comments.map((comment) => (
                    <CommentItem key={comment.id} info={comment} />
                ))}
            </List>
        </div>
    );
};

const Title = styled.p`
    margin-bottom: 15px;
`;
const List = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`