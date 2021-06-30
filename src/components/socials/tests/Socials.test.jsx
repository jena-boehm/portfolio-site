import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Socials } from '../Socials';

describe('Socials component', () => {
  afterEach(() => cleanup());
  it('renders Socials', () => {
    const { asFragment } = render(<Socials />);
    expect(asFragment()).toMatchSnapshot();
  });
});
