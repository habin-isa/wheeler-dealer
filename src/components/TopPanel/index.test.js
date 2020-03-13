
import React from 'react';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';
import TopPanel from '.';

describe('Top Panel', () => {

  const props = {
    productCount: 5,
    likeCount: 3
  };

  it('should render', () => {
    const { container } = render(<TopPanel {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });

   it('renders with correct count data', () => {
      shallow(<TopPanel product={props} />);
    });

});