'use client'

import Link from "next/link";
import { iProject } from "../../data";
import Image from "next/image";

const ProjectCard = ({ project }: { project: iProject }) => {
  const { name, description, deploy, github, gif } = project;

  return (
    <li className="relative flex h-1/4 w-full justify-between md:max-w-[520px] hover:scale-105 transition-transform duration-300">
        <Image
          src={gif}
          alt={name}
          fill
          sizes="100vw"
          className="rounded brightness-50"
        />
        <button className="absolute flex h-full w-full flex-col justify-between rounded bg-forest-600/20 hover:bg-transparent transition-colors duration-300 p-2 text-forest-50">
          <div className="mx-auto">
            <h4>{name}</h4>
            <p>{description}</p>
          </div>
          <div className="flex w-full justify-between">
            <a target="_blank" href={deploy} className="hover:underline">Deploy</a>
            <a target="_blank" href={github} className="hover:underline">Code</a>
          </div>
        </button>
    </li>
  );
};

export default ProjectCard;
