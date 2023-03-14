import SearchCityPage from "./SearchCityPage";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import { BrowserRouter } from "react-router-dom";

describe("Search city page component", () => {
  test("should render", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <SearchCityPage />
        </BrowserRouter>
      </Provider>
    );
  });

  test("should render the logo", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <SearchCityPage />
        </BrowserRouter>
      </Provider>
    );
    screen.getByText(/app/i);
  });

  test("should render the input", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <SearchCityPage />
        </BrowserRouter>
      </Provider>
    );
    screen.getByText(/país/i);
  });
});
