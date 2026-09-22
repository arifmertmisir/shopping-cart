import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Home from "/src/pages/Home.jsx";

describe("Home", () => {
  it("renders headline in Home page", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { name: /welcome to our shop!/i }),
    ).toBeInTheDocument();
  });
  it("renders paragraph in Home page", () => {
    render(<Home />);
    expect(
      screen.getByText(
        "Browse our shop for a curated selection of products, add your favorites to the cart, and check out whenever you're ready.",
      ),
    ).toBeInTheDocument();
  });
});
