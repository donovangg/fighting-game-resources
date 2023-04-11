import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from "../components/Form";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Form />);

    const form = screen.getByTestId("form-test");
    expect(form).toBeInTheDocument();
  });
});
