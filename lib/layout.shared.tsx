import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: 'AISeekhegaIndia',
      url: '/',
    },
    links: [
      {
        text: 'Resources',
        url: '/docs/resources/intro',
        active: 'nested-url',
      },
      {
        type: 'menu',
        text: 'Topics',
        items: [
          { text: 'AI for Leaders', url: '/docs/ai-for-leaders/intro' },
          { text: 'Machine Learning', url: '/docs/machine-learning/intro' },
          { text: 'Deep Learning', url: '/docs/deep-learning/intro' },
          { text: 'Language Models', url: '/docs/language-models/intro' },
          { text: 'Resources', url: '/docs/resources/intro' },
        ],
      },
      { text: 'AI Fellowship', url: '/fellowship' },
      {
        type: 'menu',
        text: 'Tutorials',
        items: [
          {
            text: 'Interactive Logistic Regression',
            url: '/docs/tutorials/logistic-regression',
          },
        ],
      },
      {
        text: 'GitHub',
        url: 'https://github.com/ai-ml-community/ai-ml-docs',
        external: true,
      },
      { text: 'Contribute', url: '/contribute' },
    ],
    githubUrl: 'https://github.com/ai-ml-community/ai-ml-docs',
  };
}
