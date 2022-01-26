import React from 'react';
import { render, screen } from '@testing-library/react';
import { BasicFeatured } from './featured.composition';

it('checks main header exists and cards are rendered', () => {
  render(<BasicFeatured />);
  const heading = screen.getAllByRole('heading')[0];
  expect(heading).toHaveTextContent(
    'Start your component-driven journey with:'
  );
  const cards = screen.getAllByRole('heading')[1];
  expect(cards).toBeInTheDocument();
});
