import React from 'react';
import Link from "next/link";
import {MainLayout} from "@/layouts";
import styled from "styled-components";
import SvgProfile from "@/assets/svgr/Profile";
import SvgPosts from "@/assets/svgr/Posts";

const AdminPanel = () => {



    return (
        <MainLayout title="Админ панель">
            <Container>
                <Button href="/admin/posts">
                    <SvgPosts fill="#fff" width={27} height={27}/>
                    Редактирование записей
                </Button>
                <Button href="/admin/users">
                    <SvgProfile fill="#fff" />
                    Редактирование прав пользователей
                </Button>
            </Container>
        </MainLayout>
    );
};

export default AdminPanel;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`
const Button = styled(Link)`
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 8px;
  border-radius: 10px;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
  align-self: flex-start;
  color: #fff;
  background: linear-gradient(90deg, #306EEA 0%, #306EEA 0.01%, #A200DB 100%);
`
