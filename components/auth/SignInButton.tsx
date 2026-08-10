import { getGoogleSignInUrl } from '@/lib/auth';

export function SignInButton({ returnTo }: { returnTo?: string }) {
  return (
    <a
      href={getGoogleSignInUrl(returnTo)}
      className="inline-flex items-center rounded-md border border-fd-border bg-fd-background px-3 py-1.5 text-sm font-medium hover:bg-fd-secondary"
    >
      Sign in with Google
    </a>
  );
}
