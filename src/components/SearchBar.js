import React from "react";
import Image from "next/image";
import { pokeball, searchIcon, snorlax } from "@/images";

const SearchBar = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full z-10 bg-white shadow-lg drop-shadow-lg">
      <div className="relative flex items-center justify-between p-2">
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
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
  );
};

export default SearchBar;
