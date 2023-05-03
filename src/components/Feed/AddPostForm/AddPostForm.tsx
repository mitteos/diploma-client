import React from 'react';
import styled from "styled-components";
import SvgAdd from "@/assets/svgr/Add";
import {CustomInput, Input} from "@/components/UI";
import {SubmitHandler, useForm} from "react-hook-form";
import {useAppDispatch, useAppSelector} from "@/hooks/redux";
import { postAsyncActions } from '@/store/features/post';
import SvgUploadIcon from "@/assets/svgr/UploadIcon";

interface AddPostFormFields {
    content: string;
    image: FileList;
}

export const AddPostForm = () => {

    const {register, formState: {errors}, handleSubmit, getValues, reset} = useForm<AddPostFormFields>()
    const dispatch = useAppDispatch()
    const {user} = useAppSelector(state => state.user)

    const createPost: SubmitHandler<AddPostFormFields> = (formFields) => {
        const {content, image} = formFields
        dispatch(postAsyncActions.create({content, userId: user?.id, image: image[0]}))
            .then((res) => {
                dispatch(postAsyncActions.getFeed({userId: user?.id}))
                reset()
            })
    }

    return (
        <AddPostContainer onSubmit={handleSubmit(createPost)}>
            <FormInput
                placeholder="Текст записи"
                register={register}
                name="content"
                errors={errors.content}
                getValues={getValues}
                required
            />
            <AddImageButton>
                <SvgUploadIcon fill="#fff"/>
                <FormImageInput
                    type="file"
                    accept=".png, .jpg, .jpeg"
                    {...register("image")}
                />
            </AddImageButton>
            <AddPostButton>Добавить</AddPostButton>
        </AddPostContainer>
    );
};

const AddPostContainer = styled.form`
  display: flex;
  align-items: center;
  gap: 20px;
  max-width: 900px;
  margin: 15px 0 38px;
  @media (max-width: 600px) {
    flex-direction: column;
    border-bottom: 1px solid rgba(0,0,0,0.5);
    padding-bottom: 20px;
  }
`

const AddPostButton = styled.button`
  background: linear-gradient(90deg, #306EEA 0%, #306EEA 0.01%, #A200DB 100%);
  border-radius: 17px;
  padding: 13px 65px;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 14px;
  color: #fff;
  cursor: pointer;
  transition: all .5s ease;
  border: none;
  &:hover {
    box-shadow: 0px 4px 14px #346BEA;
  }
  @media (max-width: 800px) {
    padding: 13px 25px;
  }
  @media (max-width: 600px) {
    align-self: stretch;
  }
`
const AddImageButton = styled.div`
  background: linear-gradient(90deg, #306EEA 0%, #306EEA 0.01%, #A200DB 100%);
  border-radius: 17px;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 14px;
  color: #fff;
  cursor: pointer;
  transition: all .5s ease;
  border: none;
  position: relative;
  &:hover {
    box-shadow: 0px 4px 14px #346BEA;
  }
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 600px) {
    align-self: stretch;
  }
`
const FormImageInput = styled.input`
  position: absolute;
  opacity: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  cursor: pointer;
`
const FormInput = styled(Input<AddPostFormFields>)`
  width: 100%;
  background: #FFFFFF;
  box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.25);
`
