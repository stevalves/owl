"use client";

import { useState } from "react";

import MobButton from "./MobButton";
import NavList from "./NavList";

interface iNavBar {}

const NavBar = ({}: iNavBar) => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="container flex w-full items-center justify-between p-2 text-[1.5rem] text-forest-100 md:text-[2rem]">
      <h1 className="text-[1.5rem] tracking-wide md:text-[2rem]">
        <span className="font-semibold text-forest-200">E</span>stevão{" "}
        <span className="font-semibold text-forest-200">S</span>antos
        <span className="font-extrabold text-forest-500">.</span>
      </h1>
      <NavList open={open} />
      <MobButton open={open} setOpen={setOpen} />
    </nav>
  );
};

export default NavBar;
