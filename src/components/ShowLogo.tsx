"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";

const ShowLogo = () => {
  const [close, setClose] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setClose(true);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (close) return null;

  return (
    <div
      className={`fixed left-0 top-0 z-20 flex h-screen w-screen animate-pulse-and-up flex-col items-center justify-center bg-gradient-to-r from-coffee-400 to-coffee-500`}
    >
      <Logo col size="xl" />
    </div>
  );
};

export default ShowLogo;
