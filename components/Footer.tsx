"use client";
import React from "react";
import BorderMagic from "./ui/MagicButton";
import SocialButton from "./ui/SocialButton";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();

  return (
    <section className="w-full h-[20rem] bg-primain_blue overflow-x-hidden">
      <div className="h-[20rem] w-full bg-bg-gridline relative flex items-center flex-col justify-start">
        <div
          className="flex flex-col items-center justify-center py-10 max-w-4xl 
        mx-auto space-y-8"
        >
          <p className="text-white text-center font-inter font-normal text-base w-[80%]">
            Be the first to streamline your business payments with FundsFlow.
            Our innovative platform is coming soon.{" "}
          </p>
          <BorderMagic
            title="Get early access"
            icon="/arrow-right.svg"
            position="right"
            bgColor="white"
            addedStyles="bg-white text-primain_blue"
            handleClick={() => router.push("/waitlist")}
          />
        </div>
        <div className="flex gap-3 mt-6">
          <p className="text-white font-normal text-base font-mullish">
            Follow us @{" "}
          </p>
          <SocialButton link="/" icon="/x.svg" />
          <SocialButton link="/" icon="/instagram.svg" />
          <SocialButton link="/" icon="/linkedin.svg" />
        </div>
      </div>
    </section>
  );
};

export default Footer;
