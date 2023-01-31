import React, { useState } from "react";

//Redux
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/cart-slice";

// Components
import Mapping from "./Mapping";
import ProductNamePrice from "./ProductNamePrice";
import ProductSizes from "./ProductSizes";
import ProductFormButtons from "./ProductFormButtons";

// CSS
import { Box } from "@chakra-ui/react";
import ProductColors from "./ProductColors";

function ProductDetailsForm(props) {
  const dispatch = useDispatch();
  const [color, setColor] = useState(null);
  const [size, setSize] = useState(null);

  const addToCartHandler = () => {
    if (!color || !size) {
      // THROW AN ERROR
      return;
    }
    dispatch(cartActions.addToCart({ item: { ...props.item, color, size } }));
  };

  const sizeHandler = (size) => {
    setSize(size);
  };
  const colorHandler = (color) => {
    setColor(color);
  };
  return (
    <Box
      maxW={"75%"}
      minW={"75%"}
      m={5}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
    >
      <Mapping />
      <ProductNamePrice item={props.item} />
      <ProductColors
        item={props.item}
        colorHandler={colorHandler}
        color={color}
      />
      <ProductSizes item={props.item} sizeHandler={sizeHandler} size={size} />
      <ProductFormButtons
        item={props.item}
        addToCartHandler={addToCartHandler}
      />
    </Box>
  );
}

export default ProductDetailsForm;
