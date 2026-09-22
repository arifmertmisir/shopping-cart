import { vi, describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider, Outlet } from "react-router";
import userEvent from "@testing-library/user-event";

import Shop from "/src/pages/Shop.jsx";
import { useState } from "react";

function TestLayout() {
  const [input, setInput] = useState({});
  return <Outlet context={{ input, setInput }} />;
}

function renderShop() {
  const router = createMemoryRouter([
    {
      path: "/",
      element: <TestLayout />,
      children: [{ index: true, element: <Shop /> }],
    },
  ]);
  return render(<RouterProvider router={router} />);
}

const mockProducts = [
  {
    id: 1,
    title: "Test Backpack",
    price: 100,
    image: "test.jpg",
    description: "desc",
  },
  {
    id: 2,
    title: "Test Ring",
    price: 500,
    image: "test2.jpg",
    description: "desc2",
  },
  {
    id: 3,
    title: "Test Monitor",
    price: 900,
    image: "test3.jpg",
    description: "desc3",
  },
];

beforeEach(() => {
  global.fetch = vi.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockProducts),
    }),
  );
});

describe("Shop", () => {
  it("renders headline in Shop page", () => {
    renderShop();
    expect(
      screen.getByRole("heading", { name: /discover our products/i }),
    ).toBeInTheDocument();
  });

  it("fetches data from API and displays products successfully", async () => {
    renderShop();

    await screen.findByText("Test Backpack");

    expect(screen.getByText("Test Ring")).toBeInTheDocument();
    expect(screen.getByText("Test Monitor")).toBeInTheDocument();
  });

  it("renders quantity of a product on input", async () => {
    const user = userEvent.setup();
    renderShop();

    await screen.findByText("Test Backpack");

    const input = screen.getAllByPlaceholderText(/how many items/i)[0];
    await user.type(input, "5");
    expect(input).toHaveValue(5);
  });

  it("renders quantity of a product on paragraph", async () => {
    const user = userEvent.setup();
    renderShop();

    await screen.findByText("Test Backpack");

    const input = screen.getAllByPlaceholderText(/how many items/i)[0];
    await user.type(input, "5");

    const para = screen.getAllByTestId("item-amount-display")[0];

    expect(para).toHaveTextContent("5");
  });

  it("increases quantity from 0 when clicking increment button", async () => {
    const user = userEvent.setup();
    renderShop();

    await screen.findByText("Test Backpack");

    const input = screen.getAllByPlaceholderText(/how many items/i)[0];

    const increaseButton = screen.getAllByTestId("increment")[0];
    await user.click(increaseButton);

    const para = screen.getAllByTestId("item-amount-display")[0];

    expect(para).toHaveTextContent("1");
    expect(input).toHaveValue(1);
  });

  it("increases quantity on existing input value when clicking increment button", async () => {
    const user = userEvent.setup();
    renderShop();

    await screen.findByText("Test Backpack");

    const input = screen.getAllByPlaceholderText(/how many items/i)[0];
    await user.type(input, "5");

    const increaseButton = screen.getAllByTestId("increment")[0];
    await user.click(increaseButton);

    const para = screen.getAllByTestId("item-amount-display")[0];

    expect(input).toHaveValue(6);
    expect(para).toHaveTextContent("6");
  });

  it("do not decrement quantity from 0 when clicking decrement button", async () => {
    const user = userEvent.setup();
    renderShop();

    await screen.findByText("Test Backpack");

    const input = screen.getAllByPlaceholderText(/how many items/i)[0];

    const decreaseButton = screen.getAllByTestId("decrement")[0];
    await user.click(decreaseButton);

    const para = screen.getAllByTestId("item-amount-display")[0];

    expect(input).toHaveValue(0);
    expect(para).toHaveTextContent("0");
  });

  it("decreases quantity on existing input value when clicking decrement button", async () => {
    const user = userEvent.setup();
    renderShop();

    await screen.findByText("Test Backpack");

    const input = screen.getAllByPlaceholderText(/how many items/i)[0];
    await user.type(input, "5");

    const decreaseButton = screen.getAllByTestId("decrement")[0];
    await user.click(decreaseButton);

    const para = screen.getAllByTestId("item-amount-display")[0];

    expect(input).toHaveValue(4);
    expect(para).toHaveTextContent("4");
  });
});
