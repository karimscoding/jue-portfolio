"use client";

import Link from "next/link";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="pb-6 pt-10 mt-auto">
      <div className="container mx-auto">
        <div className="flex justify-center items-center space-x-6">
          <a
            href="https://www.facebook.com/faisal.arham.7359?mibextid=ZbWKwL"
            target="_blank"
            className="text-rose-400"
          >
            <BsFacebook size={25} />
          </a>
          <a
            href="https://www.tiktok.com/@faisal5945"
            target="_blank"
            className="text-rose-400"
          >
            <FaTiktok size={24} />
          </a>
          <a
            href="https://www.instagram.com/diary_of_faisal_/?igshid=MzNlNGNkZWQ4Mg%3D%3D"
            target="_blank"
            className="text-rose-400"
          >
            <BsInstagram size={25} />
          </a>
        </div>
        <p className="text-md text-center  mt-3">
          Copyright 2023 | All rights reserved.
        </p>
        <p className="text-md text-center ">
          Develop and deployed by{" "}
          <Link
            href="https://twitter.com/karimscoding"
            target="_blank"
            className="text-rose-400"
          >
            Karim&apos;s Coding
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
