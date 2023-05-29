import React from "react";
import Image from "next/image";
import Link from "next/link";
import { pokemonStatsTracker, pinterest, github, twitter } from "@/images";

const Hero = () => {
  return (
    <div className="relative w-full mt-2 md:mt-12 mx-auto ">
      <div className="flex items-center justify-between px-4 py-4 max-w-6xl mx-auto">
        <div className="flex w-full items-center justify-center md:justify-start">
          <div className="flex flex-col bg-white bg-opacity-80 border-2 border-black border-opacity-60 shadow-xl hover:drop-shadow-xl">
            <span>
              <Image
                src={pokemonStatsTracker}
                className="w-[400px] md:w-[420px] lg:w-[500px]"
              />
            </span>
            <p className="font-pressStart2P px-4 -mt-7 text-xs text-center font-semibold text-black text-opacity-80 leading-8">
              Introducing a Pokemon Tracker App,
              <br /> This App combines advanced mapping <br /> tech with
              real-time data fetching.
              <br />
              You can effortlessly track various
              <br />
              Pokemon species,type and abilities
            </p>
            <div className="flex items-center justify-between px-4 lg:px-10 mt-2 mb-2">
              <div className="w-full">
                <button className="bg-pokemonYellow font-pokemonSolid px-6 py-2 rounded-xl">
                  Find me on
                </button>
              </div>
              <div className="flex items-center mr-10 space-x-3 w-full">
                <Link href="https://github.com/Hanfried-Nguegan">
                  <Image src={github} width={30} />
                </Link>
                <Link href="https://twitter.com/HanfriedNguegan">
                  <Image src={twitter} width={30} />
                </Link>
                <Link href="https://www.pinterest.com/hanfriednguegan/">
                  <Image src={pinterest} width={30} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:inline-flex">right</div>
      </div>
    </div>
  );
};

export default Hero;
