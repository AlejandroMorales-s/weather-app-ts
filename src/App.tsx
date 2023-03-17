import "./App.scss";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import SearchCityPage from "./pages/searchCityPage/SearchCityPage";
import MainPage from "./pages/mainPage/MainPage";
import { useAppDispatch } from "./app/store";
import { authChangeHandler } from "./features/userAuth";
import { auth } from "./libs/firebase";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(authChangeHandler(auth));
  }, []);
  return (
    <Routes>
      <Route path="/" element={<SearchCityPage />} />
      <Route path="/weather/:cityName" element={<MainPage />} />
    </Routes>
  );
}

export default App;
