import React from 'react';
import {NextPage} from "next";
import {useRouter} from "next/router";
import {MainLayout} from "@/layouts";

const Chat: NextPage = () => {
  const params = useRouter()
  return (
      <MainLayout title="Имя">
        <h1>{params.query.id}</h1>
      </MainLayout>
  );
};

export default Chat;
