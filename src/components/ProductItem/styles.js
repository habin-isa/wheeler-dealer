import styled from 'styled-components';

export const Wrapper = styled.div`
  align-items: center;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative;
`;

export const Heart = styled.img`
  width: 40px;
  position: absolute;
  padding: 20px;
  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }
`;

export const ProductImg = styled.img`
  height: 400px;
  width: auto;
  position: relative;
`;

export const SoldCaption = styled.div`
  position: absolute;
  font-size: 30px;
`;

export const ProductInfo = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
`;