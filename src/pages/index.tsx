import {MainLayout} from "@/layouts";
import {PopularList} from "@/components/Popular";
import {Title} from "@/components/UI";
import {AddPostForm, FeedList} from "@/components/Feed";

const HomePage = () => {
    return (
        <MainLayout title="Home">
            <Title>Most popular</Title>
            <PopularList />
            <Title>Feed</Title>
            <AddPostForm />
            <FeedList />
        </MainLayout>
    );
};

export default HomePage;
