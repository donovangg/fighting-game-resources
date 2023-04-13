import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Dropdown from "../components/Dropdown";

describe("Dropdown menu", () => {
  it("dropdown nav renders", () => {
    render(<Dropdown />);

    const drop = screen.getByTestId("dropdown-menu-test");
    expect(drop).toBeInTheDocument();
  });
});
