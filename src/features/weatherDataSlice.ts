import {
  createSlice,
  createAsyncThunk,
  ActionReducerMapBuilder,
} from "@reduxjs/toolkit";
//* Types
import {
  DataFetched,
  InitialState,
  LocationData,
  WeatherDataCurrent,
} from "../types/features/weatherDataSliceTypes";

//* Async Thunks
export const fetchWeatherData = createAsyncThunk(
  "weatherData/fetchWeatherData",
  async (query: string, thunkAPI) => {
    try {
      const apiKey: string = import.meta.env.VITE_API_KEY;

      const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${query}&aqi=yes`
      );

      const data: DataFetched = await response.json();

      const currentWeatherData: WeatherDataCurrent = data.current;
      const locationData: LocationData = data.location;

      //* Air quality data
      const { pm2_5, pm10, so2, no2, o3, co } = currentWeatherData.air_quality;

      const airQuality = { pm2_5, pm10, so2, no2, o3, co };

      //* Weather data
      const {
        feelslike_c,
        humidity,
        is_day,
        last_updated,
        temp_c,
        uv,
        vis_km,
      } = currentWeatherData;

      const weatherInfo = {
        feelslike_c,
        humidity,
        is_day,
        last_updated,
        temp_c,
        uv,
        vis_km,
        condition: {
          text: currentWeatherData.condition.text,
          icon_src: "",
        },
      };

      //* Wind data
      const { wind_degree, wind_dir, wind_kph } = currentWeatherData;

      const windInfo = {
        wind_degree,
        wind_dir,
        wind_kph,
      };

      //* Location data
      const { country, localtime, name, region } = locationData;

      const locationInfo = {
        country,
        localtime,
        name,
        region,
      };

      return {
        locationInfo,
        currentWeatherData: { weatherInfo, airQuality, windInfo },
      };
    } catch (error) {
      throw error;
    }
  }
);

//* Initial state
const initialState: InitialState = {
  data: {},
  isLoading: false,
};

//* Options
const options = {
  name: "weatherData",
  initialState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<InitialState>) => {
    builder.addCase(fetchWeatherData.fulfilled, (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchWeatherData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchWeatherData.rejected, (state) => {
      state.isLoading = false;
    });
  },
};

//* Create slice
const weatherSlice = createSlice(options);

//* Selectors
type StateSelect = {
  weatherData: InitialState;
};
export const selectWeatherData = (state: StateSelect) => state.weatherData.data;
export const selectWeatherDataLoading = (state: StateSelect) =>
  state.weatherData.isLoading;

//* Exporting reducer
export default weatherSlice.reducer;
