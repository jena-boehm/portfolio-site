import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Home } from '../Home';

describe('Home component', () => {
  afterEach(() => cleanup());
  it('renders Home', () => {
    const { asFragment } = render(<Home />);
    expect(asFragment()).toMatchSnapshot();
  });
});
