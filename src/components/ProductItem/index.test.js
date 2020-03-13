
import React from 'react';
import { shallow } from 'enzyme';
import ProductItem from '.';

describe('Product Item', () => {

  const props = {
    id: '2',
    title: 'Ralph Lauren Tee',
    brand: 'Ralph Lauren',
    size: 'XL',
    price: '£666',
    img: 'https://picsum.photos/500/?image=0'
  }

   it('renders with correct product data', () => {
      shallow(<ProductItem product={props} />);
    });

});