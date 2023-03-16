import { ActionReducerMapBuilder, createSlice } from "@reduxjs/toolkit";
import { InitialState, CitiesSavedInfo } from "../types/features/citiesSaved";

//* Initial state
const initialState: InitialState = {
  citiesSaved: [],
  isLoading: false,
};

//* Slice options
const options = {
  name: "citiesSaved",
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<InitialState>) => {},
};

//* Creating slice
const citiesSavedSlice = createSlice(options);

//* Selectors
type StateSelect = {
  citiesSaved: InitialState;
};

export const selectCitiesSaved = (state: StateSelect) =>
  state.citiesSaved.citiesSaved;

export const selectCitiesSavedStatus = (state: StateSelect) =>
  state.citiesSaved.isLoading;

//* Exporting reducer
export default citiesSavedSlice.reducer;
