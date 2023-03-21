import Navbar from "../../ui/navbar/Navbar";
import SearchCityInput from "../../ui/searchCityInput/SearchCityInput";
import weatherIconsUrl from "./../../../weatherIconsUrl.json";

export default function MainPage() {
  return (
    <div className="container" role="feed">
      <Navbar />
      <SearchCityInput />
    </div>
  );
}
