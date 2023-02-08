import { useState, useEffect } from "react";
import "./App.css";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import { fetchCharacter } from "./services/fetchingCharacter";

function App() {
  const [count, setCount] = useState(1);
  const [character, setCharacter] = useState({}); // ERROR: La propiedad 'image' no existe en el tipo '{}'.ts(2339)

  const setCountOp = (op: string) => {
    if (op == "sub") {
      if (count <= 1) return;
      setCount(count - 1);
    } else {
      setCount(count + 1);
    }
  };

  useEffect(() => {
    // if (!count) return;
    fetchCharacter(count)
      .then((data) => {
        setCharacter(data);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, [count]);

  return (
    <div className="App">
      <div>
        <h1>Rick & Morty</h1>
      </div>
      <div className="card">
        <button onClick={() => setCountOp("sub")}>Previous Character</button>
        <p className="character">Personaje número: {count}</p>
        <button onClick={() => setCountOp("add")}>Next Character</button>
      </div>
      <div className="card-character">
        {character && (
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="300"
                image={character.image}
                alt="character image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {character.name}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        )}
      </div>
    </div>
  );
}

export default App;
