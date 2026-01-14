import { productsByCategory } from "../data/productsByCategory";
import { importAllCategoryImages } from "../utils/importImages";
import type { Product } from "../data/productsByCategory"

const categoryImages = await importAllCategoryImages();
export const productsWithImagesByCategory: { [category: string]: Product[]} = {};

Object.keys(productsByCategory).forEach((category) => {
  productsWithImagesByCategory[category] = productsByCategory[category].map((p) => ({
    ...p,
    image: categoryImages[category][p.image],
  }));
});