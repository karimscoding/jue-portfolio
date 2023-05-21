"use client";

import Image from "next/image";
import { faisalKabir } from "@/public/images";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";


const AboutCard = () => {
  return (
    <div className="mt-10 mb-10">
      <div className="container mx-auto px-4 flex  md:flex-row flex-col-reverse justify-between items-start">
        <div className="md:w-1/2 md:mr-4 flex-grow">
          <div className="mt-24">
            <p className="text-sm text-rose-400">Hi, my name is</p>
            <h1 className="text-4xl font-bold dark:text-gray-400 mt-2">
              Faisal Kabir
            </h1>
            <p className="text-[13px] md:text-[16px] dark:text-gray-400 mt-4 mb-4">
              One of the most rewarding aspects of being a travel filmmaker is
              the opportunity to immerse myself in different cultures.
            </p>
            <div className="flex items-center space-x-6">
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
      </div>
          </div>
        </div>

        <Image
          src={faisalKabir}
          width={290}
          height={200}
          alt="about"
          className="rounded-full md:mt-10 mb-10 border-8 border-muted"
        />
      </div>
   
    </div>
  );
};

export default AboutCard;
