import React from "react";
import type { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name || " "} ${
    gameQuery.genre?.name || " "
  } Games `;

  return (
    <h1 className="text-2xl font-bold tracking-tight mt-7 p-1">{heading}</h1>
  );
};

export default GameHeading;
