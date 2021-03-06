import React, { useState, useEffect } from "react";
import * as S from './styles';
import TopPanel from '../TopPanel';
import ProductItem from '../ProductItem';

import { getProducts } from "../../services/products";

const PageProductList = () => {
  const [productData, setProductData] = useState([]);
  const [productDataCount, setProductDataCount] = useState();
  const [likeCount, setLikeCount] = useState(0);
  const [hideSoldItems, setHideSoldItems] = useState(false);
  const [likedList, setLikedList] = useState([]);

  const loadProducts = async () => {
    try {
      const response = await getProducts();
      setProductData(response.data);
      setProductDataCount(response.data.length);
    } catch (error) {
      console.log("error fetching products");
    } finally {
      console.log("loadProducts called");
    }
  };

  const handleLikeCount = (val) => {
    setLikeCount(likeCount + val);
  };

  const handleLikeTitle = (title, id) => {
    const trimmedLikeTitle = title.trim();
    if (trimmedLikeTitle.length > 0) {
      setLikedList([...likedList, trimmedLikeTitle]);
    }
  };

  const deleteLike = (likeIndex) => {
    const updatedLikeList = likedList.filter((_, i) => i !== likeIndex);
    setLikedList(updatedLikeList);
  };

  const handleShowClick = (val) => {
    if (val === false) {
      const data = productData.filter((product, i) => product.sold === false);
      setProductData(data);
      setProductDataCount(data.length);
      setHideSoldItems(true);
    } else {
      loadProducts();
      setHideSoldItems(false);
    }
  };

  useEffect(() => {
    if (productData.length === 0) {
      loadProducts();
    }
  }, [productData]);

  const renderedAllProducts = productData.map((product, i) => (
    <ProductItem 
      key={i} 
      product={product} 
      handleLikeCount={handleLikeCount} 
      handleLikeTitle={handleLikeTitle}
    />
  ));


  return (
    <div>
      <TopPanel 
        productCount={productDataCount} 
        likeCount={likeCount} 
        handleShowClick={handleShowClick} 
        hideSoldItems={hideSoldItems} 
        likedList={likedList}
        deleteLike={deleteLike}
      />
      <S.ProductContainer>
        {renderedAllProducts}
      </S.ProductContainer>
    </div>
  );
};

export default PageProductList;