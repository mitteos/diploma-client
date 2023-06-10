import {Swiper, SwiperSlide} from "swiper/react";
import {PopularItem} from "@/components/Popular";
import "swiper/swiper.css"
import styled from "styled-components";
import {useAppSelector} from "@/hooks/redux";

export const PopularList = () => {

    const {popularUsers} = useAppSelector(state => state.user)

    return (
        <Container
            slidesPerView="auto"
            spaceBetween={13}
            freeMode={true}
            slidesOffsetBefore={60}
            slidesOffsetAfter={60}
        >
            {!!popularUsers && popularUsers.map(user =>
                <SwiperSlide key={user.id} style={SlideStyle}>
                    <PopularItem info={user} />
                </SwiperSlide>
            )}
        </Container>
    );
};

const Container = styled(Swiper)`
  padding: 20px 0;
  margin: 0 -60px 30px -60px;
  box-shadow: -29px 0px 23px 0px rgba(255, 255, 255, 0.73) inset;
  @media(max-width: 500px) {
    margin: 0 -20px 30px -60px;
  }
`
const SlideStyle = {
    width: "240px"
}
