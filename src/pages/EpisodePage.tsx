import { useState, useEffect } from "react";
import "./episodesTemp.css";

import { fetchEpisode, episodeData } from "../services/fetchingEpisode";
import { baseEpisodeData } from "../services/basesTypes";

export default function EpisodePage() {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    fetchEpisode().then(setEpisodes)
    console.log(typeof episodes)
  }, []);

  return (
    <>
      <div className="">
        <ol>
          {episodes.map((episode) => (
            <li>
              {episode.name}
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
