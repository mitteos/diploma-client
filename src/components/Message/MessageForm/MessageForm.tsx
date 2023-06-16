import React, { MutableRefObject } from "react";
import styled from "styled-components";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from "@/components/UI";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { useRouter } from "next/router";
import { messageAsyncActions } from "@/store/features/message";
import SvgSendButton from "@/assets/svgr/SendButton";
import { chatAsyncActions } from "@/store/features/chat";

interface MessageFields {
    message: string;
}

interface MessageFormProps {
    socket: MutableRefObject<WebSocket | undefined>;
}

export const MessageForm: React.FC<MessageFormProps> = ({ socket }) => {
    const {
        register,
        formState: { errors },
        getValues,
        handleSubmit,
        reset,
    } = useForm<MessageFields>();
    const { user } = useAppSelector((state) => state.user);
    const { query } = useRouter();
    const dispatch = useAppDispatch();

    const handleSendMessage: SubmitHandler<MessageFields> = (formFields) => {
        if (user && query.chatId) {
            const message = {
                id: Date.now(),
                event: "message",
                content: formFields.message,
                chatId: +query.chatId,
                userId: user.id,
                createdAt: Date.now(),
            };
            socket.current?.send(JSON.stringify(message));
            dispatch(
                messageAsyncActions.create({
                    content: formFields.message,
                    userId: user.id,
                    chatId: +query.chatId,
                })
            )
                .then(() => {
                    dispatch(chatAsyncActions.getAll({userId: user.id}))
                })
            ;
            reset();
        }
    };

    return (
        <Container onSubmit={handleSubmit(handleSendMessage)}>
            <FormInput
                placeholder="Введите сообщение"
                register={register}
                name="message"
                errors={errors.message}
                getValues={getValues}
                required
            />
            <Button>
                <p>Отправить</p>
                <SvgSendButton fill="#fff" />
            </Button>
        </Container>
    );
};

const Container = styled.form`
    display: flex;
    align-items: center;
    width: 100%;
    gap: 10px;
    margin-top: 15px;
`;
const FormInput = styled(Input<MessageFields>)`
    width: 100%;
    box-shadow: 4px 8px 18px 0px rgba(34, 60, 80, 0.2);
`;
const Button = styled.button`
    font-weight: 600;
    font-size: 14px;
    color: #ffffff;
    padding: 12px 25px;
    background: linear-gradient(90deg, #306eea 0%, #306eea 0.01%, #a200db 100%);
    border-radius: 15px;
    border: none;
    cursor: pointer;
    svg {
        display: none;
    }
    @media (max-width: 450px) {
        svg {
            display: block;
            width: 20px;
            height: 20px;
        }
        p {
            display: none;
        }
        padding: 10px 10px 10px 7px;
    }
`;
