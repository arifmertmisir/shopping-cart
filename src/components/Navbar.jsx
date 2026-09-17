import { NavLink } from "react-router";

function Navbar() {
  return (
    <nav className="flex gap-4 text-lg font-medium justify-end">
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-blue-800 underline" : "text-gray-800"
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-blue-800 underline" : "text-gray-800"
        }
        to="/shop"
      >
        Shop
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-blue-800 underline" : "text-gray-800"
        }
        to="/cart"
      >
        Cart
      </NavLink>
    </nav>
  );
}

export default Navbar;
