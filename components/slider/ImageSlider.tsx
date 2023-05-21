"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import SwiperCore from "swiper";
import "swiper/css";
import { videos } from "@/constants/index";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useCallback, useState } from "react";
import Image from "next/image";

const ImageSlider = () => {
  const [swiperRef, setSwiperRef] = useState<SwiperCore>();

  const handlePrevious = useCallback(() => {
    swiperRef!.slidePrev();
  }, [swiperRef]);

  const handleNext = useCallback(() => {
    swiperRef?.slideNext();
  }, [swiperRef]);

  SwiperCore.use([Autoplay, Navigation]);

  return (
    <div className=" mt-10 px-4">
      <Swiper
        breakpoints={{
          320: { slidesPerView: 1.3, spaceBetween: 10 },
          480: { slidesPerView: 2.6, spaceBetween: 10 },
          600: { slidesPerView: 3 },
        }}
        preventClicksPropagation={false}
        preventClicks={true}
        allowTouchMove
        freeMode
        centeredSlides
        centeredSlidesBounds
        onSwiper={setSwiperRef}
        modules={[Autoplay, Navigation]}
        spaceBetween={10}
        autoplay={{
          delay: 2000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        loop
      >
        {videos.map((video, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center justify-center space-y-2 ">
              <Image
                src={video.image}
                alt={video.title}
                className="w-full h-full"
              />
              <p className="text-[13px] text-muted-foreground">{video.title}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;