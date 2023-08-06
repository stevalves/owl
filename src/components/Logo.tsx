import { ComponentProps } from "react";
import { GiOwl } from "react-icons/gi";
import { VariantProps, tv } from "tailwind-variants";

const logo = tv({
  base: "text-[2.5rem] text-coffee-50 flex items-center justify-center w-max",
  variants: {
    col: {
      true: "flex-col",
    },
    size: {
      default: "text-[2.5rem]",
      sm: "text-[2rem]",
      md: "text-[3rem]",
      xl: "text-[4rem]",
    },
  },
  defaultVariants: {
    col: false,
    size: "default",
  },
});

export type iLogo = ComponentProps<"h1"> & VariantProps<typeof logo>;

const Logo = ({ col=false, size='default', className }: iLogo) => {
  return (
    <h1 className={logo({ col, size, className })}>
      <GiOwl />
    </h1>
  );
};

export default Logo;
