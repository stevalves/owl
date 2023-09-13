import { AiFillHtml5 } from "react-icons/ai";
import {
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoTypescript,
  BiLogoTailwindCss,
  BiCodeCurly,
} from "react-icons/bi";
import {
  SiZdf,
  SiStyledcomponents,
  SiReacthookform,
  SiExpress,
  SiPrisma,
  SiNestjs,
  SiPython,
  SiDjango,
  SiGit,
  SiJira,
  SiTrello,
  SiNextdotjs,
} from "react-icons/si";
import { DiScrum } from "react-icons/di";
import { BsFillKanbanFill } from "react-icons/bs";
import TechnologieCard from "@/components/TechnologieCard";

const icon_styles = "flex h-full w-full";
const techs = {
  front: [
    {
      id: "HTML5",
      name: "HTML",
      icon: <AiFillHtml5 className={icon_styles} />,
    },
    {
      id: "CSS3",
      name: "CSS",
      icon: <BiLogoCss3 className={icon_styles} />,
    },
    {
      id: "JavaScriptES6",
      name: "JavaScript",
      icon: <BiLogoJavascript className={icon_styles} />,
    },
    {
      id: "TypeScript",
      name: "TypeScript",
      icon: <BiLogoTypescript className={icon_styles} />,
    },
    {
      id: "ReactJS",
      name: "React",
      icon: <BiLogoReact className={icon_styles} />,
    },
    {
      id: "NextJS",
      name: "Next",
      icon: <SiNextdotjs className={icon_styles} />,
    },
    {
      id: "TailwindCSS",
      name: "Tailwind",
      icon: <BiLogoTailwindCss className={icon_styles} />,
    },
    {
      id: "Zod",
      name: "Zod",
      icon: <SiZdf className={icon_styles} />,
    },
    {
      id: "StyledComponents",
      name: "StyledComponents",
      icon: <SiStyledcomponents className={icon_styles} />,
    },
    {
      id: "ReactHookForm",
      name: "ReactHookForm",
      icon: <SiReacthookform className={icon_styles} />,
    },
  ],
  back: [
    {
      id: "ExpressJS",
      name: "Express",
      icon: <SiExpress className={icon_styles} />,
    },
    {
      id: "TypeORM",
      name: "TypeORM",
      icon: <BiCodeCurly className={icon_styles} />,
    },
    {
      id: "Prisma",
      name: "Prisma",
      icon: <SiPrisma className={icon_styles} />,
    },
    {
      id: "NestJS",
      name: "Nest",
      icon: <SiNestjs className={icon_styles} />,
    },
    {
      id: "Python",
      name: "Python",
      icon: <SiPython className={icon_styles} />,
    },
    {
      id: "Django",
      name: "Django",
      icon: <SiDjango className={icon_styles} />,
    },
  ],
  methods: [
    {
      id: "Git",
      name: "Git",
      icon: <SiGit className={icon_styles} />,
    },
    {
      id: "Scrum",
      name: "Scrum",
      icon: <DiScrum className={icon_styles} />,
    },
    {
      id: "Kanban",
      name: "Kanban",
      icon: <BsFillKanbanFill className={icon_styles} />,
    },
    {
      id: "Jira",
      name: "Jira",
      icon: <SiJira className={icon_styles} />,
    },
    {
      id: "Trello",
      name: "Trello",
      icon: <SiTrello className={icon_styles} />,
    },
  ],
};

const Technologies = () => {
  return (
    <section id="technologies" className="flex min-h-screen w-full items-end">
      <div className="container mx-auto flex h-full scale-100 flex-col-reverse rounded-bottom border-b-2 border-dashed border-forest-800 bg-forest-700/40 px-2 py-4 md:flex-row-reverse">
        <div className="flex h-full w-full flex-col p-8 text-forest-100">
          <h3 className="p-4 text-center text-xl md:text-start md:text-2xl">
            Tecnologias que já trabalhei:
          </h3>
          <ul className="flex h-full w-full flex-col justify-center gap-12">
            <div className="flex flex-col gap-2">
              <h6 className="text-xl font-medium">Front</h6>
              <ul className="flex flex-wrap justify-center gap-2 sm:justify-normal">
                {techs["front"].map((tech) => (
                  <TechnologieCard tech={tech} key={tech.id} />
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h6 className="text-xl font-medium">Back</h6>
              <ul className="flex flex-wrap justify-center gap-2 sm:justify-normal">
                {techs["back"].map((tech) => (
                  <TechnologieCard tech={tech} key={tech.id} />
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h6 className="text-xl font-medium">Outros</h6>
              <ul className="flex flex-wrap justify-center gap-2 sm:justify-normal">
                {techs["methods"].map((tech) => (
                  <TechnologieCard tech={tech} key={tech.id} />
                ))}
              </ul>
            </div>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
