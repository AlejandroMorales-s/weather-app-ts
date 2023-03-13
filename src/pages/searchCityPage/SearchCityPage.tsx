import Logo from "../../components/logo/Logo";
import SearchCityInput from "../../components/searchCityInput/SearchCityInput";

export default function SearchCityPage() {
  return (
    <div className="search-city-page-container container">
      <nav className="search-city-page-nav">
        <Logo />
      </nav>
      <div className="search-city-page-input-container">
        <SearchCityInput />
      </div>
    </div>
  );
}
