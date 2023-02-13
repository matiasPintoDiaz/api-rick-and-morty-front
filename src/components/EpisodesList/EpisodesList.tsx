import { useState, useEffect } from "react";
import "./episodesTemp.css";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { fetchEpisodes, EpisodeData } from "../../services/fetchingEpisode";

export default function EpisodePage() {
  const [episodes, setEpisodes] = useState<EpisodeData[]>([]);
  const [expanded, setExpanded] = useState<string | false>(false);

  useEffect(() => {
    fetchEpisodes().then(setEpisodes);
    // console.log(episodes);
  }, []);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <>
      <div className="list-box">
        {episodes.map((episode) => (
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
        ))}
      </div>
    </>
  );
}