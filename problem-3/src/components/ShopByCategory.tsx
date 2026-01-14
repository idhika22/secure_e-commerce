import React from "react";
import { Link } from "react-router-dom";
import { useProducts } from "../context/ProductsContext";

const ShopByCategory: React.FC = () => {
  const productsWithImagesByCategory = useProducts();
  return (
    <div className="p-6" >
      <h2 className="text-3xl font-bold text-center mb-6 sm:text-4xl">Shop by Category</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center bg-white md:ml-20 md:mr-20 p-10">
        {Object.keys(productsWithImagesByCategory).map((category) => {
          let firstProduct = productsWithImagesByCategory[category][0];
          return (
            <Link
              key={category}
              to={`/products/category/${category.toLowerCase().replace(/\s+/g, "-")}`}
              className="flex flex-col items-center group"
            >
              <div
                className="w-48 h-48 rounded-full flex items-center justify-center shadow-md overflow-hidden transition transform group-hover:scale-105 bg-[#e8e8e8]"
              >
                <img
                  src={firstProduct.image}
                  alt={firstProduct.name}
                  className="w-26 h-26 object-contain"
                  width="320"
                  height="160"
                  loading="lazy"
                />
              </div>
              <span className="mt-3 text-xl font-bold pt-2">{category}</span>
            </Link>
          );
        })}

      </div>
    </div>
  );
};

export default ShopByCategory;
