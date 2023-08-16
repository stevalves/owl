import ParticlesAnimation from "@/components/Particles";
import Image from "next/image";
import me from "../imgs/me.png";
import { AiOutlineArrowRight } from "react-icons/ai";

const Home = () => {
  return (
    <>
      <ParticlesAnimation />
      <main className="flex flex-col">
        <section
          id="me"
          className="flex h-screen w-full flex-col items-center justify-center bg-transparent"
        >
          <div className="fixed z-10 mx-2 md:flex-row md:gap-6 flex flex-col items-center justify-center gap-6 rounded-2xl bg-forest-700/25 shadow-md px-10 py-14">
            <Image
              src={me}
              alt="me photo"
              className="h-[180px] w-[180px] rounded-full object-cover shadow-2xl shadow-forest-700 md:h-[220px] md:w-[220px]"
            />
            <div className="flex flex-col gap-1 items-center text-[1.25rem] text-forest-200 md:text-[1.75rem]">
              <h2 className="text-[1.5rem] text-forest-100 md:text-[2rem]">
                Estevão Santos
              </h2>
              <h2 className="text-[1rem] text-forest-100 md:text-[1.25rem]">Full Stack Developer</h2>
              <h5 className="text-[1rem] text-forest-100 md:text-[1.25rem] flex items-center justify-center flex-col">
                Explore
                <AiOutlineArrowRight className="animate-goDown md:animate-goRight mt-2"/>
              </h5>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
