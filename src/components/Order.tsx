'use client';
import { useCart } from "@/hooks/useCart";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Order = () => {
  const router = useRouter();
  const { totalPrice, shipping, subTotal, tax, clearCartItems } = useCart();
  const [loading, setLoading] = useState(false);
  const checkout = () => {
    setLoading(true);
    setTimeout(() => {
      clearCartItems();
      setLoading(false);
      router.push("/");
    }, 2000);
  };
  return (
    <div className="w-full flex flex-col items-center p-3 shadow-md border-[.5px]">
      <h1 className="text-xl font-bold text-gray-600">Order Summary</h1>
      <div className="w-full flex justify-between border-b-2 p-2">
        <h3 className="text-gray-500 font-semibold">Subtotal</h3>
        <p className="text-sm text-gray-600 font-semibold">
          $ {Math.floor(subTotal)}
        </p>
      </div>
      <div className="w-full flex justify-between border-b-2 p-2">
        <h3 className="text-gray-500 font-semibold">Shipping estimation</h3>
        <p className="text-sm text-gray-600 font-semibold">
          $ {Math.floor(shipping)}
        </p>
      </div>
      <div className="w-full flex justify-between border-b-2 p-2">
        <h3 className="text-gray-500 font-semibold">Tax estimation</h3>
        <p className="text-sm text-gray-600 font-semibold">
          $ {Math.floor(tax)}
        </p>
      </div>
      <div className="w-full flex justify-between p-2">
        <h3 className="text-lg font-bold text-gray-600">Total Order</h3>
        <p className="text-lg font-bold text-gray-700">
          $ {Math.floor(totalPrice)}
        </p>
      </div>
      <button
        onClick={checkout}
        disabled={loading}
        className="w-full mt-3 btn btn-primary text-white"
      >
        Checkout
      </button>
    </div>
  );
};

export default Order;
