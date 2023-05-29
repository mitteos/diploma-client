import React, {useState} from 'react';
import {MainLayout} from "@/layouts";
import {SubmitHandler, useForm} from "react-hook-form";
import {Input} from "@/components/UI";
import styled from "styled-components";
import {PostState} from "@/store/features/post/types";
import {FeedItem} from "@/components/Feed";
import {$query} from "@/http";

interface FormFields {
    content: string;
}

const AdminPostsPage = () => {

    const {register, formState: {errors}, getValues, handleSubmit} = useForm<FormFields>()
    const [posts, setPosts] = useState<PostState[]>([]);

    const search: SubmitHandler<FormFields> = async (formData) => {
        const {data} = await $query.get("/post/search", {params: {content: formData.content}})
        setPosts(data)
    }

    return (
        <MainLayout title="Редактирование">
            <Title>Редактирование постов</Title>
            <Form onSubmit={handleSubmit(search)}>
                <FormInput placeholder="Контент записи" register={register} name="content" errors={errors.content} getValues={getValues} required />
                <Button>найти</Button>
            </Form>
            <Container>
                {!!posts.length && posts.map(post =>
                    <FeedItem key={post.id} info={post} isAdmin={true}/>
                )}
            </Container>
        </MainLayout>
    );
};

export default AdminPostsPage;

const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 10px;
`
const FormInput = styled(Input<FormFields>)`
  width: 100%;
  box-shadow: 0px 4px 18px rgba(0,0,0,0.25);
`
const Title = styled.h1`
  margin: 0 0 15px;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 25px 0 0 0;
`
const Button = styled.button`
  padding: 10px 25px;
  background: none;
  border: 2px solid #114FEE;
  border-radius: 15px;
  cursor: pointer;
  transition: all .3s ease;
  &:hover {
    background: #114FEE;
    color: #fff;
  }
`
