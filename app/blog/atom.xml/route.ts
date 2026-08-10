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
  const entries = posts
    .map(
      (post) => `
  <entry>
    <title>${post.title}</title>
    <link href="${post.url}" />
    <id>${post.url}</id>
    <updated>${post.date.toISOString()}</updated>
    <summary>${post.description}</summary>
  </entry>`,
    )
    .join('');

  const atom = `<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>AISeekhegaIndia Blog</title>
  <link href="${siteUrl}/blog" />
  <id>${siteUrl}/blog</id>
  <updated>${posts[0].date.toISOString()}</updated>${entries}
</feed>`;

  return new Response(atom, {
    headers: {
      'Content-Type': 'application/atom+xml; charset=utf-8',
    },
  });
}
