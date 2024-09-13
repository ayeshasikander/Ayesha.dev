import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import "../../style/cardsLayout/cardSlide.scss";
import ProjectCard from "./ProjectCard";
import { Typography } from "antd";

export default function ProjectSlides() {
  return (
    <>
    {/* <Typography>My Portfolio Projects</Typography> */}
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        // autoplay={{
        //   delay: 1000,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          clickable: true,
          

        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination,
          //  Autoplay
          ]}
        className="mySwiper"
      >
        <SwiperSlide>
          <ProjectCard />
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
