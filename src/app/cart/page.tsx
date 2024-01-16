/* eslint-disable @next/next/no-img-element */
"use client";
import { useCart } from "@/hooks/useCart";

const Cart = () => {
  const { cartItems } = useCart();
  return (
    <div className="w-full flex justify-center bg-white">
      <div className="w-4/5 bg-gray-50 grid grid-cols-3">
        <div className="col-span-2 flex flex-col justify-start items-start">
          {cartItems.length > 0 &&
            cartItems.map((item) => (
              <div
                key={item.product.id}
                className="w-80 shadow border-[1px] border-gray-200 rounded-md p-4 hover:shadow-lg transition duration-300 ease-in-out"
              >
                <img
                  className="w-full h-60"
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
                </div>
              </div>
            ))}
        </div>
        <div className="shadow border border-gray-100 flex flex-col">
          <h1>Final amount</h1>
          <button className="btn btn-primary text-white">Order now</button>
        </div>
      </div>
    </div>
  );
};
export default Cart;
