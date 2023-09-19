"use client";

import { ImProfile, ImHome } from "react-icons/im";
import { GoProjectRoadmap } from "react-icons/go";
import { BiSolidBookBookmark } from "react-icons/bi";
import { GiTalk } from "react-icons/gi";
import NavCard from "./NavCard";
import { tv } from "tailwind-variants";
import { useState } from "react";
import { BsFillArrowDownCircleFill } from "react-icons/bs";

const navValues = [
  {
    id: "home",
    title: "Início",
    href: "#",
    icon: <ImHome />,
  },
  {
    id: "about",
    title: "Sobre",
    href: "#about",
    icon: <ImProfile />,
  },
  {
    id: "projects",
    title: "Projetos",
    href: "#projects",
    icon: <GoProjectRoadmap />,
  },
  {
    id: "technologies",
    title: "Tecnologias",
    href: "#technologies",
    icon: <BiSolidBookBookmark />,
  },
  {
    id: "talk",
    title: "Contato",
    href: "#talk",
    icon: <GiTalk />,
  },
];

const nav_tv = tv({
  base: "z-1 duration-300 fixed bottom-0 left-0 right-0 flex h-[80px] justify-center items-center border-t-2 border-forest-700 text-[24px] text-forest-50 shadow-2xl backdrop-blur-md md:bottom-1/2 md:left-auto md:right-[30px] md:top-1/2 md:h-max md:-translate-y-[50%] md:flex-col md:rounded-[8px] md:border-none md:text-[36px]",
  variants: {
    open: {
      true: "translate-y-[80px]",
    },
  },
  defaultVariants: {
    open: false,
  },
});

const nav_button_tv = tv({
  base: "absolute -top-4 flex text-3xl duration-300 md:hidden",
  variants: {
    open: {
      true: "rotate-180 -top-8",
    },
  },
  defaultVariants: {
    open: false,
  },
});

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className={nav_tv({ open })}>
      <button
        onClick={() => setOpen((value) => !value)}
        className={nav_button_tv({ open })}
      >
        <BsFillArrowDownCircleFill />
      </button>
      {navValues.map((value) => (
        <NavCard key={value.id} value={value} />
      ))}
    </nav>
  );
};

export default Nav;
