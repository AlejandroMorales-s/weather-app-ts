import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

//* Reducers
import weatherData from "../features/weatherDataSlice";
import searchCityByName from "../features/searchCityByName";
import citiesSaved from "../features/citiesSaved";

export const store = configureStore({
  reducer: {
    weatherData,
    searchCityByName,
    citiesSaved,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
