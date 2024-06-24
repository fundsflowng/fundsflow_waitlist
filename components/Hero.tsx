import React from "react";
import BorderMagic from "./ui/MagicButton";

const Hero = () => {
  return (
    <section className="pb-20 pt-16 w-full flex justify-center items-center bg-white">
      <div className="h-[30rem] w-full bg-white  bg-bg-gridline relative flex items-center flex-col justify-start">
        <div className="max-w-4xl flex space-y-4 text-center items-center justify-center flex-col">
          <div className="flex gap-2">
            <img src="/sparkling.svg" alt="sparkling" className="w-6 h-6" />
            <p className="font-mullish text-base text-lighter_dark font-normal">
              Trusted by 500+ business owners
            </p>
          </div>
          <div className="w-[90%]">
            <h1 className="font-roboto text-[48px] font-semibold text-black uppercase leading-[5rem]">
              <span className="text-darker_blue text-center ">FundsFlow</span>{" "}
              is launching Soon!
            </h1>
            <p className="text-[20px] leading-8 tracking-[0.5px] font-inter font-medium text-lighter_dark">
              Get ready to transform the way you manage your business finances
            </p>
          </div>
          <BorderMagic
            title="join waitlist"
            icon="/arrow-right.svg"
            position="right"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
