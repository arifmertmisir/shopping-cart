# 🛒 Shopping Cart

A mock e-commerce shopping cart application built with React, featuring client-side routing, dynamic product fetching, and real-time cart management — built as part of [The Odin Project](https://www.theodinproject.com/) curriculum.

**[Live Demo](https://shopping-cart-zeta-fawn.vercel.app/shop)**

## Features

- **Three-page navigation** — Home, Shop, and Cart pages connected via React Router
- **Dynamic product listing** — products are fetched live from the [Fake Store API](https://fakestoreapi.com/)
- **Quantity controls** — increment/decrement buttons and a manual input field on each product card, kept in sync
- **Real-time cart** — the Cart page reflects selected products and quantities instantly, with the ability to adjust or remove items directly from the cart
- **Shared state across routes** — product quantities are managed in a single source of truth, lifted up to the app's layout component and shared with child routes via React Router's `Outlet` context
- **Responsive, styled UI** — built with Tailwind CSS
- **Tested with React Testing Library** — covering rendering, user interactions (typing, clicking), and asynchronous data fetching (mocked)

## Tech Stack

- **React** (Vite)
- **React Router** — client-side routing, nested routes, and `Outlet` context for cross-page state sharing
- **Tailwind CSS** — styling
- **Vitest** + **React Testing Library** — unit and integration testing
- **Fake Store API** — mock product data

## Project Structure

```
src/
  assets/          # images and static assets
  components/      # reusable UI pieces (Navbar, Card)
  pages/           # route-level components (Home, Shop, Cart)
  App.jsx          # layout component — renders Navbar + Outlet
  routes.jsx       # route configuration
  main.jsx         # app entry point
test/              # component tests
```

## How It Works

- **`App.jsx`** acts as the layout for the whole app: it renders the `Navbar` once and an `Outlet` for the active page. The shared `input` state (tracking each product's selected quantity) lives here and is passed down to child routes through the `Outlet`'s `context` prop.
- **`Shop.jsx`** fetches the product list on mount and reads/updates the shared quantity state via `useOutletContext`.
- **`Cart.jsx`** reads the same shared state, filters out products with a quantity of zero, and lets the user adjust quantities directly — changes stay in sync with the Shop page.

## Running Locally

```bash
git clone https://github.com/arifmertmisir/shopping-cart.git
cd shopping-cart
npm install
npm run dev
```

## Running Tests

```bash
npm run test
```

## Deployment

Deployed on [Vercel](https://vercel.com/), configured with a rewrite rule (`vercel.json`) to handle client-side routing correctly on page refresh/direct navigation.

## Acknowledgements

Built as the "Shopping Cart" project from [The Odin Project](https://www.theodinproject.com/lessons/node-path-react-new-shopping-cart)'s React course.
