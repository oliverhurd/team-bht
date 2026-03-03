import React from 'react';

interface PageHeroProps {
  overline: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  containerClassName?: string; // allow overrides (eg. results page uses custom widths)
  titleClassName?: string;
  descriptionClassName?: string;
}

export function PageHero({
  overline,
  title,
  description,
  containerClassName = '',
  titleClassName = '',
  descriptionClassName = '',
  children
}: PageHeroProps & { children?: React.ReactNode }) {
  return (
    <section className={`max-w-7xl mx-auto px-6 pt-32 pb-24 text-center ${containerClassName}`}>
      <span className="block text-[10px] font-medium tracking-[0.3em] text-brave-text-secondary mb-10 uppercase opacity-80">
        {overline}
      </span>
      <h1
        className={`text-6xl md:text-8xl font-serif text-brave-text-primary mb-8 leading-[0.95] tracking-tight ${titleClassName}`}
      >
        {title}
      </h1>
      {description && (
        <p
          className={`text-lg text-brave-text-secondary font-light max-w-xl mx-auto mb-24 leading-relaxed opacity-90 ${descriptionClassName}`}
        >
          {description}
        </p>
      )}
      {children}
      <div className="h-px w-full bg-brave-border/60" />
    </section>
  );
}
