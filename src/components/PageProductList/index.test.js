import React from 'react';
import PageProductList from '.';
import { render } from '@testing-library/react';

const props = {};

describe('PageProductList', () => {
    it('should render', () => {
        const { container } = render(<PageProductList {...props} />);
        expect(container.firstChild).toMatchSnapshot();
    });
});