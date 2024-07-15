import Link from "next/link";
import React from "react";
type Social = {
  link: string;
  icon: string;
  bgColor?: string;
};
const SocialButton = ({ link, icon, bgColor }: Social) => {
  return (
    <Link href={link}>
      <img
        src={icon}
        alt={icon}
        className={`object-contain object-center w-6 h-6 bg-${bgColor}`}
      />
    </Link>
  );
};

export default SocialButton;
