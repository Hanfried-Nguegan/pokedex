import React from "react";
import Image from "next/image";
import { ForwardArrow, BackArrow, lightning, pichu } from "@/images";

const HeroSwiper = () => {
  return (
    <div className="relative w-[240px] min-h-[265px] lg:min-h-[300px] bg-pokemonYellow p-2 rounded-xl shadow-lg">
      <div className="backArrow">
        <Image src={BackArrow} width={25} />
      </div>
      <div className="forwardArrow ">
        <Image src={ForwardArrow} width={25} />
      </div>
      <div className="absolute top-[20%] left-0 -translate-x-1/2 -translate-y-1/2 bg-white p-1 border-2 border-pokemonYellow rounded-full">
        <Image src={lightning} width={30} />
      </div>
      <div className="relative w-full h-full items-center justify-center">
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
      </div>
    </div>
  );
};

export default HeroSwiper;
