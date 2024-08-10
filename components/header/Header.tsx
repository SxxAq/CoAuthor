import React from "react";
import Link from "next/link";
import Image from "next/image";
const Header = ({ children }: HeaderProps) => {
  return (
    <div className="header mx-4">
      <Link href="/" className="md:flex-1">
        <div className="flex items-center gap-2 ">
          <Image
            src="/assets/icons/logo.svg"
            alt="Logo with Name"
            width={32}
            height={32}
            className="hidden md:block"
          />
          <h1 className="hidden text-gray-300 md:text-2xl font-bold text-center  md:block">CoAuthor</h1>
        </div>

        <Image
          src="/assets/icons/logo.svg"
          alt="Logo"
          width={32}
          height={32}
          className="mr-2 md:hidden"
        />
      </Link>
      {children}
    </div>
  );
};

export default Header;
