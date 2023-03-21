import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../store";
import {
  filterCitiesByName,
  selectCitiesFiltered,
} from "../../../containers/searchCityByName";

export default function SearchCityInput() {
  //* State
  const [inputValue, setInputValue] = useState<string>("");

  //* Dispatch
  const dispatch = useAppDispatch();

  //* Navigate
  const navigate = useNavigate();

  //* Selectors
  const selectCitiesNames = useSelector(selectCitiesFiltered);

  //* Search city
  const searchCity = (input: string) => {
    setInputValue(input);
    if (!input) return;
    dispatch(filterCitiesByName(input));
  };

  return (
    <div className="search-city-input-container">
      <form className="search-city-input-form">
        <label className="search-city-input-label" htmlFor="search-city-input">
          Selecciona una ciudad
        </label>
        <input
          onChange={(e) => searchCity(e.target.value)}
          role="textbox"
          className="search-city-input"
          placeholder="ej. México"
          type="text"
          name="search-city-input"
        />
      </form>
      {inputValue && selectCitiesNames.length !== 0 && (
        <div role="tablist" className="search-city-input-dropdown">
          {selectCitiesNames.map((city, index) => {
            return (
              <p
                key={index}
                className="search-city-input-dropdown-items"
                role="tab"
                onClick={() => {
                  setInputValue("");
                  navigate(`/weather/${city}`);
                }}
              >
                {city}
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
}
