import { createContext } from "react";
import { Product } from "../../models/Product";

export type CartContextProps = {
  products: Product[];
  addToCart(item: Omit<Product, 'quantity'>): void;
  increment(id: number): void;
  decrement(id: number): void;
}

export const CartContext = createContext<CartContextProps | null>(null);
