import Logo from "./Logo";

interface iFooter {}

const Footer = ({}: iFooter) => {
  return (
    <footer className="absolute bottom-[-13rem] left-0 h-52 w-full px-8 bg-forest-700">
      <Logo />
    </footer>
  );
};

export default Footer;
