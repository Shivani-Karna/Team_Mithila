import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart, removeItem } from "../utils/cartSlice";
import Navbar from "./Navbar/Navbar";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId));
  };

  return (
    <>
      <Navbar />
      <div className="text-center mt-8">
        <h1 className="text-3xl font-semibold mb-4">Cart Items:</h1>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block mb-4"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>

        {cartItems.length === 0 ? (
          <h1 className="text-xl mt-4">
            Cart is empty. Please add some items.
          </h1>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={item.imageSrc}
                  alt={item.name}
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{item.name}</h3>

                  <p className="text-gray-900 font-bold mb-2">
                    Artist: {item.artist}
                  </p>
                  <p className="text-gray-900 font-semibold mb-2">
                    Price: {item.price}
                  </p>
                  <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded inline-block"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
