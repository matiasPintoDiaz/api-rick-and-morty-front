const BASE_URL_CHARACTER = "https://rickandmortyapi.com/api/character/";

type characterData = {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: {
    name: string,
    url: string
  }
  location: {
    name: string,
    url: string
  }
  image: string
  episode: Array<string>
  url: string
  created: string
}

export const fetchCharacter = async (count: number): Promise<characterData> => {
  const response = await fetch(`${BASE_URL_CHARACTER}${count}`);
  const data = await response.json();
  return data;
};
