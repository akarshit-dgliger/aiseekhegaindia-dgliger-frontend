import Link from 'next/link';
import Image from 'next/image';
import { AuthNav } from '@/components/auth/AuthNav';
import { footerLinks, siteConfig } from '@/lib/navigation';

export function SiteFooter() {
  return (
    <footer className="border-t border-fd-border bg-fd-secondary/30 mt-auto">
      <div className="container py-10">
        <div className="grid gap-8 md:grid-cols-3">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="mb-3 text-sm font-semibold">{section.title}</h3>
              <ul className="space-y-2 text-sm text-fd-muted-foreground">
                {section.items.map((item) => (
                  <li key={item.label}>
                    {'href' in item ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-fd-foreground"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link href={item.to} className="hover:text-fd-foreground">
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="mt-8 border-t border-fd-border pt-6 text-center text-sm text-fd-muted-foreground">
          {siteConfig.copyright}
        </p>
      </div>
    </footer>
  );
}

export function SiteNavbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-fd-border bg-fd-background/80 backdrop-blur">
      <div className="container flex h-14 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Image src="/img/logo.svg" alt="AISeekhegaIndia" width={28} height={28} />
          {siteConfig.title}
        </Link>
        <div className="flex items-center gap-4">
          <nav className="hidden items-center gap-4 text-sm md:flex">
            <Link href="/docs/resources/intro" className="hover:text-fd-primary">
              Resources
            </Link>
            <Link href="/fellowship" className="hover:text-fd-primary">
              AI Fellowship
            </Link>
            <Link href="/contribute" className="hover:text-fd-primary">
              Contribute
            </Link>
            <a
              href="https://github.com/ai-ml-community/ai-ml-docs"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-fd-primary"
            >
              GitHub
            </a>
          </nav>
          <AuthNav />
        </div>
      </div>
    </header>
  );
}

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteNavbar />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
