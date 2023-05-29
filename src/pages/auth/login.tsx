import React from "react";
import { NextPage } from "next";
import styled from "styled-components";
import { Input } from "@/components/UI";
import { SubmitHandler, useForm } from "react-hook-form";
import { emailPattern } from "@/utils/patternsCollection";
import Link from "next/link";
import Image from "next/image";
import DecorationIcon1 from "@/assets/svg/decoration1.svg";
import DecorationIcon2 from "@/assets/svg/decoration2.svg";
import DecorationIcon3 from "@/assets/svg/decoration3.svg";
import DecorationIcon4 from "@/assets/svg/decoration4.svg";
import DecorationIcon5 from "@/assets/svg/decoration5.svg";
import { AuthForm } from "@/components/Auth";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { userAsyncActions } from "@/store/features/user";
import { useRouter } from "next/router";

interface LoginFormInputs {
    email: string;
    password: string;
}

const Login: NextPage = () => {
    const { push } = useRouter();
    const dispatch = useAppDispatch();
    const {
        register,
        formState: { errors },
        handleSubmit,
        getValues,
    } = useForm<LoginFormInputs>();

    const login: SubmitHandler<LoginFormInputs> = (formFields) => {
        const { email, password } = formFields;
        dispatch(userAsyncActions.login({ email, password })).then((res) => {
            if (res.meta.requestStatus === "fulfilled") {
                push("/");
            }
        });
    };

    return (
        <AuthForm>
            <Content onSubmit={handleSubmit(login)}>
                <Title>Авторизация</Title>
                <FormInput
                    placeholder="Email"
                    register={register}
                    name="email"
                    type="email"
                    errors={errors.email}
                    required={true}
                    pattern={emailPattern}
                    getValues={getValues}
                />
                <FormInput
                    placeholder="Пароль"
                    type="password"
                    register={register}
                    name="password"
                    errors={errors.password}
                    required={true}
                    getValues={getValues}
                />
                <Button>Войти</Button>
                <Snippet>
                    <SnippetText>Еще нет аккаунта?</SnippetText>
                    <SnippetLink href="/auth/register">
                        Зарегистрироваться
                    </SnippetLink>
                </Snippet>
            </Content>
        </AuthForm>
    );
};

export default Login;

const Content = styled.form`
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    gap: 35px;
    min-width: 300px;
`;

const Title = styled.h1`
    font-weight: 700;
    font-size: 28px;
    line-height: 34px;
    color: #fff;
    margin: 0 0 20px;
    text-align: center;
`;
const FormInput = styled(Input<LoginFormInputs>)`
    width: 100%;
`;
const Button = styled.button`
    background: linear-gradient(90deg, #306eea 0%, #306eea 0.01%, #a200db 100%);
    border-radius: 17px;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    color: #ffffff;
    padding: 8px 60px;
    cursor: pointer;
    border: none;
`;
const Snippet = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    align-items: center;
`;
const SnippetText = styled.p`
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    color: #ffffff;
`;
const SnippetLink = styled(Link)`
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    color: #114fee;
`;
