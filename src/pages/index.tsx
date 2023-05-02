import {MainLayout} from "@/layouts";
import {PopularList} from "@/components/Popular";
import {Title} from "@/components/UI";
import {AddPostForm, FeedList} from "@/components/Feed";
import * as process from "process";
import {useAppDispatch, useAppSelector} from "@/hooks/redux";
import { postAsyncActions } from "@/store/features/post";
import {useEffect} from "react";

const HomePage = () => {

    const dispatch = useAppDispatch()
    const {posts} = useAppSelector(state => state.post)
    const {user} = useAppSelector(state => state.user)

    useEffect(() => {
        if(user?.id) {
            dispatch(postAsyncActions.getFeed({userId: user?.id}))
        }
    }, [])

    return (
        <MainLayout title="Home">
            <Title>Most popular</Title>
            <PopularList />
            <Title>Лента новостей</Title>
            <AddPostForm />
            <FeedList items={posts}/>
        </MainLayout>
    );
};

export default HomePage;
