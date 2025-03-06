"use client";

import * as React from "react";
import Image from "next/image";

const LogoContainer: React.FC = () => {
  return (
    <section className="box-border flex lg:gap-30 md:gap-20  justify-center items-center md:px-40 px-80 py-10 w-full bg-[#F6F5F5] h-[140px] max-md:flex-wrap max-md:gap-16 max-md:justify-center max-md:p-10 max-md:h-auto max-sm:gap-8 max-sm:p-5">
      <Image
        src="/we.png"
        alt="WeWork Logo"
        width={200}
        height={60}
        className="w-auto mix-blend-luminosity h-[60px] max-md:h-[50px] max-sm:h-10"
      />
      <Image
        src="/amc.png"
        alt="AMC Logo"
        width={200}
        height={60}
        className="w-auto mix-blend-luminosity h-[60px] max-md:h-[50px] max-sm:h-10"
      />
      <Image
        src="/cvs.png"
        alt="CVS Logo"
        width={200}
        height={60}
        className="w-auto mix-blend-luminosity h-[60px] max-md:h-[50px] max-sm:h-10"
      />
      <Image
        src="/cbre.png"
        alt="CBRE Logo"
        width={200}
        height={60}
        className="w-auto mix-blend-luminosity h-[60px] max-md:h-[50px] max-sm:h-10"
      />
      <Image
        src="/petsmart.png"
        alt="PetSmart Logo"
        width={200}
        height={60}
        className="w-auto mix-blend-luminosity h-[60px] max-md:h-[50px] max-sm:h-10"
      />
    </section>
  );
};

export default LogoContainer;
