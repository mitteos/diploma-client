import SvgUploadIcon from "@/assets/svgr/UploadIcon";
import { Input } from "@/components/UI";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { userAsyncActions } from "@/store/features/user";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";

interface EditModalProps {
    setIsEditActive: (e: boolean) => void;
}

interface FormFiels {
    name: string;
    surname: string;
    image: FileList;
    birthday: string;
    status: string;
}

export const EditModal: React.FC<EditModalProps> = ({ setIsEditActive }) => {
    const { user } = useAppSelector((state) => state.user);
    const dispatch = useAppDispatch();
    const {
        register,
        formState: { errors },
        getValues,
        handleSubmit,
    } = useForm<FormFiels>({
        defaultValues: {
            name: user?.name,
            surname: user?.surname,
            birthday: user?.birthday.toString().split("T")[0]
        },
    });

    const editProfile: SubmitHandler<FormFiels> = (formFields) => {
        const { birthday, image, name, surname } = formFields;
        if (user) {
            dispatch(
                userAsyncActions.edit({
                    userId: user.id,
                    birthday: new Date(birthday),
                    image: image[0],
                    name: name,
                    surname: surname,
                })
            ).then((res) => {
                setIsEditActive(false)
            })
        }
    };

    return (
        <Container onClick={() => setIsEditActive(false)}>
            <Content onClick={(e) => e.stopPropagation()}>
                <CloseBtn onClick={() => setIsEditActive(false)}>+</CloseBtn>
                <Title>Редактирование</Title>
                <Form onSubmit={handleSubmit(editProfile)}>
                    <FormInput
                        errors={errors.name}
                        getValues={getValues}
                        name="name"
                        placeholder="Имя"
                        register={register}
                    />
                    <FormInput
                        errors={errors.surname}
                        getValues={getValues}
                        name="surname"
                        placeholder="Фамилия"
                        register={register}
                    />
                    <FormInput
                        errors={errors.birthday}
                        getValues={getValues}
                        type="date"
                        name="birthday"
                        placeholder="День рождения"
                        register={register}
                    />
                    <AddImageButton>
                        <SvgUploadIcon fill="#fff" />
                        <FormImageInput
                            type="file"
                            accept=".png, .jpg, .jpeg"
                            {...register("image")}
                        />
                    </AddImageButton>

                    <SendMailBtn>
                        <SendMailBtnText>Сохранить</SendMailBtnText>
                    </SendMailBtn>
                </Form>
            </Content>
        </Container>
    );
};

const Container = styled.div`
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
`;
const Content = styled.div`
    min-width: 300px;
    position: relative;
    border-radius: 15px;
    background: #fff;
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-self: flex-start;
    margin-top: 50px;
`;
const Title = styled.p`
    font-weight: 700;
    font-size: 28px;
`;
const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
`;
const CloseBtn = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 24px;
    color: #000;
    transform: rotate(45deg);
    transform-origin: center;
    font-weight: 700;
    background: none;
    border: none;
    cursor: pointer;
    &:focus {
        outline: none;
    }
`;
const FormInput = styled(Input<FormFiels>)`
    width: 100%;
`;

const AddImageButton = styled.div`
    background: linear-gradient(90deg, #306eea 0%, #306eea 0.01%, #a200db 100%);
    border-radius: 17px;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 14px;
    color: #fff;
    cursor: pointer;
    transition: all 0.5s ease;
    border: none;
    position: relative;
    &:hover {
        box-shadow: 0px 4px 14px #346bea;
    }
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    cursor: pointer;
`;
const FormImageInput = styled.input`
    position: absolute;
    opacity: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    cursor: pointer;
`;
const SendMailBtn = styled.button`
    padding: 9px 0;
    justify-content: center;
    position: relative;
    border-radius: 26px;
    display: flex;
    align-items: center;
    gap: 19px;
    background: #fff;
    border: none;
    cursor: pointer;
    &::before {
        content: "";
        position: absolute;
        z-index: -1;
        top: -2px;
        left: -2px;
        right: -2px;
        bottom: -2px;
        border-radius: 26px;
        background: linear-gradient(
            90deg,
            #306eea 0%,
            #306eea 0.01%,
            #a200db 100%
        );
    }
`;
const SendMailBtnText = styled.p`
    font-weight: 700;
    font-size: 12px;
    background: linear-gradient(90deg, #306eea 0%, #306eea 0.01%, #a200db 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    transition: all 0.5s ease;
`;
