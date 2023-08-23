import Logo from "./Logo";

interface iFooter {}

const Footer = ({}: iFooter) => {
  return (
    <footer className="flex h-24 w-full scale-100 items-center justify-center bg-forest-600 px-8 gap-6">
      <Logo />
      <p className="text-forest-50 text-xl">2023 v1</p>
      <Logo />
    </footer>
  );
};

export default Footer;
