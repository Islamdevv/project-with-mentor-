import React, { useEffect } from "react";
import { useProduct } from "../../context/ProductContext";

import ProductCard from "./ProductCard";
import { Box } from "@mui/material";

const ProductList = () => {
  const { readProduct, product } = useProduct();
  useEffect(() => {
    readProduct();
  }, []);

  return (
    <Box
      sx={{
        p: "30px 0",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "20px",
      }}
    >
      {product ? (
        product.map((i) => <ProductCard i={i} />)
      ) : (
        <h1>Loading...</h1>
      )}
    </Box>
  );
};

export default ProductList;
