import { Swiper as SwiperContainer, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import logo1 from "/image/l1.svg";
import logo2 from "/image/l2.svg";
import logo3 from "/image/l3.svg";
import logo4 from "/image/l1.svg";
import logo5 from "/image/l2.svg";
import logo6 from "/image/l3.svg";


export default function Swiper() {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

  return (
    <div className="w-full h-18 flex items-center px-4 my-7">
      <SwiperContainer
        modules={[Autoplay]}
        slidesPerView={5}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
        className="w-full"
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <img src={logo} alt={`logo-${index}`} className="h-10 object-contain" />
          </SwiperSlide>
        ))}
      </SwiperContainer>
    </div>
  );
}
