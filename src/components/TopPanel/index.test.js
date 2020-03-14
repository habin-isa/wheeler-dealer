
import React from 'react';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';
import TopPanel from '.';

describe('Top Panel', () => {

  const props = {
    productCount: 5,
    likeCount: 3,
  };

  const likedList = [
    'Man City shirt',
    'Buberry slippers',
    'Rapha top'
  ];

  it('should render', () => {
    const { container } = render(<TopPanel {...props} likedList={likedList} />);
    expect(container.firstChild).toMatchSnapshot();
  });

   it('renders with correct count data', () => {
      shallow(<TopPanel product={props} likedList={likedList} />);
    });

});