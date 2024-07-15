"use client";
import React from "react";
import BorderMagic from "./ui/MagicButton";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();

  return (
    <section className="pb-2 pt-16 w-full flex justify-center items-center bg-white">
      <div className="md:h-[30rem] h-[22rem] w-full bg-white  bg-bg-gridline relative flex items-center flex-col justify-start">
        <div className="max-w-4xl flex space-y-4 text-center items-center justify-center flex-col">
          <div className="flex gap-2">
            <img src="/sparkling.svg" alt="sparkling" className="w-6 h-6" />
            <p className="font-mullish text-base text-lighter_dark font-normal">
              Trusted by 500+ business owners
            </p>
          </div>
          <div className="w-[90%]">
            <h1 className="font-roboto md:text-[48px] text-2xl font-semibold text-black uppercase md:leading-[5rem] leading-">
              <span className="text-darker_blue text-center ">FundsFlow</span>{" "}
              is launching Soon!
            </h1>
            <p className="text-[20px] md:leading-8 leading-normal md:tracking-[0.5px] tracking-normal font-inter font-medium text-lighter_dark">
              Get ready to transform the way you manage your business finances
            </p>
          </div>
          <BorderMagic
            title="Join waitlist"
            icon="/arrow-right.svg"
            position="right"
            bgColor="transparent"
            handleClick={() => router.push("/waitlist")}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
