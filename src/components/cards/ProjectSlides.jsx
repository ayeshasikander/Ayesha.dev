import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import "../../style/cardsLayout/cardSlide.scss";
import ProjectCard from "./ProjectCard";
import { Practice } from "./portfolio";

export default function ProjectSlides() {
  return (
    <>
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
        modules={[
          Pagination,
          //  Autoplay
        ]}
        className="mySwiper"
      >
        {Practice.map((item) => (
          <SwiperSlide key={item.id}>
            <ProjectCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
