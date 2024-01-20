import { atom } from "jotai";
import type { Product } from "@/hooks/useGetAllProducts";
export interface CartItemType {
  product: Product;
  quantity: number;
}
export const cartAtom = atom<CartItemType[]>([]);
export const cartItemQuantityAtom = atom((get) => {
  const cartItems = get(cartAtom);
  const totalQuantity = cartItems.reduce((total, item) => {
    return total + item.quantity;
  }, 0);
  return totalQuantity;
});

export const orderSummaryAtom = atom((get) => {
  const cartItems = get(cartAtom);
  const subTotal = cartItems.reduce(
    (total, item) => total + item.quantity * item.product.price,
    0
  );
  const tax = subTotal * 0.1;
  const shipping = subTotal * 0.5;
  const totalPrice = subTotal + tax + shipping;
  return { subTotal, tax, shipping, totalPrice };
});
