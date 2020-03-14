import React from 'react';
import * as S from './styles';
import { func, array } from 'prop-types';

const Notification = ({ likedList, deleteLike }) => {

  const likedNotifications = likedList.map((likedItem, i) => (
    <S.List
      key={i} 
      onClick={() => {
        deleteLike(i);
      }}
    >
      ⤬ New like: {likedItem}
    </S.List>
  ));
  
  return (
    <S.Wrapper>{likedNotifications}</S.Wrapper>
  )
};

Notification.propTypes = {
  likedList: array,
  deleteLike: func
};

export default Notification;