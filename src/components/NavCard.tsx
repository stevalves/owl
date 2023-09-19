"use client"

import Link from "next/link";
import { Tooltip } from "react-tooltip";

interface iNavCard {
  value: {
    id: string;
    title: string;
    href: string;
    icon: JSX.Element;
  };
}

const NavCard = ({ value }: iNavCard) => {
  return (
    <Link
      href={value.href}
      className="flex w-1/5 justify-center p-4 transition duration-300 hover:bg-forest-600/50 md:w-max md:px-4 md:py-6"
      data-tooltip-content={value.title}
      data-tooltip-id={value.id}
    >
      {value.icon}
      <Tooltip place="left" id={value.id} className="hidden md:flex" style={{color: "rgb(202 211 219)", background: "rgb(28 62 92)", fontSize: "1.5rem"}}/>
    </Link>
  );
};

export default NavCard;
