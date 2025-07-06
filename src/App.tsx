import { useState } from "react";
import "./App.css";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import type { Genre } from "./hooks/useGenre";
import PlatformSelector from "./components/PlatformSelector";
import type { Platform } from "./hooks/useGames";
import SortSelector from "./components/SortSelector";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );
  return (
    <>
      <NavBar />
      <div className="flex p-5 gap-6">
        <div className="hidden md:block w-1/4">
          <GenreList onSelectGenre={(genre) => setSelectedGenre(genre)} />
        </div>

        <div className="w-full md:w-7/4">
          <div className="flex items-center gap-4 mb-4">
            <PlatformSelector
              selectedPlatform={selectedPlatform}
              onSelectedPlatform={(platform) => setSelectedPlatform(platform)}
            />
            <SortSelector />
          </div>
          <GameGrid
            selectedPlatform={selectedPlatform}
            selectedGenre={selectedGenre}
          />
        </div>
      </div>
    </>
  );
}

export default App;
