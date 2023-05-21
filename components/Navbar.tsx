"use client";

import { BsFacebook, BsFillMoonFill } from "react-icons/bs";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

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
        <ModeToggle />
      </div>
    </div>
  );
};

export default Navbar;
