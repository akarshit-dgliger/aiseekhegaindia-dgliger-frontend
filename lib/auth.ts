import type { MeResponse, UserPublic } from '@/types/api';

function getApiUrl(): string {
  return (process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:4000').replace(/\/$/, '');
}

export async function getMe(): Promise<UserPublic | null> {
  const res = await fetch(`${getApiUrl()}/me`, { credentials: 'include' });
  if (res.status === 401) return null;
  if (!res.ok) throw new Error('Failed to fetch session');
  const data: MeResponse = await res.json();
  return data.user;
}

export function getGoogleSignInUrl(returnTo?: string): string {
  const q = returnTo ? `?returnTo=${encodeURIComponent(returnTo)}` : '';
  return `${getApiUrl()}/auth/google${q}`;
}

export async function signOut(): Promise<void> {
  await fetch(`${getApiUrl()}/auth/logout`, {
    method: 'POST',
    credentials: 'include',
  });
}
