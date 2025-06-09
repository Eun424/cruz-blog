import React from "react";
import { NavLink } from "react-router";

function Navbar() {
  return (
    <nav className="bg-indigo-700 text-white p-4 flex items-center justify-between max-w-6xl mx-auto">
      <div className="flex items-center space-x-4">
        <NavLink to="/" className="text-2xl font-bold">
          Travel Blog
        </NavLink>

        <div className="space-x-6 hidden md:flex text-lg ">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "underline" : "hover:underline"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive ? "underline" : "hover:underline"
            }
          >
            Blog
          </NavLink>
          <NavLink
            to="/add"
            className={({ isActive }) =>
              isActive ? "underline" : "hover:underline"
            }
          >
            Add
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
