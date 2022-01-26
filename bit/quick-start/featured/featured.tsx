import React from 'react';
import { Card } from '@teambit/design.ui.cards.card';
import { H3, H4 } from '@teambit/design.ui.heading';
import { Carousel } from '@teambit/design.content.carousel';
import { Paragraph } from '@teambit/base-ui.text.paragraph';
import { Image } from '@teambit/base-react.content.image';
import { Link } from '@teambit/base-react.navigation.link';
import styles from './featured.module.scss';

export type FeaturedProps = {};

export function Featured({}: FeaturedProps) {
  return (
    <div className={styles.featured}>
      <H3 className={styles.heading}>
        Start your component-driven journey with:
      </H3>
      <Carousel animation={false} className={styles.carousel}>
        {cards.map((card) => (
          <Card key={card.heading} className={styles.card}>
            <H4 className={styles.cardHeading}>{card.heading}</H4>
            <Paragraph>{card.description}</Paragraph>
            {card.logos.map((logo, index) => (
              <Link href={logo.href} key={card.heading + '-' + index}>
                <Image alt={logo.alt} src={logo.src} className={styles.logo} />
              </Link>
            ))}
          </Card>
        ))}
      </Carousel>
    </div>
  );
}

const cards = [
  {
    heading: 'Wiki',
    description:
      'Collaborate on organizational process and knowledge with a component-driven wiki.',
    logos: [
      {
        src: 'https://static.bit.dev/extensions-icons/react.svg',
        alt: 'React',
        href: '/',
      },
      {
        src: 'https://static.bit.dev/extensions-icons/node.svg',
        alt: 'Node',
        href: '/',
      },
    ],
  },
  {
    heading: 'Authentication',
    description: 'Create a standard and unified authentication solution',
    logos: [
      {
        src: 'https://static.bit.dev/extensions-icons/react.svg',
        alt: 'React',
        href: '/',
      },
      {
        src: 'https://static.bit.dev/extensions-icons/node.svg',
        alt: 'Node',
        href: '/',
      },
    ],
  },
  {
    heading: 'Button',
    description:
      'Create your first button and evolve your component-driven design system',
    logos: [
      {
        src: 'https://static.bit.dev/extensions-icons/react.svg',
        alt: 'React',
        href: '/',
      },
      {
        src: 'https://static.bit.dev/extensions-icons/node.svg',
        alt: 'Node',
        href: '/',
      },
    ],
  },
  {
    heading: 'Blog',
    description:
      'Build a component-driven platform. Use components to empower content',
    logos: [
      {
        src: 'https://static.bit.dev/extensions-icons/react.svg',
        alt: 'React',
        href: '/',
      },
      {
        src: 'https://static.bit.dev/extensions-icons/node.svg',
        alt: 'Node',
        href: '/',
      },
    ],
  },
  {
    heading: 'Subtitle1',
    description: 'Create a standard and unified authentication solution',
    logos: [
      {
        src: 'https://static.bit.dev/extensions-icons/react.svg',
        alt: 'React',
        href: '/',
      },
      {
        src: 'https://static.bit.dev/extensions-icons/node.svg',
        alt: 'Node',
        href: '/',
      },
    ],
  },
  {
    heading: 'Subtitle2',
    description: 'Create a standard and unified authentication solution',
    logos: [
      {
        src: 'https://static.bit.dev/extensions-icons/react.svg',
        alt: 'React',
        href: '/',
      },
      {
        src: 'https://static.bit.dev/extensions-icons/node.svg',
        alt: 'Node',
        href: '/',
      },
    ],
  },
  {
    heading: 'Subtitle3',
    description: 'Create a standard and unified authentication solution',
    logos: [
      {
        src: 'https://static.bit.dev/extensions-icons/react.svg',
        alt: 'React',
        href: '/',
      },
      {
        src: 'https://static.bit.dev/extensions-icons/node.svg',
        alt: 'Node',
        href: '/',
      },
    ],
  },
];
