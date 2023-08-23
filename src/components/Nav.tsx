import Link from "next/link";
import { ImProfile, ImHome } from "react-icons/im";
import { GoProjectRoadmap } from "react-icons/go";
import { BiSolidBookBookmark } from "react-icons/bi";
import { GiTalk } from "react-icons/gi";

const Nav = () => {
  return (
    <nav className="z-1 fixed bottom-0 left-0 right-0 flex h-[60px] items-center border-t-2 border-forest-700 text-[24px] text-forest-50 shadow-2xl backdrop-blur-md md:bottom-1/2 md:left-auto md:right-[30px] md:top-1/2 md:h-max md:-translate-y-[50%] md:flex-col md:rounded-[8px] md:border-none md:text-[36px]">
      <Link
        href="#"
        className="flex w-1/5 justify-center p-4 transition duration-300 hover:bg-forest-600/50 md:w-max md:px-4 md:py-6"
      >
        <ImHome />
      </Link>
      <Link
        href="#about"
        className="flex w-1/5 justify-center p-4 transition duration-300 hover:bg-forest-600/50 md:w-max md:px-4 md:py-6"
      >
        <ImProfile />
      </Link>
      <Link
        href="#projects"
        className="flex w-1/5 justify-center p-4 transition duration-300 hover:bg-forest-600/50 md:w-max md:px-4 md:py-6"
      >
        <GoProjectRoadmap />
      </Link>
      <Link
        href="#learning"
        className="flex w-1/5 justify-center p-4 transition duration-300 hover:bg-forest-600/50 md:w-max md:px-4 md:py-6"
      >
        <BiSolidBookBookmark />
      </Link>
      <Link
        href="#talk"
        className="flex w-1/5 justify-center p-4 transition duration-300 hover:bg-forest-600/50 md:w-max md:px-4 md:py-6"
      >
        <GiTalk />
      </Link>
    </nav>
  );
};

export default Nav;
