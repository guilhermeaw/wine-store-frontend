import { Wine } from "../models/Wine";

interface Product extends Wine {
  quantity: number;
}

export const useCart = () => {
  const getCartItems = () => {
    const data = localStorage.getItem('WineStore@cart');
    const products: Product[] = data && JSON.parse(data);

    return products || [];
  };

  const addToCart = (wine: Wine) => {
    const products = getCartItems();

    const productExists = products.find(
      productObj => productObj.id === wine.id,
    );

    const quantity = productExists ? productExists.quantity + 1 : 1;

    const newProductValue = { ...wine, quantity };

    let newProducts;

    if (productExists) {
      newProducts =
        products.map(productObj =>
          productObj.id === wine.id ? newProductValue : productObj,
        );
    } else {
      newProducts = [...products, newProductValue];
    }

    localStorage.setItem('WineStore@cart', JSON.stringify(newProducts));
  }

  const increment = (id: number) => {
    const newProducts = getCartItems()
      .map(product =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product,
      )

    localStorage.setItem('WineStore@cart', JSON.stringify(newProducts));
  }

  const decrement = (id: number) => {
    const newProducts = getCartItems()
      .map(product =>
        product.id === id
          ? { ...product, quantity: product.quantity - 1 }
          : product,
      )
      .filter(product => product.quantity > 0);

    localStorage.setItem('WineStore@cart', JSON.stringify(newProducts));
  }

  return { getCartItems, addToCart, increment, decrement };
}
