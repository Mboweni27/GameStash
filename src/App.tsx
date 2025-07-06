import "./App.css";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
function App() {
  return (
    <>
      <NavBar />
      {/*this is all my tab stuff here*/}
      <div className="flex p-5 gap-4">
        {/* Sidebar: Genre List */}
        <div className="hidden md:block w-1/4">
          <GenreList />
        </div>

        <div className="w-full md:w-3/4">
          <GameGrid />
        </div>
      </div>
    </>
  );
}

export default App;
