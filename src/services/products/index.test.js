import axios from 'axios';
import { getProducts } from '.';

jest.mock('axios');

// Make sure to resolve with a promise
axios.mockResolvedValue();

describe('getProducts()', () => {
  it.skip('calls `axios()` with endpoint url and method', () => {
    const endpoint = 'https://5c78274f6810ec00148d0ff1.mockapi.io/api/v1/products';
    const method = 'get';

    // call function
    getProducts(endpoint, method);

    // assert axios()
    expect(axios).toBeCalledWith({ url: endpoint, method});
  });
}); 