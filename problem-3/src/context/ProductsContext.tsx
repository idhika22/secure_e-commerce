import { createContext, useContext } from "react";
import type { ReactNode } from "react";
import { productsWithImagesByCategory } from "../utils/productsWithImage";


type ProductsContextType = typeof productsWithImagesByCategory;


const ProductsContext = createContext<ProductsContextType | undefined>(undefined);


export const ProductsProvider = ({ children }: { children: ReactNode }) => (
  <ProductsContext.Provider value={productsWithImagesByCategory}>
    {children}
  </ProductsContext.Provider>
);

export const useProducts = () => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error("useProducts must be used within a ProductsProvider");
  }
  return context;
};
