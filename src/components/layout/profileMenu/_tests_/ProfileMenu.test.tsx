import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "../../../../store";
import ProfileMenu from "../ProfileMenu";

describe("Profile menu", () => {
  test("should render", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <ProfileMenu />
        </Provider>
      </BrowserRouter>
    );
    screen.getByText(/hola/i);
  });
  test("should render login form", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <ProfileMenu />
        </Provider>
      </BrowserRouter>
    );

    expect(screen.getByRole("form")).toBeNull();

    const loginButton = screen.getByText(/inicia sesión/i);

    fireEvent.click(loginButton);

    screen.getByRole("form");
  });
  test("should render sign up form", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <ProfileMenu />
        </Provider>
      </BrowserRouter>
    );

    expect(screen.getByRole("form")).toBeNull();

    const loginButton = screen.getByText(/crear cuenta/i);

    fireEvent.click(loginButton);

    screen.getByRole("form");
  });
  test("should render providers buttons", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <ProfileMenu />
        </Provider>
      </BrowserRouter>
    );

    screen.getByText(/google/i);
  });
});
