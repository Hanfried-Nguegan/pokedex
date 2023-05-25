import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { pokemonLogo, hamburgerMenu } from "@/images";

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleMenuClick = () => {
    setIsClicked((prevState) => !prevState);
  };

  console.log("Clicked", isClicked);

  return (
    <header className="fixed top-0 z-50 w-full box-border">
      <div className="flex items-center justify-between w-full p-2 md:max-w-7xl mx-auto">
        <div className="p-1 cursor-pointer">
          <Image
            src={pokemonLogo}
            alt="Pokemon logo"
            priority="true"
            className="w-[130px] h-auto md:w-[150px] lg:w-[180px]"
          />
        </div>
        <div
          className="flex items-center justify-center cursor-pointer "
          onClick={handleMenuClick}
        >
          <div className="relative toggle-menu pointer-events-auto bg-pokemonYellow shadow-xl border-l border-opacity-30 border-white w-16 h-16 rounded-full inline-flex items-center justify-center">
            <h2 className="uppercase text-sm font-bold text-white font-mono">
              Menu
            </h2>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
