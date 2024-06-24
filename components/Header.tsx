import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <section className="w-full h-36 flex items-center justify-center">
      <nav>
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="fundsflow"
            width={54}
            height={54}
            className="object-contain object-center"
          />
        </Link>
      </nav>
    </section>
  );
};

export default Header;
