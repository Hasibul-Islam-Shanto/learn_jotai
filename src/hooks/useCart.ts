import { cartAtom, orderSummaryAtom } from "@/atom/atoms";
import { useAtom, useAtomValue } from "jotai";
import { Product } from "./useGetAllProducts";
export const useCart = () => {
  const [cartItems, setCartItems] = useAtom(cartAtom);
  const { totalPrice, shipping, subTotal, tax } =
    useAtomValue(orderSummaryAtom);
  // add new cart item or update existing cart item....
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

  // delete cart item from the cart....
  function deleteCartItem(productId: number) {
    const updatedCartItems = cartItems.filter(
      (cartItem) => cartItem.product.id !== productId
    );
    setCartItems(updatedCartItems);
  }

  // update quantitiy for each item...
  function updateCartItemQuantity(productId: number, quantity: number) {
    const updatedCartItems = cartItems.map((cartItem) => {
      if (cartItem.product.id === productId) {
        return { ...cartItem, quantity };
      }
      return cartItem;
    });
    setCartItems(updatedCartItems);
  }

  // clear cart items....
  function clearCartItems() {
    setCartItems([]);
  }
  return {
    addToCart,
    cartItems,
    deleteCartItem,
    updateCartItemQuantity,
    totalPrice,
    shipping,
    subTotal,
    tax,
    clearCartItems,
  };
};
