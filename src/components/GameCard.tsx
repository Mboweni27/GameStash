import React from "react";
import type { Game } from "../hooks/useGames";
import PlatfromIconList from "./PlatformIconList";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
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
        <PlatfromIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </div>
    </div>
  );
};

export default GameCard;
