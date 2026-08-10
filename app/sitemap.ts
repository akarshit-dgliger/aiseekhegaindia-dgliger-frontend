import type { MetadataRoute } from 'next';
import fs from 'node:fs';
import path from 'node:path';

const siteUrl = 'https://ai-ml-docs.org';
const docsDir = path.join(process.cwd(), 'docs');

function collectDocRoutes(dir: string, segments: string[] = []): string[] {
  const routes: string[] = [];
  if (!fs.existsSync(dir)) return routes;

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('.')) continue;

    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      routes.push(...collectDocRoutes(fullPath, [...segments, entry.name]));
      continue;
    }

    if (!/\.(md|mdx)$/.test(entry.name) || entry.name === 'meta.json') continue;

    const slug = entry.name.replace(/\.(md|mdx)$/, '');
    routes.push(`/docs/${[...segments, slug].join('/')}`);
  }

  return routes;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const docRoutes = collectDocRoutes(docsDir);
  const staticRoutes = [
    '',
    '/fellowship',
    '/contribute',
    '/blog',
    '/blog/2024/04/24/welcome',
    '/blog/rss.xml',
    '/blog/atom.xml',
  ];

  return [...staticRoutes, ...docRoutes].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}
