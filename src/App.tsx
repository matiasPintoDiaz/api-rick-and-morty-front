import { useState, useEffect } from "react";
import "./App.css";

import Portada from "./assets/Rick_y_Morty_Serie_de_TV-157026175-large.jpg";

function App() {
  return (
    <>
      <div className="App">
        <div>
          <h1>Rick & Morty API</h1>
        </div>
        <img src={Portada} alt="Imagen-principal" />
      </div>
    </>
  );
}

export default App;
