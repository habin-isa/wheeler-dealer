import React, { useState } from 'react';
import * as S from './styles';

import likeIcon from '../../assets/full-like.svg'

const TopPanel = ({ productCount, likeCount, handleShowClick, hideSoldItems }) => {
  const [showSoldButton, setShowSoldButton] = useState(false);
  
  const handleClick = () => {
    setShowSoldButton(!showSoldButton);
    if (hideSoldItems === false) {
      handleShowClick(false);
    } else {
      handleShowClick(true);
    }
  }

  return (
    <S.Wrapper>
      <div>{productCount} Results</div>
      {
        !showSoldButton ? (
          <button onClick={handleClick}>Hide sold items</button>
        ) : (
          <button onClick={handleClick}>Show all items</button>
        )
      }
      <div><S.Heart src={likeIcon} /> {likeCount}</div>
    </S.Wrapper>
  )
};

export default TopPanel;