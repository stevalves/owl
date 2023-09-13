import Logo from "./Logo";

interface iFooter {}

const Footer = ({}: iFooter) => {
  return (
    <footer className="flex h-24 w-full items-center justify-center gap-6 bg-forest-600 px-8">
      <Logo />
      <p className="text-xl text-forest-50">
        2023 v1.1|
        <a
          className="hover:underline"
          href="https://my-portfolio-virid-sigma-80.vercel.app/"
        >
          beta
        </a>
      </p>
      <Logo />
    </footer>
  );
};

export default Footer;
