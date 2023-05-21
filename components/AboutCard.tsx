"use client";

import Image from "next/image";
import { faisalKabir } from "@/public/images";

const AboutCard = () => {
  return (
    <div className="mt-10 mb-10">
      <div className="container mx-auto px-4 flex  md:flex-row flex-col-reverse justify-between items-start">
        <div className="md:w-1/2 md:mr-4 flex-grow">
          <div>
            <p className="text-sm text-rose-400">Hi, my name is</p>
            <h1 className="text-4xl font-bold dark:text-gray-400 mt-2">
              Faisal Kabir
            </h1>
            <p className="text-[13px] md:text-[16px] dark:text-gray-400 mt-4 mb-4">
              One of the most rewarding aspects of being a travel filmmaker is
              the opportunity to immerse myself in different cultures. I seek
              out authentic experiences, whether it&apos;s participating in
              local festivals, learning traditional arts and crafts, or engaging
              in meaningful conversations with locals. By showcasing the
              richness of diverse cultures, I hope to foster understanding,
              respect, and appreciation among viewers.
            </p>
          </div>
        </div>

        <Image
          src={faisalKabir}
          width={250}
          height={200}
          alt="about"
          className="rounded-full md:mt-10 mb-10"
        />
      </div>
    </div>
  );
};

export default AboutCard;
