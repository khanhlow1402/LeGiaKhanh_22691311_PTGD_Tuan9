import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, updateQuantity } from "../redux/cartSlice";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.items); // Lấy giỏ hàng từ state Redux
  const dispatch = useDispatch();

  // State để lưu thông tin sản phẩm mới nhập
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productQuantity, setProductQuantity] = useState(1);

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Hàm để thêm sản phẩm vào giỏ hàng
  const handleAddProduct = () => {
    if (!productName || !productPrice || productQuantity <= 0) {
      alert("Vui lòng nhập đầy đủ thông tin sản phẩm!");
      return;
    }

    const newItem = {
      id: Date.now(), // Sử dụng thời gian để tạo id duy nhất
      name: productName,
      price: Number(productPrice),
      quantity: Number(productQuantity),
    };

    dispatch(addItem(newItem)); // Gọi action để thêm sản phẩm vào giỏ hàng

    // Reset lại các trường nhập liệu
    setProductName("");
    setProductPrice("");
    setProductQuantity(1);
  };

  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Giỏ hàng</h2>

      {/* Form nhập liệu để thêm sản phẩm */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Thêm sản phẩm mới</h3>
        <input
          type="text"
          placeholder="Tên sản phẩm"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          className="w-full p-2 border rounded mb-2"
        />
        <input
          type="number"
          placeholder="Giá sản phẩm"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
          className="w-full p-2 border rounded mb-2"
        />
        <input
          type="number"
          min="1"
          placeholder="Số lượng"
          value={productQuantity}
          onChange={(e) => setProductQuantity(e.target.value)}
          className="w-full p-2 border rounded mb-2"
        />
        <button
          onClick={handleAddProduct}
          className="w-full px-4 py-2 bg-blue-500 text-white rounded"
        >
          Thêm sản phẩm
        </button>
      </div>

      {cartItems.length === 0 ? (
        <p>Chưa có sản phẩm nào.</p>
      ) : (
        <>
          <ul className="mb-4">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="mb-2 flex justify-between items-center"
              >
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-600">
                    ₫{item.price.toLocaleString()}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      dispatch(
                        updateQuantity({
                          id: item.id,
                          quantity: Number(e.target.value),
                        })
                      )
                    }
                    className="w-16 px-2 py-1 border rounded"
                  />
                  <button
                    onClick={() => dispatch(removeItem(item.id))}
                    className="text-red-500 hover:underline"
                  >
                    Xoá
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="font-semibold">
            Tổng số lượng: {totalQuantity} <br />
            Tổng tiền: ₫{totalPrice.toLocaleString()}
          </div>
        </>
      )}
    </div>
  );
}
