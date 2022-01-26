import React, { ReactNode } from 'react';
import classNames from 'classnames';
import styles from './carousel.module.scss';

export type CarouselProps = {
  /**
   * child nodes to be rendered
   */
  children: ReactNode;
  /**
   * switch conveyor belt on or off
   */
  animation?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export function Carousel({
  children,
  className,
  animation = true,
}: CarouselProps) {
  return (
    <div
      data-testid="carousel"
      className={classNames(
        animation ? styles.animation : '',
        styles.carousel,
        className
      )}
    >
      {children}
    </div>
  );
}
