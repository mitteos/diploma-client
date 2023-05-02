import React from 'react';
import styled from "styled-components";
import {SubscriptionItem} from "@/components/Subscription";
import {useAppSelector} from "@/hooks/redux";

export const SubscriptionList = () => {

    const {searchUsers} = useAppSelector(state => state.user)
    const {mySubscriptions} = useAppSelector(state => state.subscription)

    return (
        <Container>
            {searchUsers
                ? searchUsers.length
                    ? searchUsers.map(sub =>
                        <SubscriptionItem key={sub.id} info={sub}/>
                    )
                    : <EmptyText>Пользователи с таким именем не найдены</EmptyText>
                : mySubscriptions
                    ? !!mySubscriptions.length && mySubscriptions.map(sub =>
                    <SubscriptionItem key={sub.id} info={sub}/>
                )
                    : <EmptyText>Вы еще не подписаны</EmptyText>
            }
        </Container>
    );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`
const EmptyText = styled.p`
  font-weight: 600;
  font-size: 16px;
  color: #454545;
`
