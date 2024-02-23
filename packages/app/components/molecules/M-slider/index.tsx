import { View } from "@my/ui";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "./styles.css";
import { M_SliderCard } from "../../atoms/M-slider-card";

const M_Slider = () => {
  return (
    <View pos="relative">
      <Swiper
        spaceBetween={10}
        slidesPerView={1.5}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        breakpoints={{
          768: {
            slidesPerView: 2.5,
          },
        }}
      >
        <SwiperSlide>
          <M_SliderCard />
        </SwiperSlide>
        <SwiperSlide>
          <M_SliderCard />
        </SwiperSlide>
        <SwiperSlide>
          <M_SliderCard />
        </SwiperSlide>
        <SwiperSlide>
          <M_SliderCard />
        </SwiperSlide>
        <SwiperSlide>
          <M_SliderCard />
        </SwiperSlide>
        <SwiperSlide>
          <M_SliderCard />
        </SwiperSlide>
        <SwiperSlide>
          <M_SliderCard />
        </SwiperSlide>
        <SwiperSlide>
          <M_SliderCard />
        </SwiperSlide>
      </Swiper>
    </View>
  );
};

export { M_Slider };
