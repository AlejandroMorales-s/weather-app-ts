import Logo from "../../ui/logo/Logo";
import SearchCityInput from "../../ui/searchCityInput/SearchCityInput";

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
