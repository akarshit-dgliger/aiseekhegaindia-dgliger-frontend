import Link from 'next/link';
import type { Metadata } from 'next';
import { SiteLayout } from '@/components/layout/SiteLayout';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Updates, tutorials, and insights from AI Seekhega India.',
};

const posts = [
  {
    title: 'Welcome to AI Seekhega India Blog',
    description:
      'Welcome to the official blog of AI Seekhega India! Updates, tutorials, and insights about AI and ML.',
    date: 'April 24, 2024',
    href: '/blog/2024/04/24/welcome',
  },
];

export default function BlogIndexPage() {
  return (
    <SiteLayout>
      <div className="container py-12">
        <h1 className="mb-8 text-4xl font-bold">Blog</h1>
        <div className="space-y-6">
          {posts.map((post) => (
            <article
              key={post.href}
              className="rounded-lg border border-fd-border p-6 transition hover:border-fd-primary"
            >
              <p className="mb-2 text-sm text-fd-muted-foreground">{post.date}</p>
              <h2 className="mb-2 text-2xl font-semibold">
                <Link href={post.href} className="hover:text-fd-primary">
                  {post.title}
                </Link>
              </h2>
              <p className="text-fd-muted-foreground">{post.description}</p>
            </article>
          ))}
        </div>
      </div>
    </SiteLayout>
  );
}
