import { TiLocation } from "react-icons/ti";

type PropTypes = {
  name: string;
  temp: number;
  air_quality: number;
};

export default function SavedCityCard({ name, temp, air_quality }: PropTypes) {
  return (
    <div className="saved-city-card" role={"tab"}>
      <div className="saved-city-card-info-container">
        <div className="saved-city-card-name-container">
          <h2 className="saved-city-card-name">{name}</h2>
          <TiLocation className="saved-city-card-icon" />
        </div>
        <p className="saved-city-card-ica">ICA: {air_quality}</p>
      </div>
      <h3 className="saved-city-card-temp">{temp}°C</h3>
    </div>
  );
}
