import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Contact } from '../Contact';

describe('Contact component', () => {
  afterEach(() => cleanup());
  it('renders Contact', () => {
    const { asFragment } = render(<Contact />);
    expect(asFragment()).toMatchSnapshot();
  });
});
