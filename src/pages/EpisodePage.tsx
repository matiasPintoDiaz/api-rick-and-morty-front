import { useState, useEffect } from "react";
import "../css/episodePage.css";
// import "./episodesTemp.css";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


import { fetchOneEpisode, EpisodeData } from "../services/fetchingEpisode";

function EpisodePage() {
  const [id, setId] = useState(1);
  const [episode, setEpisode] = useState<EpisodeData>();
  const [expanded, setExpanded] = useState<string | false>(false);
  // const [charactersPerEpisode, setCharactersPerEpisode] = useState<Array<string>>([])

  useEffect(() => {
    fetchOneEpisode(id).then(setEpisode);
  }, [id]);

  const setCountOp = async (op: string) => {
    if (op == "sub") {
      if (id <= 1) return;
      setId(id - 1);
    } else {
      setId(id + 1);
    }

    const episodeResponse = await fetchOneEpisode(id);
    // console.log(episode);

    // setCharactersPerEpisode(episodeResponse.characters);

    setEpisode(episode);
  };

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <>
      <div className="episode-box">
        <div>
          <h1>Rick & Morty Episodes</h1>
        </div>
        <div className="buttons-episode-box">
          <button className="episode-button" onClick={() => setCountOp("sub")}>
            Previous Episode
          </button>
          <p className="episode-id">Episodio número: {id}</p>
          <button className="episode-button" onClick={() => setCountOp("add")}>
            Next Episode
          </button>
        </div>
        <div className="list-box">
          {episode && (
            <Accordion
              className="accordion"
              expanded={expanded === `${episode.name}`}
              onChange={handleChange(`${episode.name}`)}
              key={episode.id.toString()}
            >
              <AccordionSummary
                className="accordion"
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id={episode.name}
              >
                <Typography>{episode.name}</Typography>
              </AccordionSummary>
              <AccordionDetails className="accordion">
                <Typography>
                  <div>
                    <p>Episodio: {episode.episode}</p>
                    <p>Fecha de lanzamiento: {episode.air_date}</p>
                    {/* <p>{typeof episode.characters[0]}</p>
                    {/* <p>{episode.characters}</p> */}
                    {/* {Object.values(episode.characters)} */}
                    {/* {charactersPerEpisode.map((characters) => {
                      <li>{characters}</li>;
                    })} */}
                  </div>
                </Typography>
              </AccordionDetails>
            </Accordion>
          )}
        </div>
      </div>
    </>
  );
}

export default EpisodePage;
