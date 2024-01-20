/* eslint-disable @next/next/no-img-element */
"use client";
import Loading from "@/components/Loading";
import { useCart } from "@/hooks/useCart";
import { useGetAllProducts } from "@/hooks/useGetAllProducts";

const Home = () => {
  const { products, loading } = useGetAllProducts();
  const { addToCart, cartItems } = useCart();
  if (loading) return <Loading />;
  return (
    <div className="w-full flex flex-col justify-center items-center bg-white">
      <div className="mt-10 text-2xl font-bold text-gray-600">Products</div>
      <div className="lg:w-4/5 sm:w-full md:w-full grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-10 p-3 mt-5">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-80 shadow border-[1px] border-gray-200 rounded-md p-4 hover:shadow-lg transition duration-300 ease-in-out"
          >
            <img
              className="w-full h-60"
              src={product.image}
              alt={product.title}
            />
            <div className="flex flex-col space-y-2 mt-5">
              <h1 className="text-lg text-gray-600 font-bold">
                {product.title.slice(0, 20)}
              </h1>
              <p className="text-sm text-gray-500 font-bold">
                ${product.price}
              </p>
            </div>
            <div className="w-full flex justify-center space-x-5 mt-5 relative">
              <button className="btn btn-outline">Buy now</button>
              <button
                onClick={() => addToCart(product)}
                className="btn btn-primary text-white"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Home;
