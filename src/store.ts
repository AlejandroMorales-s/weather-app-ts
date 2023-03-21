import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

//* Reducers
import weatherData from "./containers/weatherDataSlice";
import searchCityByName from "./containers/searchCityByName";
import citiesSaved from "./containers/citiesSaved";
import user from "./containers/userAuth";

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
