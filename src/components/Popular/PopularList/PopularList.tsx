import {Swiper, SwiperSlide} from "swiper/react";
import {PopularItem} from "@/components/Popular";
import "swiper/swiper.css"
import styled from "styled-components";

export const PopularList = () => {
    return (
        <Container
            slidesPerView="auto"
            spaceBetween={13}
            freeMode={true}
            slidesOffsetBefore={60}
            slidesOffsetAfter={60}
            loop={true}
        >
            <SwiperSlide style={SlideStyle}>
                <PopularItem />
            </SwiperSlide>
            <SwiperSlide style={SlideStyle}>
                <PopularItem />
            </SwiperSlide>
            <SwiperSlide style={SlideStyle}>
                <PopularItem />
            </SwiperSlide>
            <SwiperSlide style={SlideStyle}>
                <PopularItem />
            </SwiperSlide>
            <SwiperSlide style={SlideStyle}>
                <PopularItem />
            </SwiperSlide>
            <SwiperSlide style={SlideStyle}>
                <PopularItem />
            </SwiperSlide>
            <SwiperSlide style={SlideStyle}>
                <PopularItem />
            </SwiperSlide>
            <SwiperSlide style={SlideStyle}>
                <PopularItem />
            </SwiperSlide>
            <SwiperSlide style={SlideStyle}>
                <PopularItem />
            </SwiperSlide>
        </Container>
    );
};

const Container = styled(Swiper)`
  padding: 20px 0;
  margin: 0 -60px 0 -60px;
  box-shadow: -29px 0px 23px 0px rgba(255, 255, 255, 0.73) inset;
`
const SlideStyle = {
    width: "240px"
}
