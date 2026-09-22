import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { createMemoryRouter, RouterProvider, Outlet } from "react-router";
import userEvent from "@testing-library/user-event";

import Cart from "/src/pages/Cart.jsx";
import { useState } from "react";

const products = { "Test Backpack": 2, "Test Ring": 1, "Test Monitor": 5 };

function TestLayout({ initialInput = {} }) {
  const [input, setInput] = useState(initialInput);
  return <Outlet context={{ input, setInput }} />;
}

function renderCart(initialInput = {}) {
  const router = createMemoryRouter([
    {
      path: "/",
      element: <TestLayout initialInput={initialInput} />,
      children: [{ index: true, element: <Cart /> }],
    },
  ]);
  return render(<RouterProvider router={router} />);
}

describe("Cart", () => {
  it("renders headline in Cart page", () => {
    renderCart();
    expect(
      screen.getByRole("heading", { name: /Items in Your Cart:/i }),
    ).toBeInTheDocument();
  });

  it("renders Nothing to display in your Cart at the moment when the cart is empty", () => {
    renderCart();
    const para = screen.getByTestId("nothing-to-display");
    expect(para).toHaveTextContent(
      /Nothing to display in your Cart at the moment/i,
    );
  });

  it("renders selected products with their amounts ", () => {
    renderCart(products);
    const cartItems = screen.getAllByTestId("display-products");

    expect(cartItems[0]).toHaveTextContent("Test Backpack: 2");
    expect(cartItems[1]).toHaveTextContent("Test Ring: 1");
    expect(cartItems[2]).toHaveTextContent("Test Monitor: 5");
  });

  it("increments the amount of selected product", async () => {
    const user = userEvent.setup();
    renderCart(products);

    const cartItems = screen.getAllByTestId("display-products");

    const incrementButtons = screen.getAllByTestId("increment");
    await user.click(incrementButtons[0]);

    expect(cartItems[0]).toHaveTextContent("Test Backpack: 3");
    expect(cartItems[1]).toHaveTextContent("Test Ring: 1");
    expect(cartItems[2]).toHaveTextContent("Test Monitor: 5");
  });

  it("decrements the amount of selected product", async () => {
    const user = userEvent.setup();
    renderCart(products);

    const cartItems = screen.getAllByTestId("display-products");

    const decrementButtons = screen.getAllByTestId("decrement");
    await user.click(decrementButtons[0]);

    expect(cartItems[0]).toHaveTextContent("Test Backpack: 1");
    expect(cartItems[1]).toHaveTextContent("Test Ring: 1");
    expect(cartItems[2]).toHaveTextContent("Test Monitor: 5");
  });

  it("removes product from cart when amount reaches 0 and displays Nothing to display in your Cart at the moment", async () => {
    const user = userEvent.setup();

    const selectedProduct = { "LG Curved Monitor 34HQ12345": 1 };
    renderCart(selectedProduct);

    const decrementButtons = screen.getAllByTestId("decrement");
    await user.click(decrementButtons[0]);

    const para = screen.getByTestId("nothing-to-display");
    expect(para).toHaveTextContent(
      /Nothing to display in your Cart at the moment/i,
    );
    expect(screen.queryByTestId("display-products")).not.toBeInTheDocument();
  });
});
