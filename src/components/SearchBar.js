import React from "react";
import Image from "next/image";
import { pokeball, searchIcon, snorlax } from "@/images";

const SearchBar = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="relative w-full md:w-3/5 px-2">
        <div className="relative flex items-center justify-between bg-white rounded-full p-2 shadow-2xl drop-shadow-2xl">
          <div className="absolute -top-4 left-1/2 transform w-[130px] md:w-[150px] -translate-x-1/2 -translate-y-1/2">
            <Image src={snorlax} alt="snorlax image" />
          </div>
          <div>
            <Image src={pokeball} alt="pokeball image" width={70} />
          </div>
          <input
            type="text"
            placeholder="Search by Pokemon name or id number"
            className="flex flex-1 m-2 p-2 font-pokemonSolid text-sm outline-none"
          />
          <div>
            <Image src={searchIcon} alt="search icon" width={35} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
