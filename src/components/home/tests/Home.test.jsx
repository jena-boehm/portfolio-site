import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Home } from '../Home';

describe('Home component', () => {
  afterEach(() => cleanup());
  test.skip('renders Home', () => {
    const { asFragment } = render(<Home />);
    expect(asFragment()).toMatchSnapshot();
  });
});
