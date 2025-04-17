// components/NavbarHome.jsx
import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../redux/authSlice"; // Thao tác logout từ authSlice

export default function NavbarHome() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout()); // Gọi action logout khi người dùng nhấn nút đăng xuất
  };

  return (
    <nav className="flex justify-between items-center mb-6 p-4 bg-blue-600 text-white rounded-md">
      <div className="font-semibold">Chào mừng bạn đến với trang chủ!</div>
      <button
        onClick={handleLogout}
        className="px-4 py-2 bg-red-500 rounded-md hover:bg-red-600"
      >
        Đăng xuất
      </button>
    </nav>
  );
}
