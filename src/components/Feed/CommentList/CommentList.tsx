import { PostState } from "@/store/features/post/types";
import React, {useState} from "react";
import styled from "styled-components";
import { AddCommentForm } from "../AddCommentForm";
import { CommentItem } from "../CommentItem";

interface CommentListProps {
    postInfo: PostState;
}

export const CommentList: React.FC<CommentListProps> = ({ postInfo }) => {

    const [isLimit, setIsLimit] = useState<boolean>(true);

    return (
        <div>
            <Title>Комментарии</Title>
            <AddCommentForm postInfo={postInfo} />
            <List>
                {postInfo.comments.slice(0, isLimit ? 1 : postInfo.comments.length).map((comment) => (
                    <CommentItem key={comment.id} info={comment} />
                ))}
            </List>
            {postInfo.comments.length > 1
                && <LimitBtn onClick={() => setIsLimit(!isLimit)}>{isLimit ? "Показать все" : "Скрыть"}</LimitBtn>
            }

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
const LimitBtn = styled.button`
  border: none;
  background: none;
  padding: 0;
  font-size: 12px;
  cursor: pointer;
  margin: 10px 0 0 0;
  color: #114FEE;
`
