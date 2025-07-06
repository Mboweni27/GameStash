import React from "react";
import useGenres from "../hooks/useGenre";
import type { Genre } from "../hooks/useGenre";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}
const GenreList = ({ onSelectGenre }: Props) => {
  const { genres } = useGenres();
  return (
    <>
      <ul className="space-y-4">
        {genres.map((genre) => (
          <li key={genre.id}>
            <button
              onClick={() => onSelectGenre(genre)}
              className="btn btn-outline flex items-center gap-3 w-37 h-12 justify-start"
            >
              <img
                src={getCroppedImageUrl(genre.image_background)}
                alt={genre.name}
                className="w-10 h-10  object-cover rounded-md"
              />
              <span>{genre.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default GenreList;
