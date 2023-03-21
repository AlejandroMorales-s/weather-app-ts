import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../../../ui/navbar/Navbar";
import SavedCities from "../SavedCities";

describe("Saved cities", () => {
  test("should render", () => {
    render(<SavedCities setOpenSavedCities={() => {}} />);

    screen.getByText(/ciudades guardadas/i);
  });

  test("should close menu when user click the arrow", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    const menuIcon = screen.getByRole("menu");

    fireEvent.click(menuIcon);

    screen.getByText(/ciudades guardadas/i);

    const backButton = screen.getByRole("button");

    fireEvent.click(backButton);

    setTimeout(() => {
      expect(screen.queryByText(/ciudades guardadas/i)).toBeNull();
    }, 350);
  });
});
