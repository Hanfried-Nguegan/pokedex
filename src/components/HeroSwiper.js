import Image from "next/image";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import {
  BackArrow,
  ForwardArrow,
  lightning,
  pichu,
  pikachu,
  raichu,
} from "@/images";

SwiperCore.use([Navigation]);

const HeroSwiper = () => {
  const swiperRef = useRef(null);

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div className="relative w-[240px] min-h-[265px] lg:min-h-[300px] bg-pokemonYellow p-2 rounded-xl shadow-lg">
      <div className="backArrow" onClick={goPrev}>
        <Image src={BackArrow} width={25} />
      </div>
      <div className="forwardArrow" onClick={goNext}>
        <Image src={ForwardArrow} width={25} />
      </div>
      <div className="absolute top-[20%] left-0 -translate-x-1/2 -translate-y-1/2 bg-white p-1 border-2 border-pokemonYellow rounded-full">
        <Image src={lightning} width={30} />
      </div>
      <Swiper
        navigation={false}
        modules={[Navigation]}
        speed={400}
        ref={swiperRef}
        className="w-full h-full"
      >
        <div className="relative w-full h-full items-center justify-center">
          <SwiperSlide>
            <div>
              <Image src={pichu} width={250} />
            </div>
            <div className="absolute bottom-[18%] w-full p-3 bg-white rounded-md">
              <p className="text-center font-semibold">
                Pichu <span>#0024</span>
              </p>
            </div>
            <div className="absolute bottom-[3%] w-full p-2 bg-pokemonBlue rounded-md cursor-pointer">
              <p className="font-pressStart2P font-semibold text-center text-xs">
                Power up
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image src={pikachu} width={250} />
            </div>
            <div className="absolute bottom-[18%] w-full p-3 bg-white rounded-md">
              <p className="text-center font-semibold">
                Pikachu <span>#0025</span>
              </p>
            </div>
            <div className="absolute bottom-[3%] w-full p-2 bg-pokemonBlue rounded-md cursor-pointer">
              <p className="font-pressStart2P font-semibold text-center text-xs">
                Power up
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image src={raichu} width={250} />
            </div>
            <div className="absolute bottom-[18%] w-full p-3 bg-white rounded-md">
              <p className="text-center font-semibold">
                Raichu <span>#0026</span>
              </p>
            </div>
            <div className="absolute bottom-[3%] w-full p-2 bg-pokemonBlue rounded-md cursor-pointer">
              <p className="font-pressStart2P font-semibold text-center text-xs">
                Power up
              </p>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
};

export default HeroSwiper;
