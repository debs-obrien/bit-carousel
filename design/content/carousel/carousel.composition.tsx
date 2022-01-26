import React from 'react';
import { Carousel } from './carousel';

export const BasicCarousel = () => {
  return (
    <Carousel>
      {images.map((item, index) => (
        <img src={item.src} alt={item.alt} key={index} />
      ))}
    </Carousel>
  );
};
export const CarouselNoAnimation = () => {
  return (
    <Carousel animation={false}>
      {images.map((item, index) => (
        <img src={item.src} alt={item.alt} key={index} />
      ))}
    </Carousel>
  );
};

const images = [
  {
    src: 'https://via.placeholder.com/300',
    alt: 'image placeholder',
  },
  {
    src: 'https://via.placeholder.com/300',
    alt: 'image placeholder',
  },
  {
    src: 'https://via.placeholder.com/300',
    alt: 'image placeholder',
  },
  {
    src: 'https://via.placeholder.com/300',
    alt: 'image placeholder',
  },
  {
    src: 'https://via.placeholder.com/300',
    alt: 'image placeholder',
  },
  {
    src: 'https://via.placeholder.com/300',
    alt: 'image placeholder',
  },
];
