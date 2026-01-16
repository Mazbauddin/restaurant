import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="h-12 md:h-24 p-4 lg:p-20 xl:p-40 text-red-500 flex items-center justify-between">
      <Link href="/" className="font-bold uppercase text-xl md:text-2xl">
        Hungry
      </Link>
      <p>© 2024 Hungry. All rights reserved.</p>
    </div>
  );
};

export default Footer;
