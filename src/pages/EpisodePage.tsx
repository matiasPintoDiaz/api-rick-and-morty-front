import { useState, useEffect } from "react";

import { fetchOneEpisode, EpisodeData } from "../services/fetchingEpisode";

export default function EpisodePage() {
  const [id, setId] = useState(1);
  const [episode, setEpisode] = useState<EpisodeData>();

  useEffect(() => {
    fetchOneEpisode(id).then(setEpisode)
  }, [id]);



  return (
    <>
      <div></div>
    </>
  )
}
