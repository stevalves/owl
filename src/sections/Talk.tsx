import PageNumber from "@/components/PageNumber";

interface iTalk {}

const Talk = ({}: iTalk) => {
  return (
    <section id="talk" className="h-[75vh] w-full">
      <div className="container mx-auto flex h-full scale-100 border-t-2 border-dashed border-forest-800 bg-forest-700/40 px-2 py-4">
        <div className="flex h-full w-full flex-col items-center justify-center gap-6 text-forest-50">
          <h3 className="text-4xl text-center">Bora troca uma idéia?</h3>
          <form
            action="https://formsubmit.co/ealves1710@hotmail.com"
            method="POST"
            className="flex flex-col w-full max-w-[440px] gap-6 rounded bg-forest-800/80 px-8 py-4"
          >
            <fieldset className="flex flex-col">
              <label htmlFor="name">Nome*</label>
              <input type="text" name="name" id="name" placeholder="Insira seu nome" className="px-2 py-1 rounded text-forest-900" required />
            </fieldset>
            <fieldset className="flex flex-col">
              <label htmlFor="email">E-mail*</label>
              <input type="email" name="email" id="email" placeholder="Insira seu email" className="px-2 py-1 rounded text-forest-900" required />
            </fieldset>
            <fieldset className="flex flex-col">
              <label htmlFor="message">Mensagem*</label>
              <textarea name="message" id="message" placeholder="Insira sua mensagem" className="px-2 py-1 rounded text-forest-900" required></textarea>
            </fieldset>
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_next"
              value="http://localhost:3000/projects"
            />
            <button className="text-xl border-2 border-forest-50 p-2 rounded hover:bg-forest-300/20 transition-colors duration-300" type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Talk;
