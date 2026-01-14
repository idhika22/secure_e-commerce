import React, { useCallback, Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { useProducts } from "../context/ProductsContext";
import type { Product } from "../data/productsByCategory";
import { useParams } from "react-router-dom";

const ProductCard = React.lazy(() => import("../components/ProductCard"));

const Products = () => {
  const { category } = useParams<{ category?: string }>();
  const productsWithImagesByCategory = useProducts();
  const dispatch = useDispatch();

  const handleAddToCart = useCallback(
    (product: Product) => {
      dispatch(addToCart({ ...product, quantity: 1 }));
    },
    [dispatch]
  );

 
  let products: Product[] = [];
  if (!category) {
  
    products = Object.values(productsWithImagesByCategory).flat();
  } else {
   
    products = productsWithImagesByCategory[category] || [];
  }


  
  useEffect(() => {
  
    performance.mark("products-page-start");

    
    requestAnimationFrame(() => {
      performance.mark("products-page-end");
      performance.measure(
        "Products Page Render",
        "products-page-start",
        "products-page-end"
      );

      const measure = performance.getEntriesByName("Products Page Render")[0];
      console.log(
        "Products page render took:",
        measure.duration.toFixed(2),
        "ms"
      );
    });
  }, [products.length]); 
   

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      <Suspense fallback={<div className="font-bold">Loading products...</div>}>
        {products.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            onAddToCart={() => handleAddToCart(p)}
          />
        ))}
      </Suspense>
    </div>
  );
};

export default Products;
