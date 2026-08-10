import { defineConfig, defineDocs } from 'fumadocs-mdx/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

export const docs = defineDocs({
  dir: 'docs',
});

export default defineConfig({
  lastModifiedTime: 'none',
  mdxOptions: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
    rehypeCodeOptions: false,
    remarkImageOptions: false,
  },
});
