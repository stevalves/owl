"use client"

import { Tooltip } from "react-tooltip";

interface iTechnologieCard {
  tech: {
    id: string;
    name: string;
    icon: JSX.Element;
  };
}

const TechnologieCard = ({ tech }: iTechnologieCard) => {
  return (
    <li
      key={tech.id}
      title={tech.name}
      data-tooltip-content={tech.name}
      data-tooltip-id={tech.id}
      className="h-16 w-16 rounded-2xl border-2 p-2 transition-colors duration-300 hover:bg-forest-800/50"
    >
      {tech.icon}
      <Tooltip id={tech.id} />
    </li>
  );
};

export default TechnologieCard;
