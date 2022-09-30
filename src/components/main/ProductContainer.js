import React, { Fragment, useEffect, useState } from "react";

// Components
import ProductContainerCard from "./ProductContainerCard";

// Redux
import { useSelector, useDispatch } from "react-redux";

import {
  fetchProducts,
  getAllCategories,
  getAllProducts,
  getProductsStatus,
  productsActions,
  selectAllCategories,
} from "../../store/products-slice";

// Router
import { useParams } from "react-router-dom";
import { current } from "@reduxjs/toolkit";

function ProductContainer() {
  const dispatch = useDispatch();
  const categories = useSelector(getAllCategories);
  const products = useSelector(getAllProducts);
  const status = useSelector(getProductsStatus);
  const params = useParams();
  const [currentData, setCurrentData] = useState();

  function filteredData() {
    if (params.productId) {
      return products.filter((item) => item.category === params.categoryId);
      // console.log(params.categoryId, params.subcategoryId, params.productId);
    } else if (params.subcategoryId) {
      console.log(params.subcategoryId, params.productId);
    } else if (params.categoryId) {
      return products.filter((item) => item.category === params.categoryId);
    } else {
      return products;
    }
  }

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return <ProductContainerCard data={filteredData} />;
}

export default ProductContainer;
