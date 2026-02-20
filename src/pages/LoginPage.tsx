import React from 'react';
import { SignIn } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';

export function LoginPage() {
  return (
    <div className="min-h-screen bg-bg flex flex-col items-center justify-center p-4">
      <SignIn afterSignInUrl="/vault" routing="hash" />
      <div className="mt-6">
        <Link to="/" className="font-mono text-[9px] tracking-widest uppercase text-text-muted hover:text-gold transition-colors">
          ← Back to home
        </Link>
      </div>
    </div>
  );
}
