import React from 'react';
import { render, screen } from '@testing-library/react';
import { BasicLogoShowcase } from './logo-showcase.composition';

it('should have an alt, src and loading attribute', () => {
  render(<BasicLogoShowcase />);
  const logoShowcase = screen.getByAltText('Moodys');
  expect(logoShowcase).toBeInTheDocument();
  expect(logoShowcase).toContainHTML('src');
  expect(logoShowcase).toContainHTML('loading');
});
