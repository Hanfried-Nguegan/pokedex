import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { pokemonLogo } from "@/images";

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleMenuClick = () => {
    setIsClicked((prevState) => !prevState);
  };

  return (
    <header className="fixed top-0 z-50 w-full box-border">
      <div className="flex items-center justify-between w-full p-2 max-w-7xl mx-auto">
        <Link href="/">
          <div className="p-1 cursor-pointer">
            <Image
              src={pokemonLogo}
              alt="Pokemon logo"
              priority="true"
              className="w-[140px] h-auto md:w-[160px] lg:w-[180px]"
            />
          </div>
        </Link>
        <div
          className="flex items-center justify-center cursor-pointer "
          onClick={handleMenuClick}
        >
          <div className="relative toggleMenu pointer-events-auto bg-pokemonYellow shadow-xl w-16 h-16 md:w-20 md:h-20 rounded-full inline-flex items-center justify-center">
            <h2 className="uppercase text-sm font-bold text-white font-mono">
              {isClicked ? <span>Close</span> : <span>Menu</span>}
            </h2>
          </div>
        </div>
      </div>
      <nav
        className={`${
          isClicked ? "navOpen " : "navClose"
        }  navMenu w-full h-full text-right fixed right-0 z-[-1] overflow-x-auto top-0 pt-28 text-white px-5 md:px-12 whitespace-nowrap uppercase pointer-events-auto leading-none `}
      >
        <ul className="inline-block" onClick={() => setIsClicked(false)}>
          <li>
            <div className="item">
              <Link href="/">
                <span className="font-pokemonSolid text-3xl md:text-4xl">
                  Home
                </span>
              </Link>
            </div>
          </li>
          <li>
            <div className="item">
              <Link href="/">
                <span className="font-pokemonSolid text-3xl md:text-4xl">
                  Berries
                </span>
              </Link>
            </div>
          </li>
          <li>
            <div className="item">
              <Link href="/">
                <span className="font-pokemonSolid text-3xl md:text-4xl">
                  My Pokedex
                </span>
              </Link>
            </div>
          </li>
          <li>
            <div className="item">
              <Link href="/">
                <span className="font-pokemonSolid text-3xl md:text-4xl">
                  Pokemon Battle
                </span>
              </Link>
            </div>
          </li>
          <li>
            <div className="item">
              <Link href="/">
                <span className="font-pokemonSolid text-3xl md:text-4xl">
                  Compare Pokemon
                </span>
              </Link>
            </div>
          </li>
          <li>
            <div className="item">
              <Link href="/about">
                <span className="font-pokemonSolid text-3xl md:text-4xl">
                  About/Contact Us
                </span>
              </Link>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
