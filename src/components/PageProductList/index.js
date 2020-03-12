import React, { useState, useEffect } from "react";
import * as S from './styles';
import ProductItem from '../ProductItem';

import { getProducts } from "../../services/products";

const PageProductList = () => {
  const [productData, setProductData] = useState([]);

  const loadProducts = async () => {
    try {
      const response = await getProducts();
      setProductData(response.data);
    } catch (error) {
      console.log("error fetching products");
    } finally {
      console.log("ran");
    }
  };

  useEffect(() => {
    if (productData.length === 0) {
      loadProducts();
    }
  }, [productData]);

  const renderedProducts = productData.map((product, i) => (
      <ProductItem key={i} product={product} />
  ));

  return (
    <S.Wrapper>
      {renderedProducts}
    </S.Wrapper>
  );
};

export default PageProductList;