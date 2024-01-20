/* eslint-disable @next/next/no-img-element */
"use client";
import Order from "@/components/Order";
import { useCart } from "@/hooks/useCart";

const Cart = () => {
  const { cartItems } = useCart();
  const { deleteCartItem, updateCartItemQuantity } = useCart();
  return (
    <div className="w-full min-h-screen flex justify-center bg-white">
      <div className="w-full lg:w-4/5 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 p-10">
        <div className="lg:col-span-2 flex flex-col space-y-5 justify-start items-start">
          {cartItems.length > 0 &&
            cartItems.map((item) => (
              <div
                key={item.product.id}
                className="w-96 flex justify-center gap-x-10 shadow border-[1px] border-gray-200 rounded-md p-4 hover:shadow-lg transition duration-300 ease-in-out"
              >
                <img
                  className="h-32 w-44"
                  src={item.product.image}
                  alt={item.product.title}
                />
                <div className="flex flex-col space-y-2 mt-5">
                  <h1 className="text-lg text-gray-600 font-bold">
                    {item.product.title.slice(0, 20)}
                  </h1>
                  <p className="text-sm text-gray-500 font-bold">
                    ${item.product.price}
                  </p>
                  <div className="flex justify-center space-x-5 items-center mt-2">
                    <div>
                      <select
                        className="bg-gray-200 text-black py-1 px-2 rounded-md"
                        value={item.quantity}
                        onChange={(e) =>
                          updateCartItemQuantity(
                            item.product.id,
                            parseInt(e.target.value)
                          )
                        }
                      >
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                        <option value={8}>8</option>
                        <option value={9}>9</option>
                        <option value={10}>10</option>
                      </select>
                    </div>
                    <button
                      onClick={() => deleteCartItem(item.product.id)}
                      className="px-2 py-1 bg-red-300 text-black rounded-md text-sm"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="w-full flex flex-col">
          <Order />
        </div>
      </div>
    </div>
  );
};
export default Cart;
