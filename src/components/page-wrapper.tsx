"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const transitionVar = {
  initial: {
    x: "100%",
    width: "100%",
  },
  animate: {
    x: "0%",
    width: "0%",
  },
  exit: {
    x: ["0%", "100%"],
    width: ["0%", "100%"],
  },
};

const DivTransition = () => {
  return (
    <>
      <motion.div
        className="fixed bottom-0 right-full top-0 z-50 flex h-screen w-screen items-center justify-center bg-forest-700"
        variants={transitionVar}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0, duration: 0.4, ease: "easeIn" }}
      />
      <motion.div
        className="fixed bottom-0 right-full top-0 z-40 h-screen w-screen bg-forest-600"
        variants={transitionVar}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.2, duration: 0.4, ease: "easeIn" }}
      />
      <motion.div
        className="fixed bottom-0 right-full top-0 z-30 h-screen w-screen bg-forest-500"
        variants={transitionVar}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ delay: 0.4, duration: 0.4, ease: "easeIn" }}
      />
    </>
  );
};

export const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  const path = usePathname();
  return (
    <AnimatePresence mode="wait">
      <motion.div key={path} initial={false} className="h-full">
        <DivTransition />
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
