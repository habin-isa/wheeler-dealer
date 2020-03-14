
import React from 'react';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';
import Notification from '.';

describe('Notification', () => {

  const props = {
    likedList: [
      'Man City shirt',
      'Buberry slippers',
      'Rapha top'
    ]
  };

  it('should render', () => {
    const { container } = render(<Notification likedList={props.likedList} />);
    expect(container.firstChild).toMatchSnapshot();
  });

   it('renders with correct like data', () => {
      shallow(<Notification likedList={props.likedList} />);
    });

});