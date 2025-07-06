import React from "react";
import type { Game } from "../hooks/useGames";
import PlatfromIconList from "./PlatformIconList";
import getCroppedImageUrl from "../services/image-url";
import CriticScore from "./CriticScore";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <div>
      <figure>
        <img
          src={getCroppedImageUrl(game.background_image)}
          alt={game.name}
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="card-body grid grid-rows-[auto_auto_auto] gap-3">
        <h1 className="card-title">{game.name}</h1>

        <div className="flex flex-wrap gap-3">
          <PlatfromIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
        </div>

        <div>
          <CriticScore score={game.metacritic} />
        </div>
      </div>
    </div>
  );
};

export default GameCard;
