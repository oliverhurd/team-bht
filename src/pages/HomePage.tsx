import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUp, Mail } from 'lucide-react';
const TAGLINES = ['From zero to one  — structure, discipline, mastery.', 'The mechanics behind market structure with time & price theory.', 'To build a cohesive structure behind ICT & SMC Concepts.', 'Speculating professional markets from an institutional and interbank level.', 'From zero to one — structure, discipline, mastery.', 'No fluff. No Bullsh*t. Just the mechanics of how markets move.'];
export function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [currentTagline, setCurrentTagline] = useState(0);
  const [isTaglineVisible, setIsTaglineVisible] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const handleScroll = () => {
    setShowScrollTop(window.scrollY > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  // Rotate taglines
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTaglineVisible(false);
      setTimeout(() => {
        setCurrentTagline((prev) => (prev + 1) % TAGLINES.length);
        setIsTaglineVisible(true);
      }, 600);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Subscribed: ${email}`);
    setEmail('');
  };
  return <div className="min-h-screen w-full bg-background flex flex-col justify-center items-center px-4 relative overflow-hidden">
      {/* Top-right nav with enhanced CTA */}
      <div className={`absolute top-8 right-8 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <Link to="/about" className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-background font-mono text-xs uppercase tracking-widest font-medium hover:bg-gold/90 transition-all shadow-lg">
          Enter Site
          <ArrowRight size={16} />
        </Link>
      </div>

      <div className={`max-w-3xl w-full text-center transition-all duration-2000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>

        {/* Decorative Line */}
        <div className="w-16 h-px bg-gold mx-auto mb-12"></div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-text-primary tracking-tight mb-4">
          BRAVEHEART
        </h1>

        <h2 className="text-xl md:text-2xl font-mono uppercase tracking-[0.2em] text-gold mb-10">
          TRADING
        </h2>

        {/* Animated Tagline */}
        <div className="h-16 md:h-12 flex items-center justify-center mb-12 max-w-3xl mx-auto overflow-hidden">
          <p className={`text-text-secondary text-lg md:text-xl font-light leading-relaxed transition-all duration-500 ${isTaglineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}>

            {TAGLINES[currentTagline]}
          </p>
        </div>

        {/* Newsletter Form - Enhanced */}
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-lg mx-auto mb-16 bg-bg-elevated border border-border overflow-hidden hover:border-gold/50 transition-colors">
          <div className="flex-1 flex items-center px-4">
            <Mail size={18} className="text-gold mr-3 flex-shrink-0" />
            <input type="email" placeholder="your@email.com" value={email} onChange={(e) => setEmail(e.target.value)} required className="flex-1 bg-transparent text-text-primary focus:outline-none font-mono text-sm placeholder:text-text-muted py-4" />
          </div>
          <button type="submit" className="bg-gold text-background px-8 py-4 font-mono text-xs uppercase tracking-widest font-medium hover:bg-gold/90 transition-colors whitespace-nowrap">
            Subscribe Now
          </button>
        </form>

        {/* Footer Text */}
        <p className="text-text-muted text-xs uppercase tracking-widest">
          Free Value on everything about trading Futures, Forex and Crypto.
        </p>

        {/* Subtle bottom indicator */}
        <div className="flex justify-center gap-1.5 mt-8">
          {TAGLINES.map((_, idx) => <div key={idx} className={`h-0.5 rounded-full transition-all duration-500 ${idx === currentTagline ? 'w-6 bg-gold' : 'w-1.5 bg-border'}`} />)}
        </div>
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
    </div>;
}
