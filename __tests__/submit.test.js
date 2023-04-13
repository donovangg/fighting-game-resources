import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from "../components/Form";

describe("Submit page", () => {
  it("has a form for submission", () => {
    render(<Form />);

    const form = screen.getByTestId("form-test");
    expect(form).toBeInTheDocument();
  });
});
