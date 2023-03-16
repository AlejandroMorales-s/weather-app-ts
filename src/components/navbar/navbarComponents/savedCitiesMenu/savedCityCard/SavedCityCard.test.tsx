import { render, screen } from "@testing-library/react";
import SavedCityCard from "./SavedCityCard";

describe("Saved city card", () => {
  test("should render", () => {
    render(<SavedCityCard air_quality={13} name={"Tlahuac"} temp={27} />);

    screen.getByRole("tab");
  });
  test("should show all the information correctly", () => {
    render(<SavedCityCard air_quality={13} name={"Tlahuac"} temp={27} />);

    screen.getByText(/tlahuac/i);
    screen.getByText(/13/i);
    screen.getByText(/27/i);
  });
});
