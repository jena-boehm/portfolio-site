import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Portfolio } from '../Portfolio';

describe('Portfolio component', () => {
  afterEach(() => cleanup());
  it('renders Portfolio', () => {
    const { asFragment } = render(<Portfolio />);
    expect(asFragment()).toMatchSnapshot();
  });
});
