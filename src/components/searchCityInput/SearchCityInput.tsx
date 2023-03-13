import { useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../app/store";
import {
  filterCitiesByName,
  selectCitiesFiltered,
} from "../../features/searchCityByName";

export default function SearchCityInput() {
  const [inputValue, setInputValue] = useState<string>("");

  const dispatch = useAppDispatch();

  const selectCitiesNames = useSelector(selectCitiesFiltered);

  const searchCity = (input: string) => {
    setInputValue(input);
    if (!input) return;
    dispatch(filterCitiesByName(input));
  };
  return (
    <div className="search-city-input-container">
      <form className="search-city-input-form">
        <label className="search-city-input-label" htmlFor="search-city-input">
          Selecciona un país
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
