import SearchCityPage from "./SearchCityPage";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../app/store";

describe("Search city page component", () => {
  test("should render", () => {
    render(
      <Provider store={store}>
        <SearchCityPage />
      </Provider>
    );
  });

  test("should render the logo", () => {
    render(
      <Provider store={store}>
        <SearchCityPage />
      </Provider>
    );
    screen.getByText(/app/i);
  });

  test("should render the input", () => {
    render(
      <Provider store={store}>
        <SearchCityPage />
      </Provider>
    );
    screen.getByText(/país/i);
  });
});
