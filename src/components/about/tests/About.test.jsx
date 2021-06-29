import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { About } from '../About';

describe('About component', () => {
  afterEach(() => cleanup());
  test.skip('renders About', () => {
    const { asFragment } = render(<About />);
    expect(asFragment()).toMatchSnapshot();
  });
});
