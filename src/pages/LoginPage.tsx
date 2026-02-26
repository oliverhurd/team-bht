import React from 'react';
import { SignIn } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';

export function LoginPage() {
  const [showScrollTop, setShowScrollTop] = React.useState(false);

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

  return (
    <div className="min-h-screen bg-bg flex flex-col items-center justify-center p-4">
      <SignIn afterSignInUrl="/vault" routing="hash" />
      <div className="mt-6">
        <Link to="/" className="font-mono text-[9px] tracking-widest uppercase text-text-muted hover:text-gold transition-colors">
          ← Back to home
        </Link>
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
