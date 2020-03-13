import React, { useState } from 'react';
import * as S from './styles';

import likeIcon from '../../assets/full-like.svg'

const TopPanel = ({ productCount, likeCount, handleShowClick, hideSoldItems, likedItemTitle, deleteNotification }) => {
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
      <S.Results>{productCount} Results</S.Results>
      {
        !showSoldButton ? (
          <S.Button onClick={handleClick}>Hide sold items</S.Button>
        ) : (
          <S.Button onClick={handleClick}>Show all items</S.Button>
        )
      }
      <div>
        <S.HeartContainer><S.Heart src={likeIcon} /> {likeCount}</S.HeartContainer>
        {
          likedItemTitle && (
            <S.Notification onClick={deleteNotification}>⤬ New like: {likedItemTitle}</S.Notification>
          )
        }
      </div>
    </S.Wrapper>
  )
};

export default TopPanel;