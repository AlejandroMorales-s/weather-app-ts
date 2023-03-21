import {
  createSlice,
  createAsyncThunk,
  ActionReducerMapBuilder,
} from "@reduxjs/toolkit";
import {
  CitiesFromDataFetched,
  InitialState,
} from "../types/features/searchCityByName";

//* Async thunks
export const filterCitiesByName = createAsyncThunk(
  "searchCityByName/filterCities",
  async (userInput: string) => {
    const apiKey: string = import.meta.env.VITE_API_KEY;

    const response = await fetch(
      `https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${userInput}&lang=es`
    );

    const data: CitiesFromDataFetched[] = await response.json();

    const citiesName: string[] = [];

    data.forEach((city) => {
      const { country, name, region } = city;
      const fullNameArray = [name, region, country];
      const fullNameString = fullNameArray.join(", ");
      citiesName.push(fullNameString);
    });

    return citiesName;
  }
);

//* Initial state
const initialState: InitialState = {
  cities: [],
  isLoading: false,
};

//* Options
const options = {
  name: "searchCityByName",
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<InitialState>) => {
    builder.addCase(filterCitiesByName.fulfilled, (state, action) => {
      state.isLoading = false;
      state.cities = action.payload;
    });
    builder.addCase(filterCitiesByName.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(filterCitiesByName.rejected, (state, action) => {});
  },
};

//* Creating slice
const searchCityByNameSlice = createSlice(options);

//* Selectors
type StateSelect = {
  searchCityByName: InitialState;
};

export const selectCitiesFiltered = (state: StateSelect) =>
  state.searchCityByName.cities;

export const selectCitiesFilteredStatus = (state: StateSelect) =>
  state.searchCityByName.isLoading;

//* Export reducer
export default searchCityByNameSlice.reducer;
