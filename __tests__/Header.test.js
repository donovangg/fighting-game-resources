import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../components/Header";

describe("Header component for different pages", () => {
  it("should render prop title and subtitle", () => {
    let title = "melty blood";
    let subheader = "20 dollars for 1st";
    render(<Header title={title} subheader={subheader} />);

    const headerTitle = screen.getByTestId("header-h2");
    const headerSubtitle = screen.getByTestId("header-subheader");
    expect(headerTitle).toHaveTextContent(title);
    expect(headerSubtitle).toHaveTextContent(subheader);
  });
});
