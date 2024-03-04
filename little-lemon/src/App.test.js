import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

test("Renders the Form when clicked the Navbar", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const navbarElement = screen.getByTestId("test-id");
  expect(navbarElement).toBeInTheDocument();

  // click the btn
  fireEvent.click(navbarElement);

  const chooseDateElement = screen.getByText("Choose date :");
  expect(chooseDateElement).toBeInTheDocument();
});
