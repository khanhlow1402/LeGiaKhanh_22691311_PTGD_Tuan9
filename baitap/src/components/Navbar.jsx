export default function Navbar({ active, onChange }) {
  return (
    <nav className="flex gap-4 mb-6 justify-center">
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
    </nav>
  );
}
