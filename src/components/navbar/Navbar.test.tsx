import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../app/store";
import Navbar from "./Navbar";

describe("Navbar", () => {
  test("should render", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </Provider>
    );

    screen.getByRole("navigation");
  });
  test("should render the menu icon", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </Provider>
    );

    screen.getByRole("menu");
  });
  test("should render the user photo/icon", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </Provider>
    );

    screen.getByAltText("user");
  });
  test("should render a menu when user click in the menu icon", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </Provider>
    );

    const menuIcon = screen.getByRole("menu");

    fireEvent.click(menuIcon);

    screen.getByText("Ciudades guardadas");
  });
});
