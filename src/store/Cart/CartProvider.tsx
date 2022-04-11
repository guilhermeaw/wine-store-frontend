import { useCallback, useEffect, useMemo, useState } from "react";
import { Product } from "../../models/Product";
import { CartContext } from "./CartContext";

type CartProviderProps = {
  children: JSX.Element
}

const STORAGE_KEY = '@WineStore:cart';

export const CartProvider = ({ children }: CartProviderProps) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      const data = localStorage.getItem(STORAGE_KEY);
      const products: Product[] = data && JSON.parse(data);

      setProducts(products || []);
    }

    loadProducts();
  }, []);

  const addToCart = useCallback(
    async (product: Product) => {
      const productExists = products.find(
        productObj => productObj.id === product.id,
      );

      const quantity = productExists ? productExists.quantity + 1 : 1;

      const newProductValue = { ...product, quantity };

      if (productExists) {
        setProducts(prevState => {
          const newState = prevState.map(productObj =>
            productObj.id === product.id ? newProductValue : productObj,
          );
          
          localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
          return newState;
        });

        return;
      } 

      setProducts(prevState => {
        const newState = [...prevState, newProductValue];

        localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
        return newState;
      });
    },
    [products],
  );

  const increment = useCallback(
    async (id: number) => {
      setProducts(prevState => {
        const newState = prevState.map(product =>
          product.id === id
            ? { ...product, quantity: product.quantity + 1 }
            : product,
        )

        localStorage.setItem(STORAGE_KEY, JSON.stringify(newState));
        return newState;
      });

    },
    [products],
  );

  const decrement = useCallback(
    (id: number) => {
      setProducts(prevState => {
        const newState = prevState
          .map(product =>
            product.id === id
              ? { ...product, quantity: product.quantity - 1 }
              : product,
          )
          .filter(product => product.quantity > 0)

          localStorage.setItem(STORAGE_KEY, JSON.stringify(newState));
          return newState;
      });
    },
    [products],
  );

  const value = useMemo(
    () => ({ addToCart, increment, decrement, products }),
    [products, addToCart, increment, decrement],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
