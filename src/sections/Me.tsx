import { CgScrollV } from "react-icons/cg";
import { PiGoogleDriveLogoBold } from "react-icons/pi";
import PageNumber from "@/components/PageNumber";
import Link from "next/link";

const Me = () => {
  return (
    <section
      id="me"
      className="flex h-screen w-full flex-col items-center justify-end bg-transparent"
    >
      <div className="container mx-2 flex h-3/4 scale-100 flex-col items-center gap-6 rounded-bottom border-b-2 border-dashed border-forest-800 bg-forest-700/40 px-2 py-4 shadow-md md:flex-row md:gap-6">
        <PageNumber page="01" title="Home" />
        <div className="mt-[20%] md:mt-0 flex flex-col items-center gap-8 text-forest-100 md:items-start">
          <h2 className="w-max animate-blinkCursor pr-1 text-[1.5rem] md:text-[2.5rem]">
            Estevão Santos
          </h2>

          <h3 className="text-[1rem]  md:text-[1.5rem]">
            Desenvolvedor Full Stack
          </h3>
          <Link
            target="_blank"
            className="flex w-max items-center gap-2 rounded border-2 border-forest-400 px-6 py-4 text-lg transition-colors duration-300 hover:bg-forest-400/25 hover:shadow-2xl hover:shadow-forest-900"
            href="https://docs.google.com/document/d/1TGF_Di3hQPzsjK9aSA38xiC5XLL8ZJ2_aSOorRxQOsU/edit#heading=h.t4nvdwmr0tlt"
          >
            Acessar currículo <PiGoogleDriveLogoBold />
          </Link>
          <div className="absolute bottom-20 left-1/2 -translate-x-[50%]">
            <CgScrollV className="animate-goDown text-[2rem]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Me;
