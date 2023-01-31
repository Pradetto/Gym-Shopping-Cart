const HOST_WEBSITE_URL = "https://fitness-plus-app.herokuapp.com";
const allProductsUrl = `${HOST_WEBSITE_URL}/api/all-products/`;
const allCategoriesUrl = `${HOST_WEBSITE_URL}/api/all-categories/`;

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
