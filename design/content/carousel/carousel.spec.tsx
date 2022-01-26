import React from 'react';
import { render, screen } from '@testing-library/react';
import { BasicCarousel, CarouselNoAnimation } from './carousel.composition';

it('should render with the correct text', () => {
  render(<BasicCarousel />);
  const carousel = screen.getByTestId('carousel');
  expect(carousel).toBeInTheDocument();
  expect(carousel).toHaveClass('animation');
});

it('should render with the correct text', () => {
  render(<CarouselNoAnimation />);
  const carousel = screen.getByTestId('carousel');
  expect(carousel).not.toHaveClass('animation');
});
