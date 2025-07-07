import useGenres from "../hooks/useGenre";
import type { Genre } from "../hooks/useGenre";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  if (error) return null;
  if (isLoading) return <span className="loading loading-spinner loading-xl" />;
  return (
    <>
      <h1 className="text-2xl font-extrabold text-primary mb-6 tracking-wide uppercase">
        Genres
      </h1>
      <ul className="space-y-4">
        {data.map((genre) => (
          <li key={genre.id}>
            <button
              onClick={() => onSelectGenre(genre)}
              className={`btn btn-outline flex items-center gap-3 w-40 h-12 justify-start ${
                genre.id === selectedGenre?.id ? "bg-primary/30" : ""
              }`}
            >
              <img
                src={getCroppedImageUrl(genre.image_background)}
                alt={genre.name}
                className="w-11 h-11 object-cover rounded-md object-cover"
              />
              <span
                className={
                  genre.id === selectedGenre?.id ? "font-bold text-white" : ""
                }
              >
                {genre.name}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default GenreList;
