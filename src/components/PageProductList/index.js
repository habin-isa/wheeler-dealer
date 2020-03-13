import React, { useState, useEffect } from "react";
import * as S from './styles';
import TopPanel from '../TopPanel';
import ProductItem from '../ProductItem';

import { getProducts } from "../../services/products";

const PageProductList = () => {
  const [productData, setProductData] = useState([]);
  const [productDataCount, setProductDataCount] = useState();

  const loadProducts = async () => {
    try {
      const response = await getProducts();
      setProductData(response.data);
      setProductDataCount(response.data.length);
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
    <div>
      <TopPanel count={productDataCount} />
      <S.ProductContainer>
        {renderedProducts}
      </S.ProductContainer>
    </div>
  );
};

export default PageProductList;