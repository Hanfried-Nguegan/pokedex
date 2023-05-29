import React from "react";
import Image from "next/image";
import Link from "next/link";
import HeroSwiper from "./HeroSwiper";
import {
  pokemonStatsTracker,
  pinterest,
  github,
  twitter,
  starmie,
} from "@/images";

const Hero = () => {
  return (
    <div className="relative w-full mt-2 md:mt-10 mx-auto">
      <div className="flex items-center justify-between px-4 py-4 max-w-5xl mx-auto">
        <div className="flex w-full items-center justify-center md:justify-start">
          <div className="relative">
            <div className="absolute -top-12 -left-20 z-0">
              <Image src={starmie} width={150} />
            </div>
            <div className="heroCard">
              <span>
                <Image
                  src={pokemonStatsTracker}
                  className="w-[400px] md:w-[420px] lg:w-[500px]"
                />
              </span>
              <p className="heroParagraph">
                Introducing a Pokemon Tracker App,
                <br /> This App combines advanced mapping <br /> tech with
                real-time data fetching.
                <br />
                You can effortlessly track various
                <br />
                Pokemon species,type and abilities
              </p>
              <div className="flex items-center justify-between px-10  mt-2 mb-2">
                <div className="w-full">
                  <button className="findMe">Find me on</button>
                </div>
                <div className="flex items-center mr-10 space-x-3 w-full">
                  <Link href="https://github.com/Hanfried-Nguegan">
                    <Image src={github} className="w-7 md:w-9" />
                  </Link>
                  <Link href="https://twitter.com/HanfriedNguegan">
                    <Image src={twitter} className="w-7 md:w-9" />
                  </Link>
                  <Link href="https://www.pinterest.com/hanfriednguegan/">
                    <Image src={pinterest} className="w-7 md:w-9" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:inline-flex w-full justify-end">
          <HeroSwiper />
        </div>
      </div>
    </div>
  );
};

export default Hero;
