import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

//* Reducers
import weatherDataReducer from "../features/weatherDataSlice";
import searchCityByNameReducer from "../features/searchCityByName";

export const store = configureStore({
  reducer: {
    weatherData: weatherDataReducer,
    searchCityByName: searchCityByNameReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
