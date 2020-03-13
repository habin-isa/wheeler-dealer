import React, { useState } from 'react';
import * as S from './styles';
import emptyLike from '../../assets/empty-like.svg';
import fullLike from '../../assets/full-like.svg';

const ProductItem = ({ product }) => {
  const [itemLiked, setItemLiked] = useState(false);
  const productSold = product.sold;

  return (
    <S.Wrapper>
      <S.ImgContainer>
        {
          itemLiked === false ? (
            <S.Heart src={emptyLike} onClick={() => setItemLiked(!itemLiked)} />
          ) : (
            <S.Heart src={fullLike} onClick={() => setItemLiked(!itemLiked)} />
          )
        }
          <S.ProductImg style={{ opacity: (productSold ? '0.2' : '1') }} src={product.img} alt={product.title} />
      </S.ImgContainer>
      {
            productSold ? (
              <S.SoldCaption>Sold</S.SoldCaption>
            ) : ''
          }
      <S.ProductInfo>
        <div><b>{product.title}</b></div>
        <div>Brand: {product.brand}</div>
        <div>Size: {product.size}</div>
        <div>Price: £{product.price}</div>
      </S.ProductInfo>
    </S.Wrapper>
  )

};

export default ProductItem;