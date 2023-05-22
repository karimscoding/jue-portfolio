"use client";

import Link from "next/link";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import { hostinger } from "@/public/images";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="pb-6 pt-10 mt-auto">
   

      <div className="mb-4">
        <p className="text-[13px] md:text-[16px] dark:text-gray-400 mt-3">
          Copyright 2023 | All rights reserved.
        </p>
        <p className="text-[13px] md:text-[16px] dark:text-gray-400">
          Develop and deployed by{" "}
          <Link
            href="https://twitter.com/karimscoding"
            target="_blank"
            className="text-[13px] md:text-[16px] font-bold text-rose-400"
          >
            <span>Karim&apos;s Coding </span>{" "}
            <span>
              <BiLinkExternal className="inline-block" />
            </span>
          </Link>
        </p>
      </div>

      <Link href="https://hostinger.my?REFERRALCODE=1REJAUL16" target="_blank">
        <Image
          src={hostinger}
          width={300}
          height={50}
          alt="hostinger"
          className="rounded-xl cursor-pointer"
        />
      </Link>

      {/* https://hostinger.my?REFERRALCODE=1REJAUL16 */}

      {/* footer icons */}
      {/* <div className="flex items-center space-x-6">
        <a
          href="https://www.facebook.com/faisal.arham.7359?mibextid=ZbWKwL"
          target="_blank"
          className="text-rose-400"
        >
          <BsFacebook size={20} />
        </a>
        <a
          href="https://www.tiktok.com/@faisal5945"
          target="_blank"
          className="text-rose-400"
        >
          <FaTiktok size={20} />
        </a>
        <a
          href="https://www.instagram.com/diary_of_faisal_/?igshid=MzNlNGNkZWQ4Mg%3D%3D"
          target="_blank"
          className="text-rose-400"
        >
          <BsInstagram size={20} />
        </a>
      </div> */}
    </footer>
  );
};

export default Footer;
