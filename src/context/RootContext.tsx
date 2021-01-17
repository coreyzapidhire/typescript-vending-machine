import React, { useEffect, useState } from "react";
import { getProducts, getProductById, updateProduct } from "../api/api";
import { IItem } from "../types";

export interface IJobContextValues {
  credit: number;
  buyErrors: any;
  setBuyErrors?: (errors: any) => void;
  setCredit: (value: number) => void;
  purchaseItem: (id: number) => any;
  setProducts: (products: any) => void;
  products?: IItem[];
}

export const RootContext = React.createContext<IJobContextValues>({
  credit: 0,
  buyErrors: undefined,
  setProducts: () => {},
  products: [],
  purchaseItem: () => {},
  setCredit: () => {}
});

export const RootContextProvider = ({ children }: { children: any }) => {
  const [credit, setCredit] = useState(0);
  const [products, setProducts] = useState([]);
  const [buyErrors, setBuyErrors] = useState(null);

  const fetchProducts = async () => {
    const products = await getProducts();
    setProducts(products);
  };

  //handlers
  const purchaseItem = async (id: number) => {
    const productToUpdate: IItem = await getProductById(id);
    await updateProduct(id, {
      stock: productToUpdate.stock - 1,
    });
    setCredit(credit - productToUpdate.priceInCents);
    return fetchProducts();
  };

  useEffect(() => {
    fetchProducts();
    setCredit(0);
  }, []);

  const defaultValue = {
    fetchProducts: getProducts,
    purchaseItem,
    setCredit,
    setBuyErrors,
    setProducts,
    credit,
    buyErrors,
    products,
  };

  return (
    <RootContext.Provider value={defaultValue}>{children}</RootContext.Provider>
  );
};
