import React from 'react';
import { Youtube, Twitter, Instagram, Send } from 'lucide-react';
export function Footer() {
  return (
    <footer className="w-full px-6 py-16 border-t border-brave-border bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="text-xl font-serif font-bold tracking-tight text-brave-text-primary mb-6">
              BRAVEHEART
            </div>
            <p className="text-sm text-brave-text-secondary leading-relaxed mb-6">
              Institutional-grade trading education for the independent trader.
              Structure over signals. Process over profit.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-brave-text-secondary hover:text-brave-text-primary transition-colors">

                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-brave-text-secondary hover:text-brave-text-primary transition-colors">

                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-brave-text-secondary hover:text-brave-text-primary transition-colors">

                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-brave-text-secondary hover:text-brave-text-primary transition-colors">

                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-medium tracking-[0.2em] text-brave-text-primary uppercase mb-6">
              Navigation
            </h4>
            <ul className="space-y-3 text-sm text-brave-text-secondary">
              <li>
                <a
                  href="#"
                  className="hover:text-brave-text-primary transition-colors">

                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-brave-text-primary transition-colors">

                  Courses
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-brave-text-primary transition-colors">

                  Results
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-brave-text-primary transition-colors">

                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-medium tracking-[0.2em] text-brave-text-primary uppercase mb-6">
              Resources
            </h4>
            <ul className="space-y-3 text-sm text-brave-text-secondary">
              <li>
                <a
                  href="#"
                  className="hover:text-brave-text-primary transition-colors">

                  Public Notes
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-brave-text-primary transition-colors">

                  Tools & Affiliates
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-brave-text-primary transition-colors">

                  Contribute
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-brave-text-primary transition-colors">

                  Members Vault
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-medium tracking-[0.2em] text-brave-text-primary uppercase mb-6">
              Legal
            </h4>
            <ul className="space-y-3 text-sm text-brave-text-secondary">
              <li>
                <a
                  href="#"
                  className="hover:text-brave-text-primary transition-colors">

                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-brave-text-primary transition-colors">

                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-brave-text-primary transition-colors">

                  Risk Disclosure
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-brave-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-brave-text-muted">
          <p>© 2026 Braveheart Trading. All rights reserved.</p>
          <p>Trading involves substantial risk of loss.</p>
        </div>
      </div>
    </footer>);

}