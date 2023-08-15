import Link from "next/link";
import Logo from "./Logo";



interface iAside {}

const Aside = ({}: iAside) => {
  return (
    <nav className="fixed right-12 bottom-0 sm:top-[25vh] hidden flex-col items-end sm:flex rounded-lg overflow-hidden">
      <div className="w-[42px] overflow-hidden flex items-center justify-center bg-zinc-800 py-6 transition-[3s]">
        <Logo size="sm" />
      </div>
      <Link
        href="#me"
        className="w-[42px] truncate overflow-hidden bg-forest-300/60 px-2 py-6 text-transparent transition-[3s] hover:w-[160px] hover:text-white"
      >
        Eu
      </Link>
      <Link
        href="#me2"
        className="w-[42px] truncate overflow-hidden bg-forest-300/60 px-2 py-6 text-transparent transition-[3s] hover:w-[160px] hover:text-white"
      >
        Eu2
      </Link>
      <Link
        href="#about_me"
        className="w-[42px] truncate overflow-hidden bg-forest-300/60 px-2 py-6 text-transparent transition-[3s] hover:w-[160px] hover:text-white"
      >
        Sobre Mim
      </Link>
      <Link
        href="#projects"
        className="w-[42px] truncate overflow-hidden bg-forest-300/60 px-2 py-6 text-transparent transition-[3s] hover:w-[160px] hover:text-white"
      >
        Projetos
      </Link>
      <Link
        href="#hobbies"
        className="w-[42px] truncate overflow-hidden bg-forest-300/60 px-2 py-6 text-transparent transition-[3s] hover:w-[160px] hover:text-white"
      >
        Hobbies
      </Link>
      <Link
        href="#lets_talk"
        className="w-[42px] truncate overflow-hidden bg-forest-300/60 px-2 py-6 text-transparent transition-[3s] hover:w-[160px] hover:text-white"
      >
        Vamos Conversar?
      </Link>
    </nav>
  );
};

export default Aside;
