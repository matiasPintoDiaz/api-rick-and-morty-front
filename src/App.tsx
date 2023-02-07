import { useState, useEffect } from "react";
import "./App.css";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const BASE_URL_CHARACTER = "https://rickandmortyapi.com/api/character/";

function App() {
  const [count, setCount] = useState(0);
  const [character, setCharacter] = useState({}); // ERROR: La propiedad 'image' no existe en el tipo 'never'.ts(2339)

  const fetchCharacter = async (): Promise<object> => {
    const response = await fetch(`${BASE_URL_CHARACTER}${count}`);
    const data = await response.json();
    console.log(data);
    return data;
  };

  useEffect(() => {
    if (!count || count <= 0) return;

    fetchCharacter()
      .then((data) => {
      setCharacter(data);
      })
      .catch(e => {
        console.log(e.message)
      });
  }, [count]);

  return (
    <div className="App">
      <div>
        <h1>Rick & Morty</h1>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count - 1)}>
          Previous Character
        </button>
        <p className="character">Personaje número: {count}</p>
        <button onClick={() => setCount((count) => count + 1)}>
          Next Character
        </button>
      </div>
      <div className="card-character">
        {character && 
          <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              image={character.image}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {character.name}
              </Typography>
              {<Typography variant="body2" color="text.secondary">
                
              </Typography>}
            </CardContent>
          </CardActionArea>
        </Card>}
      </div>
    </div>
  );
}

export default App;
