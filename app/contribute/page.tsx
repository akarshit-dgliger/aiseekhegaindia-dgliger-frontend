import Link from 'next/link';
import type { Metadata } from 'next';
import { SiteLayout } from '@/components/layout/SiteLayout';

export const metadata: Metadata = {
  title: 'How to Contribute',
  description: 'Contribution guidelines for AI Seekhega India documentation.',
};

export default function ContributePage() {
  return (
    <SiteLayout>
      <article className="container prose prose-neutral dark:prose-invert max-w-3xl py-12">
        <h1>How to Contribute</h1>
        <p>
          Thank you for your interest in contributing to the AI &amp; ML Documentation project!
          This community-driven resource depends on contributions from people like you.
        </p>

        <h2>Ways to Contribute</h2>
        <ul>
          <li>
            <strong>Add new content</strong>: Write new tutorials, guides, or reference
            documentation
          </li>
          <li>
            <strong>Improve existing content</strong>: Fix typos, clarify explanations, update
            outdated information
          </li>
          <li>
            <strong>Add code examples</strong>: Provide practical examples in Python, R, or other
            languages
          </li>
          <li>
            <strong>Review and give feedback</strong>: Help review pull requests and provide
            constructive feedback
          </li>
          <li>
            <strong>Report issues</strong>: Report bugs, suggest improvements, or request new content
          </li>
        </ul>

        <h2>Getting Started</h2>
        <h3>1. Set up your development environment</h3>
        <ol>
          <li>Fork the repository on GitHub</li>
          <li>Clone your fork locally</li>
          <li>Install dependencies with <code>npm install</code></li>
          <li>Start the development server with <code>npm run dev</code></li>
        </ol>

        <h3>2. Make your changes</h3>
        <p>Our documentation is organized in the following directories:</p>
        <ul>
          <li>
            <code>/docs/machine-learning/</code>: Machine Learning documentation
          </li>
          <li>
            <code>/docs/deep-learning/</code>: Deep Learning documentation
          </li>
          <li>
            <code>/docs/language-models/</code>: Language Models documentation
          </li>
          <li>
            <code>/docs/resources/</code>: Resources, libraries, datasets, and tools
          </li>
        </ul>
        <p>All documentation is written in Markdown with MDX extensions for interactive components.</p>

        <h3>3. Submit a pull request</h3>
        <ol>
          <li>Commit your changes to a new branch</li>
          <li>Push your branch to your fork</li>
          <li>Submit a pull request from your branch to the main repository</li>
          <li>Describe your changes in the pull request description</li>
        </ol>

        <h2>Questions?</h2>
        <p>If you have any questions about contributing, please:</p>
        <ul>
          <li>
            Open an issue on{' '}
            <a href="https://github.com/ai-ml-community/ai-ml-docs">GitHub</a>
          </li>
          <li>Join our community Discord</li>
          <li>Reach out to the maintainers</li>
        </ul>

        <p>
          Thank you for helping make{' '}
          <Link href="/">AI Seekhega India</Link> better for everyone!
        </p>
      </article>
    </SiteLayout>
  );
}
