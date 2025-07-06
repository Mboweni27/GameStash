import { useState } from "react";
import "./App.css";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import type { Genre } from "./hooks/useGenre";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  return (
    <>
      <NavBar />
      {/*this is all my tab stuff here*/}
      <div className="flex p-5 gap-6">
        {/* Sidebar: Genre List */}
        <div className="hidden md:block w-0,9/4">
          <GenreList onSelectGenre={(genre) => setSelectedGenre(genre)} />
        </div>

        <div className="w-full md:w-2.1/4">
          <GameGrid selectedGenre={selectedGenre} />
        </div>
      </div>
    </>
  );
}

export default App;
