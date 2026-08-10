'use client';

import { useEffect, useState } from 'react';

import { getMe } from '@/lib/auth';
import type { UserPublic } from '@/types/api';

import { SignInButton } from './SignInButton';
import { UserMenu } from './UserMenu';

export function AuthNav() {
  const [user, setUser] = useState<UserPublic | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    getMe()
      .then((sessionUser) => {
        if (active) setUser(sessionUser);
      })
      .catch(() => {
        if (active) setUser(null);
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  if (loading) {
    return <div className="h-8 w-24 animate-pulse rounded-md bg-fd-secondary" aria-hidden />;
  }

  return user ? <UserMenu user={user} /> : <SignInButton />;
}
