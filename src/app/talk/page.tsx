import { Metadata } from "next";

interface iTalk {}

export const metadata: Metadata = {
  title: "ealves",
  description: "Estevão Alves dos Santos's portfolio.",
};

const Talk = ({}: iTalk) => {
  return (
    <div className="w-full h-screen">
      <h1>Talk</h1>
    </div>
  );
};

export default Talk;
