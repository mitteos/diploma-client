import React from 'react';
import Head from "next/head";
import styled from "styled-components";
import {Navigation} from "@/components/Layout";

interface MainLayoutProps {
    title: string;
    children: React.ReactNode | React.ReactNode[]
}

export const MainLayout: React.FC<MainLayoutProps> = ({title, children}) => {
    return (
        <Container>
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&display=swap" rel="stylesheet" />
                <title>AirShot | {title}</title>
            </Head>
            <Navigation />
            <Content>
                {children}
            </Content>
        </Container>
    );
};

const Container = styled.div`
  background: #060419;
  color: #fff;
  min-height: 100vh;
  display: flex;
`
const Content = styled.div`
  flex: auto;
  background: #fff;
  border-radius: 32px;
  padding: 50px 60px;
  color: #000;
  margin: 12px 8px 12px 0;
  overflow-x: hidden;
`
