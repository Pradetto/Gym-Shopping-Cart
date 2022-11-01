const allProductsUrl = "http://localhost:8000/api/all-products/";
const allCategoriesUrl = "http://localhost:8000/api/all-categories/";

export const fetchData = () => {
  const getProducts = async () => {
    const response = await fetch(allProductsUrl);
    const data = await response.json(allCategoriesUrl);
    return data;
  };
};

const getCategories = async () => {
  const response = await fetch("");
  const data = await response.json();
  return data;
};
