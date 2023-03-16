import "./App.scss";
import { Routes, Route } from "react-router-dom";
import SearchCityPage from "./pages/searchCityPage/SearchCityPage";
import MainPage from "./pages/mainPage/MainPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SearchCityPage />} />
      <Route path="/weather/:cityName" element={<MainPage />} />
    </Routes>
  );
}

export default App;
