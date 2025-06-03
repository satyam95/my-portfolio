import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="max-w-[900px] mx-auto px-4 md:px-8 lg:px-0">
      <div className="flex justify-between items-center py-4 md:py-8">
        <div className="font-semibold text-2xl">
          <Link href="/">Satyam</Link>
        </div>
        <button className="bg-black py-3 px-6 rounded-3xl text-white font-semibold text-base leading-[18px] max-w-fit shadow-lg/30 md:shadow-xl/30">
          Contact
        </button>
      </div>
    </div>
  );
};

export default Header;
