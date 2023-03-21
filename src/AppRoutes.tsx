import { Route, Routes } from "react-router-dom";
import MainPage from "./components/layout/mainPage/MainPage";
import SearchCityPage from "./components/layout/searchCityPage/SearchCityPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SearchCityPage />} />
      <Route path="/weather/:cityName" element={<MainPage />} />
    </Routes>
  );
}
