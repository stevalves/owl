import { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";
import { BiLogoOkRu } from "react-icons/bi";

const tv_button = tv({
  base: "flex items-center justify-center rounded bg-zinc-200 font-medium text-zinc-800 hover:bg-zinc-300 hover:duration-200",
  variants: {
    size: {
      default: "h-10 px-4",
      sm: "h-8 px-3",
      xs: "h-6 px-2 text-xs",
    },
    sucess: {
      true: "bg-emerald-400 hover:bg-emerald-500",
    },
  },
  defaultVariants: {
    size: "default",
    sucess: false,
  },
});

export type iButtonProps = ComponentProps<"button"> &
  VariantProps<typeof tv_button>;

export const Button = ({
  sucess = false,
  size,
  className,
  ...props
}: iButtonProps) => {
  return (
    <button className={tv_button({ size, sucess, className })} {...props}>
      {sucess ? <BiLogoOkRu /> : props.children}
    </button>
  );
};
