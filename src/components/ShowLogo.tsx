"use client";

import Logo from "./Logo";
import { motion } from "framer-motion";

const ShowLogo = () => {
  const container = {
    initial: {
      opacity: 1,
      transform: "scale(1)",
    },
    animate: {
      opacity: 1,
      transform: "scale(1.3)",
      transitionEnd: {
        display: "none"
      }
    },
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={container}
      className="fixed bottom-0 left-0 right-0 top-0 z-20 flex flex-col items-center justify-center bg-gradient-to-r from-forest-400 to-forest-500"
    >
      <Logo col size="xl" />
    </motion.div>
  );
};

export default ShowLogo;
