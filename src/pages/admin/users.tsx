import React from 'react';
import {SearchForm} from "@/components/Subscription";
import styled from "styled-components";
import {useAppSelector} from "@/hooks/redux";

const UsersPage: React.FC = () => {

    const {searchUsers} = useAppSelector(state => state.user)

    return (
        <Container>
            <Title>Редактирование прав</Title>
            <SearchForm />
            {!!searchUsers && searchUsers.map(user =>
               <div key={user.id}>{user.name} {user.surname}</div>
            )}
        </Container>
    );
};

export default UsersPage;

const Container = styled.div`
  padding: 20px;
`
const Title = styled.h1`
  font-size: 18px;
  font-weight: 700;
  margin: 0 0 15px;
`
