import PageNumber from "@/components/PageNumber";
import Link from "next/link";
import { IoMdLink } from "react-icons/io";
import { projects } from "../../data";
import ProjectCard from "@/components/ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="h-screen w-full scale-100 bg-forest-800">
      <div className="container mx-auto flex h-full flex-col px-2 py-4 md:flex-row">
        <PageNumber page="03" title="Projetos" />
        <div className="h-full w-full p-4 md:p-16">
          <div className="flex items-center justify-between text-xl text-forest-100">
            <h3>Alguns dos meus projetos:</h3>
            <Link
              className="flex cursor-not-allowed items-center gap-2 rounded border-2 border-forest-200 p-2 transition-colors duration-300 hover:bg-forest-200/20"
              href="/projects"
            >
              Ver todos
              <IoMdLink />
            </Link>
          </div>
          <ul className="flex h-full w-full flex-col gap-4 p-2 md:items-center md:justify-center overflow-y-auto">
            {projects.map((project) => (
              <ProjectCard project={project} key={project.id} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;
