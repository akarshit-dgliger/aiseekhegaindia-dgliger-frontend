const siteUrl = 'https://ai-ml-docs.org';

const posts = [
  {
    title: 'Welcome to AI Seekhega India Blog',
    description:
      'Welcome to the official blog of AI Seekhega India! Updates, tutorials, and insights about AI and ML.',
    url: `${siteUrl}/blog/2024/04/24/welcome`,
    date: new Date('2024-04-24'),
  },
];

export function GET() {
  const items = posts
    .map(
      (post) => `
    <item>
      <title>${post.title}</title>
      <link>${post.url}</link>
      <guid>${post.url}</guid>
      <pubDate>${post.date.toUTCString()}</pubDate>
      <description>${post.description}</description>
    </item>`,
    )
    .join('');

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>AISeekhegaIndia Blog</title>
    <link>${siteUrl}/blog</link>
    <description>Updates, tutorials, and insights about AI and ML from AISeekhegaIndia.</description>
    <language>en</language>${items}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
    },
  });
}
