import { Box } from "@mui/material";
import axios from "axios";
import React, { createContext, useContext, useState } from "react";

const productContext = createContext();
export const useProduct = () => useContext(productContext);
const ProductContext = ({ children }) => {
  let API_PRODUCTS = "http://localhost:3000/products";

  const [product, setProduct] = useState([]);

  async function addProduct(newProduct) {
    await axios.post(API_PRODUCTS, newProduct);
  }

  async function readProduct() {
    const { data } = await axios(API_PRODUCTS);
    setProduct(data);
  }

  let values = {
    addProduct,
    readProduct,
    product,
  };
  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContext;
