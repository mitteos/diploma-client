import React from 'react';
import styled from "styled-components";
import {SubmitHandler, useForm} from "react-hook-form";
import {Input} from "@/components/UI";

interface MessageFields {
    message: string
}

export const MessageForm = () => {

    const {register, formState: {errors}, getValues, handleSubmit} = useForm<MessageFields>()

    const handleSendMessage: SubmitHandler<MessageFields> = (formFields) => {
        alert(JSON.stringify(formFields))
    }

    return (
        <Container onSubmit={handleSubmit(handleSendMessage)}>
            <FormInput
                placeholder="Введите сообщение"
                register={register} name="message"
                errors={errors.message}
                getValues={getValues}
                required
            />
            <Button>Отправить</Button>
        </Container>
    );
};

const Container = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 10px;
  margin-top: 15px;
`
const FormInput = styled(Input<MessageFields>)`
  width: 100%;
  box-shadow: 4px 8px 18px 0px rgba(34, 60, 80, 0.2);
`
const Button = styled.button`
  font-weight: 600;
  font-size: 14px;
  color: #FFFFFF;
  padding: 12px 25px;
  background: linear-gradient(90deg, #306EEA 0%, #306EEA 0.01%, #A200DB 100%);
  border-radius: 15px;
  border: none;
  cursor: pointer;
`
