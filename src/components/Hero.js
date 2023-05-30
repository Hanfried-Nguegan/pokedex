import React from "react";
import Image from "next/image";
import Link from "next/link";
import HeroSwiper from "./HeroSwiper";
import HeroMarquee from "./HeroMarquee";
import { motion } from "framer-motion";
import { slideIn, fadeIn } from "@/utils/motion";
import {
  pokemonStatsTracker,
  pinterest,
  github,
  twitter,
  starmie,
  downArrow,
} from "@/images";

const Hero = () => {
  return (
    <div className="relative w-full mt-1 mb-10 mx-auto">
      <div className="flex items-center justify-between px-4 py-4 max-w-5xl mx-auto">
        <motion.div
          variants={slideIn("left", "tween", 0.4, 1)}
          initial="hidden"
          animate="show"
          className="flex relative z-50 w-full  items-center justify-center md:justify-start"
        >
          <div className="relative">
            <div className="absolute -top-12 -left-20 z-0 animate-spin-slow ">
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
                <br />
                This App combines advanced mapping
                <br />
                tech with real-time data fetching.
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
        </motion.div>
        <motion.div
          variants={slideIn("right", "tween", 0.4, 1)}
          initial="hidden"
          animate="show"
          className="hidden md:inline-flex w-full justify-end"
        >
          <HeroSwiper />
        </motion.div>
      </div>
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        initial="hidden"
        animate="show"
      >
        <HeroMarquee />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex items-center justify-center lg:justify-start mt-3 mb-3 max-w-7xl mx-auto cursor-pointer"
      >
        <div className="flex items-center justify-center bg-pokemon_texture w-20 h-20 md:w-24 md:h-24 rounded-full shadow-lg ">
          <Image
            src={downArrow}
            width={40}
            className="motion-safe:animate-bounce"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
