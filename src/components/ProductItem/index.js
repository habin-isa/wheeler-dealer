import React, { useState } from 'react';
import { func, object } from 'prop-types';
import * as S from './styles';
import emptyLike from '../../assets/empty-like.svg';
import fullLike from '../../assets/full-like.svg';

const ProductItem = ({ product, handleLikeCount, handleLikeTitle }) => {
  const [itemLiked, setItemLiked] = useState(false);
  const productSold = product.sold;

  const handleLikeClick = () => {
    setItemLiked(!itemLiked);
    if (itemLiked) {
      handleLikeCount(-1);
      console.log('rah')
    } else {
      handleLikeCount(1);
    }
  };

  return (
    <S.Wrapper>
      <S.ImgContainer>
        {
          itemLiked ? (
            <S.Heart 
              src={fullLike} 
              onClick={() => {
                handleLikeClick();
                handleLikeTitle('', product.id);
              }}
            />
          ) : (
            <S.Heart 
              src={emptyLike} 
              onClick={() => {
                handleLikeClick();
                handleLikeTitle(product.title, product.id);
              }} 
            />
          )
        }
          <S.ProductImg 
            style={{ opacity: (productSold ? '0.2' : '1') }} 
            src={product.img} 
            alt={product.title}
          />
          {
            productSold ? (
              <S.SoldCaption><b>SOLD</b></S.SoldCaption>
            ) : ''
          }
      </S.ImgContainer>
      <S.ProductInfo>
        <div><b>{product.title}</b></div>
        <div>Brand: {product.brand}</div>
        <div>Size: {product.size}</div>
        <div>Price: <b>£{product.price}</b></div>
      </S.ProductInfo>
    </S.Wrapper>
  )
};

ProductItem.propTypes = {
  product: object.isRequired,
  handleLikeCount: func,
  handleLikeClick: func
};

export default ProductItem;