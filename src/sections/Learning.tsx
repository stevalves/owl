import PageNumber from "@/components/PageNumber";
import { SiNestjs } from "react-icons/si";
import { BiLogoJava, BiLogoSpringBoot } from "react-icons/bi";

interface iLearning {}

const Learning = ({}: iLearning) => {
  return (
    <section id="learning" className="flex h-screen w-full items-end">
      <div className="container mx-auto flex h-3/4 scale-100 flex-col-reverse md:flex-row-reverse rounded-bottom border-b-2 border-dashed border-forest-800 bg-forest-700/40 px-2 py-4">
        <PageNumber page="04" title="Aprendendo" />
        <div className="flex h-full w-full flex-col p-8 text-forest-100">
          <h3 className="text-xl md:text-2xl text-center md:text-start">Atualmente, estou aprendendo:</h3>
          <ul className="flex h-full w-full flex-col items-center justify-center gap-4 md:flex-row">
            <li className="rounded-2xl border-2 text-[4rem] transition-colors duration-300 hover:bg-forest-800/50">
              <a href="https://nestjs.com/" title="NestJS" target="_blank" className="w-full h-full flex p-4">
                <SiNestjs />
              </a>
            </li>
            <li className="rounded-2xl border-2 text-[4rem] transition-colors duration-300 hover:bg-forest-800/50">
              <a href="https://www.java.com/pt-BR/" title="Java" target="_blank" className="w-full h-full flex p-4">
                <BiLogoJava />
              </a>
            </li>
            <li className="rounded-2xl border-2 text-[4rem] transition-colors duration-300 hover:bg-forest-800/50">
              <a href="https://spring.io/projects/spring-boot" title="Spring Boot" target="_blank" className="w-full h-full flex p-4">
              <BiLogoSpringBoot />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Learning;
