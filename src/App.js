import React from "react";
import NavBar from "./Components/NavBar";
import MovieMain from "./Components/MovieMain";
import MovieSection from "./Components/MovieSection";

function App() {
  return (
    <div className="App">
      <div>
        <NavBar />
      </div>
      <div className="mainscene">
        <MovieMain />
      </div>
      <div>
        <MovieSection />
      </div>
    </div>
  );
}

export default App;
