import React from "react";
import Image from "next/image";
import { ForwardArrow, BackArrow } from "@/images";

const HeroSwiper = () => {
  return (
    <div className="relative w-[240px] min-h-[265px] lg:min-h-[300px] bg-pokemonYellow rounded-xl shadow-lg">
      <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-1 cursor-pointer border-2 border-pokemonYellow ">
        <Image src={BackArrow} width={30} />
      </div>
      <div className="absolute right-0 bottom-1/2 translate-x-1/2 translate-y-1/2 bg-white rounded-full p-1 cursor-pointer border-2 border-pokemonYellow ">
        <Image src={ForwardArrow} width={30} />
      </div>
    </div>
  );
};

export default HeroSwiper;
