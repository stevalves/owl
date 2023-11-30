import PageNumber from "@/components/PageNumber";
import me from "../imgs/me.png";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="mb-4 h-[80vh] w-full md:mb-16">
      <div className="container mx-auto flex h-full scale-100 flex-col-reverse justify-between gap-4 rounded-top border-t-2 border-dashed border-forest-800 bg-forest-700/40 px-2  py-4 md:flex-row-reverse">
        <PageNumber page="02" title="Sobre" />
        <div className="h-full w-full flex-col justify-center gap-4 overflow-y-auto text-forest-50 md:flex md:p-12">
          <h4 className="text-xl font-semibold md:pb-4">
            Um pouco sobre mim...
          </h4>
          <p>
            Olá, sou Estevão, tenho 21 anos e sou de Marília, SP. Desde minha
            adolescência, meu interesse pela informática sempre foi evidente,
            levando-me a investir em cursos que abrangem diversas áreas desse
            campo, como assistência de suporte técnico e pacote Office.
          </p>
          <p>
            Durante um desses cursos, tive meu primeiro contato com algoritmos,
            despertando uma paixão pelo desenvolvimento web. Pesquisando mais
            sobre o assunto, mergulhei de cabeça nessa área empolgante.
          </p>
          <p>
            Há alguns anos, tive a sorte de descobrir o curso da Kenzie Academy,
            recentemente. Durante esse período, adquiri um conhecimento sólido
            em desenvolvimento web, trabalhando em mais de 30 projetos
            desafiadores que me permitiram aplicar meu aprendizado na prática.
            Além disso, esse percurso também me ajudou a crescer como indivíduo,
            desenvolvendo habilidades interpessoais e de comunicação que
            considero tão importantes quanto as habilidades técnicas.
          </p>
          <p>
            Atualmente, estou cursando Ciências da Computação para aprimorar
            ainda mais minha base de conhecimento. Essa jornada acadêmica
            reflete meu compromisso contínuo com o aprendizado e o
            desenvolvimento na área de tecnologia.
          </p>
          <p>
            Fico à disposição para compartilhar mais sobre minha trajetória e
            habilidades, e estou aberto a oportunidades de colaboração. Caso
            queira entrar em contato, você pode me encontrar por{" "}
            <a
              href="https://api.whatsapp.com/send?phone=+5514998727753&text=Ol%C3%A1%2C%20venho%20por%20meio%20do%20seu%20portf%C3%B3lio%20na%20internet%2C%20gostaria%20de%20conhecer%20melhor%20seus%20servi%C3%A7os"
              className="underline"
            >
              aqui
            </a>
            .
          </p>

          <p>
            Agradeço pela atenção e estou empolgado com as possibilidades que o
            futuro na tecnologia reserva para mim.
          </p>
        </div>
        <div className="flex w-full flex-col items-center justify-center md:h-full md:w-max md:justify-center">
          <Image
            src={me}
            alt="me photo"
            className="h-[180px] w-[180px] rounded-full object-cover shadow-2xl shadow-forest-700 md:h-[220px] md:w-[220px]"
          />
          <div className="flex w-max -translate-y-2 flex-col justify-between gap-4 rounded-md bg-black/20 p-4 text-sm text-forest-100 md:text-xl">
            <p>1+ Anos codando</p>
            <p>30+ Projetos concluídos</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
