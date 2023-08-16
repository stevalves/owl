import Aside from "../Nav";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className="fixed z-20 left-0 right-0 top-0 bg-transparent text-gray-300">
      <div className="flex w-full items-center justify-between container mx-auto p-2">
        <h1 className="text-[1.5rem] tracking-wide md:text-[2rem]">
          <span className="font-semibold text-forest-200">E</span>stevão{" "}
          <span className="font-semibold text-forest-200">S</span>antos
          <span className="font-extrabold text-forest-500">.</span>
        </h1>
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
