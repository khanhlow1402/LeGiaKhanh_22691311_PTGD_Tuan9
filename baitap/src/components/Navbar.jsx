// components/Navbar.jsx
import React from "react";

export default function Navbar({ active, onChange }) {
  return (
    <nav className="flex flex-wrap gap-4 mb-6 justify-center items-center">
      {/* Button for Counter */}
      <button
        onClick={() => {
          console.log("Changing to counter"); // Thêm dòng này
          onChange("counter");
        }}
        className={`px-4 py-2 rounded-md font-semibold transition ${
          active === "counter"
            ? "bg-blue-600 text-white"
            : "bg-gray-200 hover:bg-gray-300"
        }`}
      >
        Counter
      </button>
      {/* Button for Todo List */}
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
      {/* Button for Cart */}
      <button
        onClick={() => onChange("cart")}
        className={`px-4 py-2 rounded-md font-semibold transition ${
          active === "cart"
            ? "bg-pink-600 text-white"
            : "bg-gray-200 hover:bg-gray-300"
        }`}
      >
        Cart
      </button>
    </nav>
  );
}
