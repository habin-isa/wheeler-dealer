import axios from "axios";

const url = "https://5c78274f6810ec00148d0ff1.mockapi.io/api/v1/products";

export const getProducts = async () => {
  const response = await axios.get(url);
  console.log('getProducts res: ', response);
  return response;
}