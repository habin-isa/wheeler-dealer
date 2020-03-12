import React, { useState, useCallback } from "react";
import { getProducts } from "../../services/products";

const PageProductList = () => {
  const [productData, setProductData] = useState([]);

  const loadProducts = useCallback(async () => {
    try {
      const response = await getProducts();
      setProductData(response);
    } catch (error) {
      console.log("error fetching products");
    } finally {
      console.log("ran");
    }
  }, [productData]);

  return (
    <div>
      FERRARI
      <button onClick={loadProducts}>LOAD</button>
    </div>
  );
};

export default PageProductList;