import Link from "next/link";
import { AiOutlineCheckCircle } from "react-icons/ai";

interface iThanks {}

const Thanks = ({}: iThanks) => {
  return (
    <section className="flex h-screen w-full flex-col items-center justify-center text-[1.5rem] text-forest-50">
      <div className="scale-100 flex gap-4 flex-col items-center justify-center bg-forest-800/75 p-4 rounded">
        <h1 className="flex gap-2">
          Obrigado pelo contato!
        </h1>
        <AiOutlineCheckCircle className="text-4xl text-green-500"/>
        <Link href="/" className="text-base hover:underline">Continuar explorando</Link>
      </div>
    </section>
  );
};

export default Thanks;