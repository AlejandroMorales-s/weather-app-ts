export type InitialState = {
  cities: string[];
  isLoading: boolean;
};

export type DataFetched = {};

export type CitiesFromDataFetched = {
  id: string;
  name: string;
  region: string;
  country: string;
};
