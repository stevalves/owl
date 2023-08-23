export interface iProject {
  id: string;
  name: string;
  description: string;
  details: string;
  technologies: string[];
  github: string;
  deploy: string;
  cover: string;
  gif: string;
  type: "front end" | "back end" | "full stack";
}

export const projects: iProject[] = [
  {
    id: "1",
    name: "Wheels On Sale",
    description: "A melhor plataforma e-commerce de carros do Brasil!",
    details:
      "Participei de um projeto em equipe envolvendo quatro colaboradores, no qual desenvolvemos uma plataforma de e-commerce voltada para a venda de automóveis. Adotamos as melhores práticas do mercado, empregando ferramentas como Jira para gerenciamento e GitHub para controle de versões. Durante o processo, aplicamos nosso conhecimento para criar uma interface de usuário intuitiva no front-end e desenvolvemos uma sólida infraestrutura no back-end, garantindo a robustez da aplicação.",
    gif: "https://res.cloudinary.com/dcaz5tcya/image/upload/v1692695439/wos-gif_vtpzsy.gif",
    cover:
      "https://res.cloudinary.com/dcaz5tcya/image/upload/v1692695507/wos_-_cover_ya9ytj.jpg",
    deploy: "https://front-wheels-on-sale.vercel.app/",
    github: "https://github.com/orgs/grupo27t14/repositories",
    type: "full stack",
    technologies: [
      "zod",
      "axios",
      "react-hook-form",
      "react-router-dom",
      "styled-components",
      "typescript",
      "express",
      "typeorm",
      "jsonwebtoken",
      "postgresql",
      "react",
    ],
  },
  {
    id: "2",
    name: "OurC",
    description: "Gerencie seus contatos conosco de forma rápida e eficaz!",
    details:
      "Participei de um desafio Full Stack, no qual simulamos um teste real de mercado. Em apenas uma semana, construímos um projeto completo abrangendo todas as camadas, com o objetivo de criar uma aplicação para gerenciamento de contatos.",
    gif: "https://res.cloudinary.com/dcaz5tcya/image/upload/v1692697472/ourc_-_gif_gwlfqf.gif",
    cover:
      "https://res.cloudinary.com/dcaz5tcya/image/upload/v1692697475/ourc_-_cover_mdcqwq.png",
    deploy: "https://m6sp2-front.vercel.app/",
    github: "https://github.com/stevalves/m6sp2-front",
    type: "full stack",
    technologies: [
      "zod",
      "axios",
      "react-hook-form",
      "react-router-dom",
      "styled-components",
      "typescript",
      "express",
      "typeorm",
      "jsonwebtoken",
      "postgresql",
      "react",
    ],
  },
  {
    id: "3",
    name: "Kenzie Burguer",
    description: "Bateu aquela fome? Nós te ajudamos a expulsar ela!",
    details:
      "Participei de um desafio, no qual simulamos uma loja online de comida. Sendo o primeiro projeto meu feito com typescript, foi muito desafiador, mas olhando hoje, não consigo ficar sem ele.",
    gif: "https://res.cloudinary.com/dcaz5tcya/image/upload/v1692779147/burguer_-_gif_uuv7eg.gif",
    cover:
      "https://res.cloudinary.com/dcaz5tcya/image/upload/v1692779134/burguer_-_cover_rhqhxn.png",
    deploy: "https://entrega-hamburgueria-v2-stevalves-stevalves.vercel.app/",
    github: "https://github.com/stevalves/hamburgueria-ts",
    type: "front end",
    technologies: [
      "yup",
      "axios",
      "react-hook-form",
      "react-router-dom",
      "styled-components",
      "typescript",
      "react",
    ],
  },
];
