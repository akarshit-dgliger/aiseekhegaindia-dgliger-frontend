import Link from 'next/link';
import clsx from 'clsx';
import type { Metadata } from 'next';
import HomepageFeatures from '@/components/HomepageFeatures';
import BrainIcon from '@/components/BrainIcon';
import { SiteLayout } from '@/components/layout/SiteLayout';
import styles from './home.module.css';

export const metadata: Metadata = {
  title: 'Home',
  description:
    'Community-driven platform for Machine Learning, Deep Learning, and Language Models',
};

function HomepageHeader() {
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroLeft}>
            <h1 className={styles.heroTitle}>
              Building India&apos;s{' '}
              <span className={styles.heroTitleHighlight}>AI</span> Future Together
            </h1>
            <p className={styles.heroSubtitle}>AI Seekhega India, Badhega India.</p>
            <div className={styles.buttons}>
              <Link
                className={clsx('button button--primary button--lg', styles.getStartedButton)}
                href="/docs/machine-learning/intro"
              >
                Start Learning
              </Link>
              <Link
                className={clsx('button button--secondary button--lg', styles.contributeButton)}
                href="/contribute"
              >
                Join Community
              </Link>
            </div>
            <div className={styles.heroStats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>100+</span>
                <span className={styles.statLabel}>Resources</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>24/7</span>
                <span className={styles.statLabel}>Support</span>
              </div>
            </div>
            <div className={styles.heroBadge}>Powered by India&apos;s AI Community</div>
          </div>
          <div className={styles.heroRight}>
            <div className={styles.heroImage}>
              <BrainIcon />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function HomePage() {
  return (
    <SiteLayout>
      <HomepageHeader />
      <HomepageFeatures />
      <section className={styles.topicsSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Explore Topics</h2>
          <div className={styles.topicsGrid}>
            <div className={styles.topicCard}>
              <h3>Machine Learning</h3>
              <p>
                Learn about supervised, unsupervised, and reinforcement learning algorithms,
                evaluation metrics, and practical applications.
              </p>
              <Link href="/docs/machine-learning/intro" className={styles.topicLink}>
                Explore Machine Learning →
              </Link>
            </div>
            <div className={styles.topicCard}>
              <h3>Deep Learning</h3>
              <p>
                Dive into neural networks, CNNs, RNNs, transformers, and advanced architectures
                driving AI breakthroughs.
              </p>
              <Link href="/docs/deep-learning/intro" className={styles.topicLink}>
                Explore Deep Learning →
              </Link>
            </div>
            <div className={styles.topicCard}>
              <h3>Language Models</h3>
              <p>
                Understand LLMs, tokenization, fine-tuning techniques, prompt engineering, and
                emerging capabilities.
              </p>
              <Link href="/docs/language-models/intro" className={styles.topicLink}>
                Explore Language Models →
              </Link>
            </div>
            <div className={styles.topicCard}>
              <h3>Resources</h3>
              <p>
                Find curated datasets, libraries, research papers, and tutorials to support your
                learning and projects.
              </p>
              <Link href="/docs/resources/intro" className={styles.topicLink}>
                Explore Resources →
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Join Our Community</h2>
            <p>
              Contribute to the platform, share your expertise, and help build a comprehensive
              resource for AI and ML practitioners around the world.
            </p>
            <div className={styles.ctaButtons}>
              <Link className="button button--primary button--lg" href="/contribute">
                Learn How to Contribute
              </Link>
              <a
                className="button button--secondary button--lg"
                href="https://github.com/ai-ml-community/ai-ml-docs"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub Repository
              </a>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
