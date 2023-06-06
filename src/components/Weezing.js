import React from "react";
import Image from "next/image";
import { weezing } from "@/images";

const Weezing = () => {
  return (
    <div className="weezing">
      <Image
        src={weezing}
        alt="weezing image"
        className="transform -rotate-[12deg]"
        priority="true"
      />
    </div>
  );
};

export default Weezing;
