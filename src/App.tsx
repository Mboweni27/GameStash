import "./App.css";
import GameGrid from "./components/GameGrid";
import NavBar from "./components/NavBar";
function App() {
  return (
    <>
      <NavBar />
      {/*this is all my tab stuff here*/}
      <div
        role="tablist"
        className="tabs tabs-boxed w-full max-w-screen mx-auto"
      >
        <a role="tab" className="tab flex-1 text-center">
          Tab 1
        </a>
        <a role="tab" className="tab flex-1 text-center">
          <GameGrid />
        </a>
      </div>
    </>
  );
}

export default App;
