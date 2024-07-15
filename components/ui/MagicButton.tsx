"use client";
import Link from "next/link";
import React from "react";

type ButtonProps = {
  title: string;
  icon: string;
  position: string;
  handleClick?: () => void;
  addedStyles?: string;
  bgColor: string;
};

const BorderMagic = ({
  title,
  icon,
  position,
  handleClick,
  addedStyles,
  bgColor,
}: ButtonProps) => {
  return (
    <div>
      <button
        className={`relative inline-flex w-full h-12 overflow-hidden rounded-lg 
        p-[1px] focus:outline-none focus:ring-1 focus:ring-blue-600 focus:ring-offset-1 focus:ring-offset-blue-200 
        md:w-[291px] bg-${bgColor} border-[2px] border-primain_blue`}
        onClick={handleClick}
      >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-transparent" />
        <span
          className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-transparent px-7 py-1
           text-sm font-medium font-mullish text-primain_blue backdrop-blur-sm gap-3 ${addedStyles}`}
        >
          {position === "left" && <img src={icon} alt="" />}
          {title}
          {position === "right" && <img src={icon} alt="" />}
        </span>
      </button>
    </div>
  );
};

export default BorderMagic;

<button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
    Border Magic
  </span>
</button>;
