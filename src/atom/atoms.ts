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
