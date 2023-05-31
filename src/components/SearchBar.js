import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { slideIn } from "@/utils/motion";
import { pokeball, searchIcon, snorlax } from "@/images";

const SearchBar = () => {
  return (
    <motion.div
      variants={slideIn("left", "tween", 0.8, 1.1)}
      initial="hidden"
      animate="show"
      className="fixed flex items-center justify-center bottom-0 left-0 w-full p-2 z-50"
    >
      <div className="w-full md:w-[60%] lg:w-[70%] bg-white rounded-full shadow-lg drop-shadow-lg">
        <div className="relative flex items-center justify-between p-2">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Image src={snorlax} alt="snorlax image" />
          </div>
          <div className="cursor-pointer">
            <Image src={pokeball} alt="pokeball image" width={70} />
          </div>
          <input
            type="text"
            placeholder="Search by name or number"
            className="flex flex-1 m-2 p-2 font-pokemonSolid text-sm md:text-base outline-none"
          />
          <div className="cursor-pointer">
            <Image src={searchIcon} alt="search icon" width={30} />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SearchBar;
