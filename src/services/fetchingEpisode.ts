const BASE_URL_EPISODE = "https://rickandmortyapi.com/api/episode/";

export type EpisodeData = {
  id: number
  name: string
  air_date: string
  episode: string
  characters: Array<string>
  url: string
  created: string
}

export const fetchEpisodes = async (/* id: number */): Promise<[]> => {
  const response = await fetch(BASE_URL_EPISODE);
  const data = await response.json();
  // console.log('desde fetching: ', data.results);
  return data.results;
};


export const fetchOneEpisode = async (id: number): Promise<EpisodeData> => {
  const response = await fetch(`${BASE_URL_EPISODE}${id}`);
  const episode = await response.json();
  // console.log('desde fetching: ', episode);
  return episode;
}