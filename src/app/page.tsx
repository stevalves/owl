import ShowLogo from "@/components/ShowLogo";
import { AboutMe, Hobbies, LetsTalk, Me, Projects } from "@/sections";

export default function Home() {
  return (
    <main className="flex flex-col">

      {/* Section1 - Eu */}
      <Me />
      {/* Section2 - Sobre mim */}
      <AboutMe />
      {/* Section3 - Projetos notáveis */}
      <Projects />
      {/* Section4 - Em off (Hobbies) */}
      <Hobbies />
      {/* Section5 - Vamos conversar? (Section com todas as minhas redes relevantes) */}
      <LetsTalk />

      <ShowLogo />
    </main>
  );
}
