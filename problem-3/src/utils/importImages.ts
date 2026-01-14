
export const importAllCategoryImages = async () => {
  const modules = import.meta.glob("../assets/products/**/*.{png,jpg,jpeg,svg,avif}", { eager: true, as: "url" });
  const imagesByCategory: { [category: string]: { [fileName: string]: string } } = {};

  Object.keys(modules).forEach((path) => {
    const parts = path.split("/").slice(-2); 
    const category = parts[0];
    const fileName = parts[1];

    if (!imagesByCategory[category]) imagesByCategory[category] = {};
    imagesByCategory[category][fileName] = modules[path] as string;
  });

  return imagesByCategory;
};
