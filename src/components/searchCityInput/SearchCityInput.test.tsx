import SearchCityInput from "./SearchCityInput";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../app/store";
import { BrowserRouter } from "react-router-dom";

describe("Search city input", () => {
  test("should render", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <SearchCityInput />
        </BrowserRouter>
      </Provider>
    );
  });

  test("should render input", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <SearchCityInput />
        </BrowserRouter>
      </Provider>
    );

    screen.getByRole("textbox");
  });

  test("should the dropdown be hidden at the start", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <SearchCityInput />
        </BrowserRouter>
      </Provider>
    );

    expect(screen.queryByRole("tablist")).toBeNull();
  });

  test("should show the words that the user is typing in the input", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <SearchCityInput />
        </BrowserRouter>
      </Provider>
    );

    const input = screen.getByRole("textbox") as HTMLInputElement;

    expect(input.value).toBe("");

    fireEvent.change(input, { target: { value: "hi" } });

    expect(input.value).toBe("hi");
  });

  test("should show the dropdown when the user is typing in the input", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <SearchCityInput />
        </BrowserRouter>
      </Provider>
    );

    const input = screen.getByRole("textbox");

    expect(screen.queryByRole("tablist")).toBeNull();

    fireEvent.change(input, { target: { value: "London" } });

    screen.findByRole("tablist");
  });

  test("should hide the dropdown when the user delete his input", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <SearchCityInput />
        </BrowserRouter>
      </Provider>
    );

    const input = screen.getByRole("textbox");

    expect(screen.queryByRole("tablist")).toBeNull();

    fireEvent.change(input, { target: { value: "London" } });

    screen.findByRole("tablist");

    fireEvent.change(input, { target: { value: "" } });

    expect(screen.queryByRole("tablist")).toBeNull();
  });
});
