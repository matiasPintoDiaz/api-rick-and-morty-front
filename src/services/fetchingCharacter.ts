const BASE_URL_CHARACTER = "https://rickandmortyapi.com/api/character/";

export const fetchCharacter = async (count: number): Promise<object> => {
  const response = await fetch(`${BASE_URL_CHARACTER}${count}`);
  const data = await response.json();
  return data;
};
