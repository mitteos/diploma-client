import React from 'react';
import Head from "next/head";
import styled from "styled-components";
import {Navigation} from "@/components/Layout";
// import '@/styles/customScrollBar.css';
import SimpleBar from "simplebar-react";

interface MainLayoutProps {
    variant?: "primary" | "profile" | "message"
    title: string;
    children: React.ReactNode | React.ReactNode[]
}

export const MainLayout: React.FC<MainLayoutProps> = ({title, children, variant = "primary"}) => {
    const pageTitle = `Салют | ${title}`
    return (
        <Container>
            <Head>
                <title>{pageTitle}</title>
            </Head>
            <Navigation />
            {variant === "message"
                ? <MessageContent>
                    {children}
                </MessageContent>
                : <Content $variant={variant}>
                    {children}
                </Content>
            }
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
const MessageContent = styled.div`
  flex: auto;
  border-radius: 32px;
  color: #000;
  margin: 12px 12px 12px 0;
  width: 100%;
  align-self: stretch;
  background: #fff;
`
const Content = styled(SimpleBar)<{$variant: "primary" | "profile" | "message"}>`
  flex: auto;
  background: ${({$variant}) => $variant === "primary" || $variant === "message" ? "#fff" : "#060419"} ;
  border-radius: 32px;
  padding: ${({$variant}) => $variant === "primary" && "50px 60px"};
  color: #000;
  margin: 12px 12px 12px 0;
  width: 100%;
  @media (max-width: 876px) {
    padding-bottom: 100px;
    margin: 12px;
  }
`
