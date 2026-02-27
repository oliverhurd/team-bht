import React from 'react';
import { SignIn, useAuth } from '@clerk/clerk-react';
import { ArrowUp } from 'lucide-react';

interface LoginPageProps {
  onSuccess?: () => void;
}

export function LoginPage({ onSuccess }: LoginPageProps) {
  const [showScrollTop, setShowScrollTop] = React.useState(false);
  const { isLoaded, isSignedIn } = useAuth();

  const handleScroll = () => {
    setShowScrollTop(window.scrollY > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // once the user is signed in, notify parent to move forward
  React.useEffect(() => {
    if (isLoaded && isSignedIn) {
      onSuccess?.();
    }
  }, [isLoaded, isSignedIn, onSuccess]);

  return (
    <div className="min-h-screen bg-bg flex flex-col items-center justify-center p-4">
      <SignIn />
      <div className="mt-6">
        <a href="/" className="font-mono text-[9px] tracking-widest uppercase text-text-muted hover:text-gold transition-colors">
          ← Back to home
        </a>
      </div>
      {/* Scroll-to-Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 p-3 bg-gold text-background rounded-full hover:bg-gold/90 transition-all shadow-lg"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
}
