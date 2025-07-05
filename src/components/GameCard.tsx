import React from "react";
import type { Game } from "../hooks/useGames";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  console.log(game.background_image);
  return (
    <div className="card bg-base-200 shadow-md rounded-box overflow-hidden border border-base-700">
      <figure>
        <img
          src={game.background_image}
          alt={game.name}
          className="w-full h-48 object-cover"
        />
      </figure>
      <div className="card-body">
        <h1 className="card-title">{game.name}</h1>
      </div>
    </div>
  );
};

export default GameCard;
