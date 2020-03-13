import styled from 'styled-components';

export const Wrapper = styled.div`
  align-items: center;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ImgContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  z-index: 9999;
`;

export const Heart = styled.img`
  position: absolute;
  width: 40px;
  padding: 20px;
  z-index: 9999;
  cursor: pointer;
`;

export const ProductImg = styled.img`
  height: 400px;
  width: auto;
`;

export const SoldCaption = styled.div`
  position: absolute;
  font-size: 30px;
  left: 45%;
  top: 40%;
`;

export const ProductInfo = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
`;