import { cartAtom } from "@/atom/atoms";
import { useAtom } from "jotai";
import { Product } from "./useGetAllProducts";
export const useCart = () => {
  const [cartItems, setCartItems] = useAtom(cartAtom);
  function addToCart(product: Product) {
    const currentCartItems = cartItems.find(
      (cartItem) => cartItem.product.id === product.id
    );
    if (currentCartItems) {
      const updatedCartItems = cartItems.map((cartItem) => {
        if (cartItem.product.id === product.id) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        }
        return cartItem;
      });
      setCartItems(updatedCartItems);
      return;
    }
    setCartItems((prev) => [...prev, { product, quantity: 1 }]);
  }

  return { addToCart, cartItems };
};
