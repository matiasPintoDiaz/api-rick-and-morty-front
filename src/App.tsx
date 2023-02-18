import { useState, useEffect } from "react";
import "./App.css";

import { fetchCharacter, CharacterData } from "./services/fetchingCharacter";

function App() {
  return (
    <>
      <div className="App">
        <div>
          <h1>Rick & Morty API</h1>
        </div>
        <div className="card"></div>
        <div className="character-card"></div>
      </div>
    </>
  );
}

export default App;
