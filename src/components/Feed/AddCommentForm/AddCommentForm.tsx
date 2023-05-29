import { Input } from "@/components/UI";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { commentAsyncActions } from "@/store/features/comment";
import { postAsyncActions } from "@/store/features/post";
import { PostState } from "@/store/features/post/types";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
import {useRouter} from "next/router";

interface AddCommentFormProps {
    postInfo: PostState
}

interface FormFields {
    content: string;
}

export const AddCommentForm: React.FC<AddCommentFormProps> = ({postInfo}) => {

    const {user} = useAppSelector(state => state.user)
    const dispatch = useAppDispatch()
    const {pathname} = useRouter()


    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues,
        reset
    } = useForm<FormFields>();

    const create: SubmitHandler<FormFields> = (formData) => {
        if(user) {
            dispatch(commentAsyncActions.create({postId: postInfo.id, content: formData.content, userId: user.id}))
            .then((res) => {
                if(pathname === "/profile") {
                    dispatch(postAsyncActions.getUser({userId: user.id}))
                } else {
                    dispatch(postAsyncActions.getFeed({userId: user.id}))
                }
                reset()
            })
        }
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit(create)}>
                <FormInput
                    register={register}
                    getValues={getValues}
                    required
                    name="content"
                    placeholder="Комментарий"
                    errors={errors.content}
                />
                <AddPostButton>Добавить</AddPostButton>
            </Form>
        </Container>
    );
};

const Container = styled.div``;
const Form = styled.form`
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 15px;
`;
const FormInput = styled(Input<FormFields>)`
    width: 100%;
    box-shadow: 0px 4px 18px rgba(0,0,0,0.15);
`;
const AddPostButton = styled.button`
    background: linear-gradient(90deg, #306eea 0%, #306eea 0.01%, #a200db 100%);
    border-radius: 17px;
    padding: 13px 35px;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 12px;
    color: #fff;
    cursor: pointer;
    transition: all 0.5s ease;
    border: none;
    &:hover {
        box-shadow: 0px 4px 14px #346bea;
    }
    @media (max-width: 800px) {
        padding: 13px 25px;
    }
    @media (max-width: 600px) {
        align-self: stretch;
    }
`;
