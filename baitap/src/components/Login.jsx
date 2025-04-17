// src/components/Login.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";

export default function Login({ onLoginSuccess }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Kiểm tra thông tin đăng nhập (có thể gọi API hoặc check điều kiện nào đó)
    if (username === "admin" && password === "password") {
      // Nếu đăng nhập thành công, lưu thông tin người dùng vào Redux store
      dispatch(login({ username }));
      onLoginSuccess(); // Gọi hàm để chuyển sang màn hình home
    } else {
      alert("Đăng nhập thất bại");
    }
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-md">
      <h2 className="text-2xl font-bold mb-4">Đăng nhập</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Tên người dùng</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Mật khẩu</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded"
        >
          Đăng nhập
        </button>
      </form>
    </div>
  );
}
