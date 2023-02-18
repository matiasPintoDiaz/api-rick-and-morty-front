import { useState, useEffect } from 'react';
import "../css/characterpage.css";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import { fetchCharacter, CharacterData } from "../services/fetchingCharacter";

export default function CharacterPage() {
  const [id, setId] = useState(1);
  const [character, setCharacter] = useState<CharacterData>();

  useEffect(() => {

  });

  // fetching + setId(count)

  return (
    <>
      <div className="character-box">
        <div>
          <h1>Rick & Morty Characters</h1>
        </div>
        <div className="buttons-character-box">
          <button className='character-button'>Previous Character</button>
          <p className='character-id'>Personaje número: {id}</p>
          <button className='character-button'>Next Character</button>
        </div>
        <div className="list-box">

        </div>
      </div>
    </>
  );
}
