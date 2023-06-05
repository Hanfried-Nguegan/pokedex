import React from "react";
import Image from "next/image";
import { weezing } from "@/images";

const Weezing = () => {
  return (
    <div className="weezing">
      <Image src={weezing} className="transform -rotate-[12deg]" />
    </div>
  );
};

export default Weezing;
