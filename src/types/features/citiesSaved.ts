export type CitiesSavedInfo = {
  name: string;
  temp: number;
  air_quality: number;
};

export type InitialState = {
  citiesSaved: CitiesSavedInfo[];
  isLoading: boolean;
};
