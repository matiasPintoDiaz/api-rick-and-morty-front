import { useState, useEffect } from "react";
import "./episodesTemp.css";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { fetchEpisode, EpisodeData } from "../services/fetchingEpisode";

export default function EpisodePage() {
  const [episodes, setEpisodes] = useState<EpisodeData[]>([]);

  useEffect(() => {
    fetchEpisode().then(setEpisodes);
    // console.log(episodes);
  }, []);

  return (
    <>
      <div className="list-box">
        {episodes.map((episode) => (
          <div className="episode-box">
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id={episode.name}
              >
                <Typography>{episode.name}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <p>{episode.episode}</p>
                  <p>{episode.air_date}</p>
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        ))}
      </div>
    </>
  );
}
