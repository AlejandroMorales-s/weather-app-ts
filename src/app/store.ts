import { configureStore } from "@reduxjs/toolkit";

//* Reducers
import weatherDataReducer from "../features/weatherDataSlice";

export default configureStore({
  reducer: {
    weatherData: weatherDataReducer,
  },
});
