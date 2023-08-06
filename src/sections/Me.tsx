import Image from "next/image";
import me from "../imgs/me.png";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";
import Logo from "@/components/Logo";

interface iMe {}

const Me = ({}: iMe) => {
  return (
    <section
      id="me"
      className="flex h-screen w-full flex-col items-center justify-center bg-coffee-900"
    >
      <div className="flex h-1/2 w-full max-w-[780px] flex-col justify-between rounded-2xl bg-zinc-500 px-4 py-4">
        <div className="flex">
          <Image
            alt="my photo"
            src={me}
            title="Estevão Santos"
            className="h-24 w-24 rounded-full bg-fixed bg-center object-cover"
          />
          <div className="h-24 overflow-hidden px-4 py-2">
            <h1 className="overflow-hidden text-ellipsis whitespace-nowrap text-[2rem] font-semibold text-coffee-900">
              Estevão Alves dos Santos
            </h1>
            <h5 className="text-coffee-900">Full Stack Developer</h5>
          </div>
        </div>
        <p className="mt-2 w-full overflow-y-auto py-8 text-center text-xl italic text-coffee-900">
          Adentre meu mundo criativo através do meu portfólio. Cada projeto é
          uma história única, onde a paixão pela inovação e design se fundem.
          Sinta-se à vontade para explorar e conhecer minha jornada.
        </p>
        <Logo className="w-full py-4 text-center text-coffee-900" />
      </div>
      <div className="absolute bottom-[3rem]">
        <HiOutlineChevronDoubleDown className="bottom-12 z-0 mt-12 animate-goDown text-[2rem] text-zinc-300" />
      </div>
    </section>
  );
};

export default Me;
