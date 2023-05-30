import React from "react";
import Image from "next/image";
import { marqueeItems } from "@/constants";
import { pokeball2 } from "@/images";

const HeroMarquee = () => {
  return (
    <div className="w-full overflow-hidden rotate-[3deg]">
      <div className="flex items-center justify-between w-full whitespace-nowrap gap-10 bg-pokemonBlue p-1">
        <style jsx>{`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-100%);
            }
          }
          .marquee-item {
            animation: marquee 20s linear infinite;
          }
        `}</style>
        {marqueeItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-center gap-8 marquee-item"
          >
            <p className="text-white font-pokemonSolid text-sm md:text-base">
              {item.title}
            </p>
            <Image src={pokeball2} className="w-6 md:w-7" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroMarquee;
