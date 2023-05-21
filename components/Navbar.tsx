"use client";

import { BsFacebook, BsFillMoonFill } from "react-icons/bs";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center border-b-[1px] py-4">
      <Link href="/">
        <h3 className="text-xl font-bold">Faisal</h3>
      </Link>

      <div className="flex items-center">
        <Link
          href="/"
          className="mr-6 text-[13px] md:text-sm hover:text-gray-300 transition duration-300"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="mr-6 text-[13px] md:text-sm hover:text-gray-300 transition duration-300"
        >
          About
        </Link>
        <Link
          href="/video"
          className="text-[13px] md:text-sm hover:text-gray-300 transition duration-300"
        >
          Video
        </Link>
      </div>

      <ModeToggle />
    </div>
  );
};

export default Navbar;
