"use client";
import userImg from "@/components/gojo.jpg";
import { useAtomValue } from "jotai";
import Image from "next/image";
import Link from "next/link";
import { cartItemQuantityAtom } from "@/atom/atoms";
const Navbar = () => {
  const totalQuantity = useAtomValue(cartItemQuantityAtom);

  return (
    <div className="navbar bg-white border-2 shadow-lg px-10">
      <div className="flex-1">
        <Link href={"/"} className="text-3xl font-bold text-gray-600">
          Jotai Store
        </Link>
      </div>
      <div className="flex-none space-x-5">
        <Link href={"/cart"}>
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-md indicator-item">
                {totalQuantity}
              </span>
            </div>
          </div>
        </Link>
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <Image src={userImg} alt="User Images" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
