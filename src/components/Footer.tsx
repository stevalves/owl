import Logo from "./Logo";

interface iFooter {}

const Footer = ({}: iFooter) => {
  return (
    <footer className="h-52 w-full px-8 bg-forest-600">
      <Logo />
    </footer>
  );
};

export default Footer;
