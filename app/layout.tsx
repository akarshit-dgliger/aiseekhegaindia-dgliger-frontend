import type { Metadata } from 'next';
import { RootProvider } from 'fumadocs-ui/provider/next';
import { Inter } from 'next/font/google';
import 'katex/dist/katex.min.css';
import 'fumadocs-ui/style.css';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://ai-ml-docs.org'),
  title: {
    default: 'AISeekhegaIndia',
    template: '%s | AISeekhegaIndia',
  },
  description:
    'Community-driven platform for Machine Learning, Deep Learning, and Language Models',
  icons: {
    icon: '/img/favicon.ico',
  },
  openGraph: {
    images: ['/img/social-card.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} flex min-h-screen flex-col`}>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
