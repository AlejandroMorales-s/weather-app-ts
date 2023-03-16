import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../app/store";
import MainPage from "./MainPage";

describe("Main page", () => {
  test("should render", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <MainPage />
        </BrowserRouter>
      </Provider>
    );
    screen.getByRole("feed");
  });

  test("should render navigation", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <MainPage />
        </BrowserRouter>
      </Provider>
    );
    screen.getByRole("navigation");
  });

  test("should render input to search by name", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <MainPage />
        </BrowserRouter>
      </Provider>
    );
    screen.getByText(/país/i);
  });

  test("should render temp", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <MainPage />
        </BrowserRouter>
      </Provider>
    );
    screen.getByAltText("weather icon");
  });

  test("should render the extra info", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <MainPage />
        </BrowserRouter>
      </Provider>
    );
    screen.getByText(/humedad/i);
  });

  test("should render wind info", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <MainPage />
        </BrowserRouter>
      </Provider>
    );
    screen.getByText(/km\/h/i);
  });

  test("should render 7 days history", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <MainPage />
        </BrowserRouter>
      </Provider>
    );
    screen.getByText(/últimos/i);
  });

  test("should render footer", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <MainPage />
        </BrowserRouter>
      </Provider>
    );
    screen.getByRole("note");
  });
});
