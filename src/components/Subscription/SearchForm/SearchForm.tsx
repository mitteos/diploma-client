import React, {useEffect} from 'react';
import styled from "styled-components";
import {SubmitHandler, useForm} from "react-hook-form";
import {Input} from "@/components/UI";
import {throttle} from "@/utils/throttle";
import {useAppDispatch, useAppSelector} from "@/hooks/redux";
import {userActions, userAsyncActions} from '@/store/features/user';
import {subscriptionAsyncActions} from '@/store/features/subscription';

interface SearchFormFields {
    username: string
}

export const SearchForm = () => {
    const {register, formState: {errors}, handleSubmit, getValues, watch} = useForm<SearchFormFields>()
    const dispatch = useAppDispatch()
    const {user} = useAppSelector(state => state.user)

    const searchUsers = () => {
        dispatch(userAsyncActions.search({username: getValues("username")}))
    }

    const throttledSearch = throttle(searchUsers, 1000)

    const search: SubmitHandler<SearchFormFields> = (formFields) => {
        throttledSearch()
    }

    const handleClearClick = () => {
        if(user) {
            dispatch(userActions.clearSearchUsers())
            dispatch(subscriptionAsyncActions.getAll({userId: user.id}))
        }
    }

    useEffect(() => {
        const subscription = watch(() => handleSubmit(search)())
        return () => subscription.unsubscribe();
    }, [handleSubmit, watch])

    return (
        <Container>
            <FormInput
                register={register}
                name="username"
                errors={errors.username}
                getValues={getValues}
                placeholder="Начните вводить имя"
            />
            <ClearBtn onClick={handleClearClick}>Очистить</ClearBtn>
        </Container>
    );
};

const Container = styled.form`
  display: flex;
  align-items: center;
  gap: 15px;
`
const FormInput = styled(Input<SearchFormFields>)`
  background: #FFFFFF;
  box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.25);
`
const ClearBtn = styled.div`
  cursor: pointer;
  padding: 13px 20px;
  background: linear-gradient(90deg, #306EEA 0%, #306EEA 0.01%, #A200DB 100%);
  box-shadow: 0px 4px 14px #346BEA;
  border-radius: 32px;
  font-weight: 700;
  font-size: 14px;
  color: #FFFFFF;
`
