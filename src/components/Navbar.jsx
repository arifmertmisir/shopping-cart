import { NavLink } from "react-router";

function Navbar({ itemsCount }) {
  return (
    <nav className="flex gap-4 sm:gap-6 text-base sm:text-lg font-medium justify-end items-center px-4 py-3 shadow-md">
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-indigo-800 underline underline-offset-5"
            : "text-gray-700 hover:text-indigo-600 transition-colors"
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-indigo-800 underline underline-offset-5"
            : "text-gray-700 hover:text-indigo-600 transition-colors"
        }
        to="/shop"
      >
        Shop
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "text-indigo-800 underline underline-offset-5"
            : "text-gray-700 hover:text-indigo-600 transition-colors"
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
