'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { signOut } from '@/lib/auth';
import type { UserPublic } from '@/types/api';

export function UserMenu({ user }: { user: UserPublic }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [signingOut, setSigningOut] = useState(false);

  const displayName = user.name ?? user.email;

  async function handleSignOut() {
    setSigningOut(true);
    try {
      await signOut();
      router.refresh();
      setOpen(false);
    } finally {
      setSigningOut(false);
    }
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex items-center gap-2 rounded-md px-2 py-1 hover:bg-fd-secondary"
        aria-expanded={open}
        aria-haspopup="menu"
      >
        {user.avatarUrl ? (
          <Image
            src={user.avatarUrl}
            alt=""
            width={28}
            height={28}
            className="rounded-full"
            unoptimized
          />
        ) : (
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-fd-primary text-xs font-semibold text-fd-primary-foreground">
            {displayName.charAt(0).toUpperCase()}
          </span>
        )}
        <span className="hidden max-w-[10rem] truncate text-sm sm:inline">{displayName}</span>
      </button>
      {open ? (
        <div className="absolute right-0 z-50 mt-2 w-48 rounded-md border border-fd-border bg-fd-background p-1 shadow-md">
          <p className="truncate px-3 py-2 text-xs text-fd-muted-foreground">{user.email}</p>
          <button
            type="button"
            onClick={handleSignOut}
            disabled={signingOut}
            className="w-full rounded px-3 py-2 text-left text-sm hover:bg-fd-secondary disabled:opacity-50"
          >
            {signingOut ? 'Signing out…' : 'Sign out'}
          </button>
        </div>
      ) : null}
    </div>
  );
}
