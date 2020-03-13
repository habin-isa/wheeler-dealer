import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  padding-bottom: 10px;
`;

export const Results = styled.div`
`;

export const HeartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Heart = styled.img`
  width: 40px;
  padding: 20px;
`;

export const Button = styled.button`
  width: 150px;
  height: 40px;
  border-color: red;
  background: red;
  color: white;
  font-weight: bold;
  outline: none;
  cursor: pointer;
`;

export const Notification = styled.div`
  position: absolute;
  cursor: pointer;
  font-size: 14px;
`;