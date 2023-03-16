import Navbar from "../../components/navbar/Navbar";
import SearchCityInput from "../../components/searchCityInput/SearchCityInput";
import weatherIconsUrl from "./../../weatherIconsUrl.json";

export default function MainPage() {
  return (
    <div className="container" role="feed">
      <Navbar />
      <SearchCityInput />
    </div>
  );
}
