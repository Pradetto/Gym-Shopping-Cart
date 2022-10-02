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
  // const [currentData, setCurrentData] = useState();
  const [sortFilter, setSortFilter] = useState(null);
  const [isLoading, setLoading] = useState(true);

  // if (products) {
  //   setLoading(false);
  // }

  const filteredData = () => {
    if (params.productId) {
      setSortFilter({
        productId: params.productId,
        categoryId: null,
        allProducts: false,
        subcategoryId: null,
      });
      // return products.filter((item) => item.category === params.categoryId);
      // console.log(params.categoryId, params.subcategoryId, params.productId);
    } else if (params.subcategoryId) {
      setSortFilter({
        subcategoryId: params.subcategoryId,
        productId: params.productId,
        categoryId: null,
        allProducts: false,
      });
    } else if (params.categoryId) {
      setSortFilter({
        subcategoryId: params.subcategoryId,
        productId: params.productId,
        categoryId: params.categoryId,
        allProducts: false,
      });
      // return products.filter((item) => item.category === params.categoryId);
    } else {
      setSortFilter({
        subcategoryId: null,
        productId: null,
        categoryId: null,
        allProducts: true,
      });
      // return products;
    }
  };

  // console.log("products data", products);
  useEffect(() => {
    dispatch(fetchProducts()).then(setLoading(false));
  }, [dispatch]);

  return (
    <Fragment>
      {!isLoading && (
        <ProductContainerCard data={products} filters={sortFilter} />
      )}
    </Fragment>
  );
}

export default ProductContainer;
