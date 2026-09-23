import { NavLink } from "react-router";

function Navbar({ itemsCount }) {
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
        {itemsCount > 0 && (
          <span className="p-0.5 mx-0.5 rounded-full bg-red-400 text-white font-bold">
            {itemsCount}
          </span>
        )}
      </NavLink>
    </nav>
  );
}

export default Navbar;
