import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

//* Reducers
import weatherData from "../features/weatherDataSlice";
import searchCityByName from "../features/searchCityByName";
import citiesSaved from "../features/citiesSaved";
import user from "../features/userAuth";

export const store = configureStore({
  reducer: {
    weatherData,
    searchCityByName,
    citiesSaved,
    user,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
