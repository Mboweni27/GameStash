import React from "react";
import useGenres from "../hooks/useGenre";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { genres } = useGenres();
  return (
    <>
      <ul className="space-y-4">
        {genres.map((genre) => (
          <li key={genre.id}>
            <div className="flex items-center gap-4">
              <img
                src={getCroppedImageUrl(genre.image_background)}
                alt={genre.name}
                className="w-12 h-12 object-cover rounded-md"
              />
              <p className="font-medium">{genre.name}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default GenreList;
