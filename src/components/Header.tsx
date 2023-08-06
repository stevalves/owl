"use client";

import { useEffect, useState } from "react";
import { tv } from "tailwind-variants";
import Logo from "./Logo";
import NavBar from "./NavBar";

interface iHeader {}

const Header = ({}: iHeader) => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(document.documentElement.scrollTop || document.body.scrollTop);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const header = tv({
    base: "bg-transparent fixed left-0 top-0 w-full text-[2rem] text-gray-300 transition-[3s] flex items-center px-8 z-10",
    variants: {
      see: {
        true: "py-6 bg-coffee-400",
        false: "py-4"
      },
      expand: {
        true: "py-8",
      },
    },
  });

  return (
    <header
      className={header({
        see: scrollY > 40 ? true : false,
        expand: scrollY > 160 ?? true,
      })}
    >
      <div className="flex justify-between items-center w-full">
        <Logo size="md"/>
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
