import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../redux/themeSlice";

export default function Navbar({ active, onChange }) {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  return (
    <nav className="flex flex-wrap gap-4 mb-6 justify-center items-center">
      <button
        onClick={() => onChange("counter")}
        className={`px-4 py-2 rounded-md font-semibold transition ${
          active === "counter"
            ? "bg-blue-600 text-white"
            : "bg-gray-200 hover:bg-gray-300"
        }`}
      >
        Counter
      </button>
      <button
        onClick={() => onChange("todo")}
        className={`px-4 py-2 rounded-md font-semibold transition ${
          active === "todo"
            ? "bg-green-600 text-white"
            : "bg-gray-200 hover:bg-gray-300"
        }`}
      >
        To-do List
      </button>

      <button
        onClick={() => dispatch(toggleTheme())}
        className={`px-4 py-2 rounded-md font-semibold transition ${
          theme === "dark"
            ? "bg-gray-800 text-white"
            : "bg-yellow-300 text-black"
        }`}
      >
        Toggle Theme
      </button>
    </nav>
  );
}
