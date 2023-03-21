import { useState } from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import { useSelector } from "react-redux";
import { selectCitiesSaved } from "../../../containers/citiesSaved";
import SavedCityCard from "../../ui/savedCityCard/SavedCityCard";

type PropTypes = {
  setOpenSavedCities: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function SavedCities({ setOpenSavedCities }: PropTypes) {
  const [closingMenu, setClosingMenu] = useState(false);

  const citiesSaved = useSelector(selectCitiesSaved);
  return (
    <div className={`saved-cities ${closingMenu && "closeSavedCities"}`}>
      <div className="saved-cities-menu container">
        <MdArrowBackIosNew
          onClick={() => {
            setClosingMenu(true);
            setTimeout(() => {
              setOpenSavedCities(false);
            }, 350);
          }}
          role="button"
          className="saved-cities-return-button"
        />
        <div className="saved-cities-container">
          <h1>Ciudades guardadas</h1>
          <div className="saved-cities-container">
            {citiesSaved.length ? (
              citiesSaved.map((city, index) => {
                const { air_quality, name, temp } = city;
                return (
                  <SavedCityCard
                    key={index}
                    air_quality={air_quality}
                    name={name}
                    temp={temp}
                  />
                );
              })
            ) : (
              <p>Aun no has guardado ninguna ciudad!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
