import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="h-12 md:h-24 p-4 lg:px-20 xl:px-40 text-red-500 flex-wrap text-center gap-5 justify-center md:flex md:justify-between items-center">
      <div className="">
        <Link href="/" className="font-bold uppercase text-xl md:text-2xl">
          Hungry
        </Link>
      </div>
      <div className="">
        <p className="">© 2026 Hungry. All rights reserved.</p>
      </div>
      <div className="">
        <p>Design By Invisible System 32.</p>
      </div>
    </div>
  );
};

export default Footer;
