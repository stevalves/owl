"use client";

import Link from "next/link";
import { ImProfile, ImHome } from "react-icons/im";
import { GoProjectRoadmap } from "react-icons/go";
import { AiOutlineCoffee } from "react-icons/ai";
import { GiTalk } from "react-icons/gi";

import { usePathname } from "next/navigation";
import { tv } from "tailwind-variants";

const Aside = () => {
  const path = usePathname();

  const link_tv = tv({
    base: "flex w-1/5 justify-center p-4 md:py-6 md:px-4 transition duration-300 hover:bg-forest-700/50 md:w-max",
    variants: {
      currentPage: {
        true: "text-red-500/90",
      },
    },
  });

  return (
    <nav className="z-1 fixed bottom-0 left-0 right-0 flex h-[60px] items-center border-t-2 border-forest-700 text-[24px] text-forest-100 shadow-2xl backdrop-blur-md md:bottom-1/2 md:top-1/2 md:-translate-y-[50%] md:left-auto md:right-[30px] md:h-max md:flex-col md:rounded-[8px] md:border-none md:text-[36px]">
      <Link href="/" className={link_tv({ currentPage: path === "/" })}>
        <ImHome />
      </Link>
      <Link
        href="/about"
        className={link_tv({ currentPage: path === "/about" })}
      >
        <ImProfile />
      </Link>
      <Link
        href="/projects"
        className={link_tv({ currentPage: path === "/projects" })}
      >
        <GoProjectRoadmap />
      </Link>
      <Link
        href="/hobbies"
        className={link_tv({ currentPage: path === "/hobbies" })}
      >
        <AiOutlineCoffee />
      </Link>
      <Link href="/talk" className={link_tv({ currentPage: path === "/talk" })}>
        <GiTalk />
      </Link>
    </nav>
  );
};

export default Aside;
