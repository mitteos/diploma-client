import React from 'react';
import Head from "next/head";
import styled from "styled-components";
import {Navigation} from "@/components/Layout";
// import '@/styles/customScrollBar.css';
import SimpleBar from "simplebar-react";

interface MainLayoutProps {
    variant?: "primary" | "profile"
    title: string;
    children: React.ReactNode | React.ReactNode[]
}

export const MainLayout: React.FC<MainLayoutProps> = ({title, children, variant = "primary"}) => {
    const pageTitle = `AirShot | ${title}`
    return (
        <Container>
            <Head>
                <title>{pageTitle}</title>
            </Head>
            <Navigation />
            <Content $variant={variant}>
                {children}
            </Content>
        </Container>
    );
};

const Container = styled.div`
  background: #060419;
  color: #fff;
  min-height: 100vh;
  max-height: 100vh;
  display: flex;
  overflow: hidden;
`
const Content = styled(SimpleBar)<{$variant: "primary" | "profile"}>`
  flex: auto;
  background: ${({$variant}) => $variant === "primary" ? "#fff" : "#060419"} ;
  border-radius: 32px;
  padding: ${({$variant}) => $variant === "primary" && "50px 60px"};
  color: #000;
  margin: 12px 12px 12px 0;
  width: 100%;
`
