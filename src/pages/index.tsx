import { MainLayout } from "@/layouts";
import { PopularList } from "@/components/Popular";
import { Title } from "@/components/UI";
import { AddPostForm, FeedList } from "@/components/Feed";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { postAsyncActions } from "@/store/features/post";
import { useEffect } from "react";
import { userAsyncActions } from "@/store/features/user";

const HomePage = () => {
    const dispatch = useAppDispatch();
    const { posts } = useAppSelector((state) => state.post);
    const { user } = useAppSelector((state) => state.user);

    useEffect(() => {
        if (user?.id) {
            dispatch(postAsyncActions.getFeed({ userId: user?.id }));
            dispatch(userAsyncActions.getPopularUsers())
        }
    }, []);

    return (
        <MainLayout title="Home">
            <Title>Популярные пользователи</Title>
            <PopularList />
            <Title>Лента новостей</Title>
            <AddPostForm />
            <FeedList items={posts} />
        </MainLayout>
    );
};

export default HomePage;
