// src/components/Home.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";

export default function Home() {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  return (
    <div className="p-6 bg-white shadow-lg rounded-md">
      <h2 className="text-xl font-bold">Chào mừng, {user.username}!</h2>
      <button
        onClick={() => dispatch(logout())}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
      >
        Đăng Xuất
      </button>
    </div>
  );
}
