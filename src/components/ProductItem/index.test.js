
import React from 'react';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';
import ProductItem from '.';

describe('Product Item', () => {

  const props = {
    id: '2',
    title: 'Ralph Lauren Tee',
    brand: 'Ralph Lauren',
    size: 'XL',
    price: '£666',
    img: 'https://picsum.photos/500/?image=0',
    product: {
      sold: true
    }
  };

  it('should render', () => {
    const { container } = render(<ProductItem {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders with correct product data', () => {
    shallow(<ProductItem product={props} />);
  });

});