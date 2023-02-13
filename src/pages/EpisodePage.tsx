import { useState, useEffect } from "react";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { fetchOneEpisode, EpisodeData } from "../services/fetchingEpisode";

export default function EpisodePage() {
  const [id, setId] = useState(1);
  const [episode, setEpisode] = useState<EpisodeData>();
  const [expanded, setExpanded] = useState<string | false>(false);

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

    const episode = await fetchOneEpisode(id);
    // console.log(episode);
    setEpisode(episode);
  };

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <>
      <div>
        <div className="">
          <h1>Rick & Morty Episodes</h1>
        </div>
        <div className="buttons-episode-box">
          <button className="episode-buton" onClick={() => setCountOp("sub")}>
            Previous Episode
          </button>
          <p>Episodio numero: {id}</p>
          <button className="episode-buton" onClick={() => setCountOp("add")}>
            Next Episode{" "}
          </button>
        </div>
        <div className="list-box">
          {episode && (
            <Accordion
              expanded={expanded === `${episode.name}`}
              onChange={handleChange(`${episode.name}`)}
              key={episode.id.toString()}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id={episode.name}
              >
                <Typography>{episode.name}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  {episode.episode}
                  {episode.air_date}
                </Typography>
              </AccordionDetails>
            </Accordion>
          )}
        </div>
      </div>
    </>
  );
}
