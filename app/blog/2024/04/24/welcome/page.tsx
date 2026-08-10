import Link from 'next/link';
import type { Metadata } from 'next';
import { SiteLayout } from '@/components/layout/SiteLayout';

export const metadata: Metadata = {
  title: 'Welcome to AI Seekhega India Blog',
  description:
    'Welcome to the official blog of AI Seekhega India! Updates, tutorials, and insights about AI and ML.',
};

export default function WelcomeBlogPost() {
  return (
    <SiteLayout>
      <article className="container prose prose-neutral dark:prose-invert max-w-3xl py-12">
        <p className="text-sm text-fd-muted-foreground not-prose">April 24, 2024</p>
        <h1>Welcome to AI Seekhega India Blog</h1>
        <p>
          Welcome to the official blog of AI Seekhega India! This is where we&apos;ll share
          updates, tutorials, and insights about artificial intelligence and machine learning.
        </p>

        <h2>What to Expect</h2>
        <ul>
          <li>Tutorials and guides</li>
          <li>Project updates</li>
          <li>Community highlights</li>
          <li>Research summaries</li>
          <li>Best practices and tips</li>
        </ul>

        <h2>Get Involved</h2>
        <p>
          We encourage community members to contribute to our blog. If you have something to share
          about AI and ML, please check out our{' '}
          <Link href="/contribute">contribution guidelines</Link>.
        </p>

        <p>Stay tuned for more content coming soon!</p>
      </article>
    </SiteLayout>
  );
}
