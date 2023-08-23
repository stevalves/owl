import Link from "next/link";
import { LuConstruction } from "react-icons/lu";

interface iProject {}

const Projects = async () => {
  return (
    <section className="flex h-screen w-full flex-col items-center justify-center text-[1.5rem] text-forest-50">
      <div className="scale-100 flex gap-4 flex-col items-center justify-center bg-forest-800/75 p-4 rounded">
        <h1 className="flex gap-2">
          <LuConstruction /> Construindo <LuConstruction />
        </h1>
        <Link href="/" className="px-4 border-2 border-forest-50 rounded hover:bg-forest-300/75 hover:text-forest-800 transition-colors duration-300">Return</Link>
        <p className="font-light text-[1rem]">ou</p>
        <a target="_blank" href="https://github.com/stevalves?tab=repositories" className="font-light text-[1.25rem] hover:text-forest-200 transition-colors duration-300 underline">Meus repositórios</a>
      </div>
    </section>
  );
};

export default Projects;
