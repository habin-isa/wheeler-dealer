import React, { useState } from 'react';
import { func, number, bool, array } from 'prop-types';
import * as S from './styles';
import Notification from '../Notification';

import likeIcon from '../../assets/full-like.svg'

const TopPanel = ({ productCount, likeCount, handleShowClick, hideSoldItems, deleteLike, likedList }) => {
  const [showSoldButton, setShowSoldButton] = useState(false);
  
  const handleClick = () => {
    setShowSoldButton(!showSoldButton);
    if (hideSoldItems === false) {
      handleShowClick(false);
    } else {
      handleShowClick(true);
    }
	};

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
      <S.NotificationWrapper>
        <S.HeartContainer>
          <S.Heart src={likeIcon} /> {likeCount}
        </S.HeartContainer>
        <Notification likedList={likedList} deleteLike={deleteLike} />
      </S.NotificationWrapper>
    </S.Wrapper>
  )
};

TopPanel.propTypes = {
  productCount: number,
  likeCount: number,
  handleShowClick: func,
  hideSoldItems: bool,
  deleteLike: func,
  likedList: array
}

export default TopPanel;