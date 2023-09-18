import {
  AiFillMail,
  AiOutlineWhatsApp,
  AiOutlineTwitter,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { tv } from "tailwind-variants";

interface iNavValues {
  id: string
  value: React.ReactNode;
  href: string;
}

const navValues: iNavValues[] = [
  {
    id: "Send Mail Message",
    value: (
      <>
        <AiFillMail />
        <h4 className="flex sm:hidden mt-1 text-[1.5rem] tracking-wide font-light">Send Mail</h4>
      </>
    ),
    href: "mailto:ealves1710@hotmail.com",
  },
  {
    id: "Send WhatsApp Message",
    value: (
      <>
        <AiOutlineWhatsApp />
        <h4 className="flex sm:hidden mt-1 text-[1.5rem] tracking-wide font-light">WhatsApp</h4>
      </>
    ),
    href: "https://api.whatsapp.com/send?phone=+5514998727753&text=Ol%C3%A1%2C%20venho%20por%20meio%20do%20seu%20portf%C3%B3lio%20na%20internet%2C%20gostaria%20de%20conhecer%20melhor%20seus%20servi%C3%A7os",
  },
  {
    id: "My Twitter",
    value: (
      <>
        <AiOutlineTwitter />
        <h4 className="flex sm:hidden mt-1 text-[1.5rem] tracking-wide font-light">Twitter</h4>
      </>
    ),
    href: "https://twitter.com/stev_alves",
  },
  {
    id: "My GitHub",
    value: (
      <>
        <AiFillGithub />
        <h4 className="flex sm:hidden mt-1 text-[1.5rem] tracking-wide font-light">GitHub</h4>
      </>
    ),
    href: "https://github.com/stevalves",
  },
  {
    id: "My LinkedIn",
    value: (
      <>
        <AiFillLinkedin />
        <h4 className="flex sm:hidden mt-1 text-[1.5rem] tracking-wide font-light">LinkedIn</h4>
      </>
    ),
    href: "https://www.linkedin.com/in/stevalves/",
  },
];

interface iNavList {
  open: boolean;
}

const NavList = ({ open }: iNavList) => {
  const list_tv = tv({
    base: "fixed sm:py-4 overflow-hidden flex flex-col transition-all sm:static sm:h-max text-[2rem] sm:text-[1.5rem] justify-between py-24 sm:gap-2 w-0 sm:bg-transparent sm:flex-row sm:w-max sm:visible overflow-x-hidden bg-forest-700/95 invisible top-0 h-screen right-0 duration-1",
    variants: {
      open: {
        true: "w-full visible z-10",
      },
    },
    defaultVariants: {
      open: false,
    },
  });

  return (
    <ul className={list_tv({ open })}>
      {navValues.map((value) => (
          <li className="flex items-center justify-center" key={value.id} title={value.id}>
            <a
              target="_blank"
              href={value.href}
              className="flex flex-col items-center transition-colors duration-[.3s] hover:text-forest-200"
            >
              {value.value}
            </a>
          </li>
      ))}
    </ul>
  );
};

export default NavList;
