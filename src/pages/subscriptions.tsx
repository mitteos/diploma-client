import React from 'react';
import {MainLayout} from "@/layouts";
import styled from "styled-components";
import {SearchForm, SubscriptionList} from "@/components/Subscription";

const Subscriptions = () => {
    return (
        <MainLayout title="Подписки">
            <NavigationContainer>
                <Title>Ваши подписки</Title>
                <SearchForm />
            </NavigationContainer>
            <SubscriptionList />
        </MainLayout>
    );
};

export default Subscriptions;

const Title = styled.h1`
  font-weight: 700;
  font-size: 26px;
  color: #000000;
`
const NavigationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 30px;
`
