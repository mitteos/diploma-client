import React, {useState} from 'react';
import {NextPage} from "next";
import styled from "styled-components";
import {Input} from "@/components/UI";
import {SubmitHandler, useForm} from "react-hook-form";
import {emailPattern} from "@/utils/patternsCollection";
import Link from "next/link";
import {AuthForm, Navigation} from "@/components/Auth";
import {useAppDispatch} from "@/hooks/redux";
import { userAsyncActions } from '@/store/features/user';
import {useRouter} from "next/router";

interface LoginFormInputs {
  email: string
  password: string
  name: string
  surname: string
  age: Date
}

const Login: NextPage = () => {

  const {register, formState: {errors}, handleSubmit, getValues} = useForm<LoginFormInputs>()
  const [step, setStep] = useState(1)
  const dispatch = useAppDispatch()
  const {push} = useRouter()

  const registration: SubmitHandler<LoginFormInputs> = (formFields) => {
    if(step === 1) {
      setStep(2)
    }
    if(step === 2) {
      const {email, password, name, age, surname} = formFields
      dispatch(userAsyncActions.register({email, password, name, surname, birthday: age}))
          .then((res) => {
            if (res.meta.requestStatus === "fulfilled") {
              push("/auth/login")
            }
          })
    }
  }


  return (
      <AuthForm>
        <Content>
          <Title>Регистрация</Title>
          <Navigation step={step} setStep={setStep}/>
          <Form onSubmit={handleSubmit(registration)}>
            {step === 1 &&
                <>
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
                        minLength={6}
                        getValues={getValues}
                    />
                    <Button type="submit">Продолжить</Button>
                </>
            }
            {step === 2 &&
                <>
                    <FormInput
                        placeholder="Имя"
                        register={register}
                        name="name"
                        errors={errors.name}
                        required={true}
                        getValues={getValues}
                    />
                    <FormInput
                        placeholder="Фамилия"
                        register={register}
                        name="surname"
                        errors={errors.surname}
                        required={true}
                        getValues={getValues}
                    />
                    <FormInput
                        placeholder="Дата рождения"
                        register={register}
                        name="age"
                        errors={errors.age}
                        required={true}
                        type="date"
                        getValues={getValues}
                    />
                    <Button type="submit">Зарегистрироваться</Button>
                </>
            }
          </Form>
          <Snippet>
            <SnippetText>Уже есть аккаунта?</SnippetText>
            <SnippetLink href="/auth/login">Войти</SnippetLink>
          </Snippet>
        </Content>
      </AuthForm>
  );
};

export default Login;

const Container = styled.div`
  background: #060419;
  min-height: 100vh;
  display: flex;
  justify-content: center;
`
const Content = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-width: 300px;
`
const Bg = styled.div`
  max-width: 664px;
  height: 525px;
  width: 90%;
  position: relative;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`
const Background = styled.div`
  background: rgba(255, 255, 255, 0.07);
  backdrop-filter: blur(30px);
  width: 100%;
  height: 100%;
  border-radius: 54px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
`
const Decoration = styled.div`
  position: absolute;
  border-radius: 100%;
`
const Decoration1 = styled(Decoration)`
  background: #114FEE;
  width: calc(180/664*100%);
  height: calc(180/525*100%);
  top: calc(-33/525*100%);
  left: calc(57/664*100%);
`
const Decoration2 = styled(Decoration)`
  background: linear-gradient(90deg, #306EEA 0%, #306EEA 0.01%, #A200DB 100%);
  width: calc(132/664*100%);
  height: calc(132/525*100%);
  top: calc(45/525*100%);
  right: calc(80/664*100%);
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 35px;
`
const Title = styled.h1`
  font-weight: 700;
  font-size: 28px;
  line-height: 34px;
  color: #fff;
  text-align: center;
`
const FormInput = styled(Input<LoginFormInputs>)`
  width: 100%;
`
const Button = styled.button`
  background: linear-gradient(90deg, #306EEA 0%, #306EEA 0.01%, #A200DB 100%);
  border-radius: 17px;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: #FFFFFF;
  padding: 8px 60px;
  cursor: pointer;
  border: none;
`
const Snippet = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  align-items: center;
`
const SnippetText = styled.p`
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  color: #FFFFFF;
`
const SnippetLink = styled(Link)`
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  color: #114FEE;
`
