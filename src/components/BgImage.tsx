"use client";

import Image from "next/image";
import img from "../imgs/3big_dark_forest.png";
import { motion } from "framer-motion";

interface iBgImage {}

const BgImage = ({}: iBgImage) => {
  return (
    <Image
      src={img}
      alt="Imagem de fundo"
      layout="fill"
      objectFit="cover"
      className="animate-plim fixed top-0 h-screen w-screen brightness-75 filter transition-all duration-1000"
    />
  );
};

export default BgImage;
