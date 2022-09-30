export const fetchData = () => {
  const getProducts = async () => {
    const response = await fetch("http://localhost:8000/api/all-products/");
    const data = await response.json();
    return data;
  };
};

const getCategories = async () => {
  const response = await fetch("http://localhost:8000/api/all-categories/");
  const data = await response.json();
  return data;
};
// };

// const data = {
//   id: 1,
//   subcategory: "T-Shirt",
//   productDetails: {
//     productId: 0.08898430390967837,
//     productName: "Nike Shirt",
//     newAdd: false,
//     price: 49.99,
//     colors: [],
//     dateCreated: "2022-09-29 19:38:50.459714",
//     imageOne:
//       "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1f253ab5-be32-4fa1-88c7-4f9616d069dc/dri-fit-adv-aps-mens-short-sleeve-fitness-top-sgbjbd.png",
//     imageTwo:
//       "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1f253ab5-be32-4fa1-88c7-4f9616d069dc/dri-fit-adv-aps-mens-short-sleeve-fitness-top-sgbjbd.png",
//     imageThree:
//       "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1f253ab5-be32-4fa1-88c7-4f9616d069dc/dri-fit-adv-aps-mens-short-sleeve-fitness-top-sgbjbd.png",
//   },
//   category: "Apparel",
// };

// console.log(data.id);
// console.log(data.category);
