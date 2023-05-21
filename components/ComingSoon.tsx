"use client";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/Io";

import { Button } from "@/components/ui/button";

const ComingSoon = () => {
  return (
    <div className="mt-10">
      <Button variant="ghost" size="sm" className="h-8 w-8 px-0">
        <Link href="/" className="cursor-pointer">
          <IoIosArrowBack size={30} />
        </Link>
      </Button>

      <div className="w-50 min-h-screen mx-auto items-center mt-10">
        <h1 className=" text-[16px] mdtext-5xl font-bold">Coming Soon...</h1>
      </div>
    </div>
  );
};

export default ComingSoon;
