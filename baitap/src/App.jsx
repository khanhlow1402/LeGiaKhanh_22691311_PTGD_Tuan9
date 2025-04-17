// src/App.js
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Home from "./components/Home";
import Login from "./components/Login";
import TodoApp from "./components/TodoList"; // Import TodoApp
import Counter from "./components/Counter";
import Cart from "./components/Cart"; // Import Cart
import Navbar from "./components/Navbar";
import { toggleTheme } from "./redux/themeSlice";
import "./App.css";

export default function App() {
  const [active, setActive] = useState("login"); // Mặc định là login
  const theme = useSelector((state) => state.theme); // Lấy theme từ Redux store
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); // Kiểm tra trạng thái đăng nhập
  const dispatch = useDispatch();

  // Sau khi đăng nhập thành công, chuyển sang Home
  const handleLoginSuccess = () => {
    setActive("home"); // Chuyển sang màn hình Home
  };

  useEffect(() => {
    if (!isLoggedIn) {
      setActive("login"); // Nếu chưa đăng nhập, hiển thị màn hình login
    } else {
      setActive("home"); // Nếu đã đăng nhập, hiển thị màn hình Home
    }
  }, [isLoggedIn]);

  return (
    <div
      className={
        theme === "dark"
          ? "bg-gray-900 text-white min-h-screen"
          : "bg-gray-100 text-black min-h-screen"
      }
    >
      <div className="max-w-2xl mx-auto py-10 px-4">
        {isLoggedIn && <Navbar active={active} onChange={setActive} />}

        {isLoggedIn && (
          <div className="mb-4 text-center">
            <button
              onClick={() => dispatch(toggleTheme())}
              className="px-4 py-2 rounded bg-purple-500 text-white hover:bg-purple-600"
            >
              Chuyển Theme
            </button>
          </div>
        )}

        {/* Render các component dựa trên active */}
        {!isLoggedIn && <Login onLoginSuccess={handleLoginSuccess} />}

        {isLoggedIn && (
          <>
            {active === "home" && <Home />}
            {active === "counter" && <Counter />}
            {active === "todo" && <TodoApp />}
            {active === "cart" && <Cart />}
          </>
        )}
      </div>
    </div>
  );
}
