const BASE_URL_LOCATION = "https://rickandmortyapi.com/api/location/";

type locationData = {
  id: number
  name: string
  type: string
  dimension: string
  residents: Array<string>
  url: string
  created: string
};

export const fetchLocation = async (id: number): Promise<locationData> => {
  return {};
};
