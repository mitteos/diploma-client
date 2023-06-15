import React, {useState} from 'react';
import {SearchForm} from "@/components/Subscription";
import styled from "styled-components";
import {useAppDispatch, useAppSelector} from "@/hooks/redux";
import IsAdminPage from '@/hocs/IsAdminPage';
import { userAsyncActions } from '@/store/features/user';
import {toast, ToastContainer} from "react-toastify";
import {MainLayout} from "@/layouts";

const UsersPage: React.FC = () => {

    const {user, searchUsers} = useAppSelector(state => state.user)
    const dispatch = useAppDispatch()

    const setRole = (role: string, userId: number) => {
        if(user) {
            dispatch(userAsyncActions.setRole({adminId: user.id, role: role, userId: userId}))
                .then((res) => {
                    if(res.type === "user/setRole/fulfilled") {
                        toast.success("Роль изменена")
                    }
                })
        }
    }

    return (
        <MainLayout title="Редактирование прав">
            <Container>
                <ToastContainer
                    closeOnClick
                    position="bottom-center"
                    autoClose={2000}
                />
                <Title>Редактирование прав</Title>
                <SearchForm />
                <List>
                    {!!searchUsers && searchUsers.map(user =>
                        <UserItem key={user.id}>
                            <UserName>{user.name} {user.surname}</UserName>
                            <SelectRole defaultValue={user.role} onChange={(e) => setRole(e.target.value, user.id)}>
                                <option value="USER">Пользователь</option>
                                <option value="ADMIN">Модератор</option>
                            </SelectRole>
                        </UserItem>
                    )}
                </List>

            </Container>
        </MainLayout>
    );
};

export default IsAdminPage(UsersPage);

const Container = styled.div`

`
const Title = styled.h1`
  font-size: 18px;
  font-weight: 700;
  margin: 0 0 15px;
`
const List = styled.div`
  margin: 15px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`
const UserItem = styled.div`
  display: flex;
  transition: all .3s ease;
  padding: 10px 5px;
  align-items: center;
  justify-content: space-between;
  &:hover {
    background: #eeeeee;
  }
`
const UserName = styled.p`
  font-size: 18px;
`
const SelectRole = styled.select`
  padding: 10px;
`
