import { useState, useEffect } from "react";
import "../css/characterpage.css";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import { fetchCharacter, CharacterData } from "../services/fetchingCharacter";

function CharacterPage() {
  const [id, setId] = useState(1);
  const [character, setCharacter] = useState<CharacterData>();

  useEffect(() => {
    fetchCharacter(id).then(setCharacter);
  }, [id]);

  const setCountOp = async (op: string) => {
    if (op == "sub") {
      if (id <= 1) return;
      setId(id - 1);
    } else {
      setId(id + 1);
    }

    const character = await fetchCharacter(id);
    console.log(character);
    setCharacter(character);
  };

  return (
    <>
      <div className="character-box">
        <div>
          <h1>Rick & Morty Characters</h1>
        </div>
        <div className="buttons-character-box">
          <button
            className="character-button"
            onClick={() => setCountOp("sub")}
          >
            Previous Character
          </button>
          <p className="character-id">Personaje número: {id}</p>
          <button
            className="character-button"
            onClick={() => setCountOp("add")}
          >
            Next Character
          </button>
        </div>
        <div className="cards">
          {character && (
            <Card className="character-card" sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="300"
                  image={character.image}
                  alt="character image"
                />
                <CardContent>
                  <Typography variant="h4" component="div">
                    {character.name}
                  </Typography>
                </CardContent>
                <div className="content">
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                    >
                      Status: {character.status}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                    >
                      Species: {character.species}
                    </Typography>
                  </CardContent>
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                    >
                      Type: {character.type ? character.type : "NA"}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                    >
                      Origin: {character.origin.name}
                    </Typography>
                  </CardContent>
                </div>
              </CardActionArea>
            </Card>
          )}
        </div>
      </div>
    </>
  );
}

export default CharacterPage;
