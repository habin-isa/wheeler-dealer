import React, { useState } from 'react';
import * as S from './styles';

const TopPanel = ({ count }) => {
  return (
    <S.Wrapper>
      <div>{count} Results</div>
      <div>Notification</div>
    </S.Wrapper>
  )
};

export default TopPanel;