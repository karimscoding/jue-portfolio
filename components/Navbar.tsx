"use client";

import { BsFacebook, BsFillMoonFill } from "react-icons/bs";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center md:mt-4 md:mb-4">
      <div>
        <Link href="/" className="text-2xl font-bold">
          Diary of Faisal
        </Link>
        <p className="text-md">Travel Film Maker</p>
      </div>

      <div className="flex items-center gap-10">
        <Link href="film" className="cursor-pointer">
          Film
        </Link>
        <Link href="/about" className="cursor-pointer">
          About
        </Link>
        <BsFillMoonFill size={22} className="cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;
