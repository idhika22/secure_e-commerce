
import type { Product } from "../data/productsByCategory";

export const findBestsellers = (productsByCategory: { [category: string]: Product[] }): Product[] => {
  let bestSellers: Product[] = [];

  Object.keys(productsByCategory).forEach((category) => {
    const categoryBest = productsByCategory[category].filter((p) => p.bestSeller);
    bestSellers = [...bestSellers, ...categoryBest];
  });

  return bestSellers;
};
