"use client";

import { useState } from "react";

import Hamburguer from "./Hamburguer";
import NavList from "./NavList";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex w-max items-center justify-between text-[1.5rem] text-forest-100 md:text-[2rem]">
      <NavList open={open} />
      <Hamburguer open={open} setOpen={setOpen} />
    </nav>
  );
};

export default NavBar;
