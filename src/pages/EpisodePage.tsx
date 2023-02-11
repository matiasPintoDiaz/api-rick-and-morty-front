import { useState, useEffect } from "react";
import "./episodesTemp.css";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { fetchEpisode, episodeData } from "../services/fetchingEpisode";
import { baseEpisodeData } from "../services/basesTypes";

export default function EpisodePage() {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    fetchEpisode().then(setEpisodes);
    console.log(episodes);
  }, []);

  return (
    <>
      <div className="list-box">
        <ul className="episode-list">
          {episodes.map((episode) => (
            <div className="episode-box">
              {/* <li className="episode">{episode.name}</li> */}
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>{episode.name}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget. */}
                  </Typography>
                </AccordionDetails>
              </Accordion>
              {/* <p>{episode.episode}</p>
              <p>{episode.air_date}</p> */}
            </div>
          ))}
        </ul>
      </div>
      <div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Accordion 1</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
              eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </>
  );
}
