const BASE_URL_EPISODE = "https://rickandmortyapi.com/api/episode";

export type EpisodeData = {
  id: number
  name: string
  air_date: string
  episode: string
  characters: Array<string>
  url: string
  created: string
}

export const fetchEpisode = async (/* id: number */): Promise<[]> => {
  const response = await fetch(BASE_URL_EPISODE);
  const data = await response.json();
  // console.log('desde fetching: ', data.results);
  return data.results;
};
