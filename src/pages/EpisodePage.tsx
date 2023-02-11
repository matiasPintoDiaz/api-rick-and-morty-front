import { useState, useEffect } from "react";
import "./episodesTemp.css";

import { fetchEpisode, episodeData } from "../services/fetchingEpisode";
import { baseEpisodeData } from "../services/basesTypes";

export default function EpisodePage() {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    fetchEpisode().then(setEpisodes)
    console.log(episodes)
  }, []);

  return (
    <>
      <div className="z">
        <ol className="episode-list">
          {episodes.map((episode) => (
            <div className="episode-box">
              <li className="episode">
                {episode.name}
              </li>
              {/* <p>{episode.episode}</p>
              <p>{episode.air_date}</p> */}
            </div>
          ))}
        </ol>
      </div>
    </>
  );
}
