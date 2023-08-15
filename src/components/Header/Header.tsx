"use client";

import { useEffect, useState } from "react";
import { tv } from "tailwind-variants";
import NavBar from "./NavBar";

interface iHeader {}

const Header = ({}: iHeader) => {
  const [scrollY, setScrollY] = useState(0);

  let see = false;

  const handleScroll = () => {
    const newScroll =
      document.documentElement.scrollTop || document.body.scrollTop;
    setScrollY(newScroll);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const header = tv({
    base: "bg-transparent fixed right-0 left-0 top-0 text-[2rem] text-gray-300 transition-[3s] flex items-center justify-center z-10",
    variants: {
      see: {
        true: "py-4 opacity-[0.85] object-fill bg-[url('../imgs/header_bg.jpg')]",
        false: "py-2",
      },
    },
    defaultVariants: {
      see: false,
    },
  });

  return (
    <header
      className={header({
        see: scrollY > 40 || see ? true : false,
      })}
    >
      <NavBar />
    </header>
  );
};

export default Header;
