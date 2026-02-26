import React, { useState } from 'react';
import { SiteNav } from '../components/SiteNav';
import { Footer } from '../components/Footer';
import { Mail, MessageSquare, ArrowRight } from 'lucide-react';
interface ContactPageProps {
  onNavigate: (page: string) => void;
}
export function ContactPage({ onNavigate }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#E8E0D4] selection:bg-brave-accent/20 selection:text-white">
      <SiteNav currentPage="contact" onNavigate={onNavigate} />

      <main className="w-full">
        {/* SECTION 1 — HERO */}
        <section className="max-w-7xl mx-auto px-6 pt-32 pb-24 text-center">
          <span className="block text-[10px] font-medium tracking-[0.3em] text-brave-text-secondary mb-10 uppercase opacity-80">
            Contact
          </span>
          <h1 className="text-6xl md:text-8xl font-serif text-brave-text-primary mb-8 leading-[0.95] tracking-tight">
            Get in touch
            <br />
            <span className="text-brave-text-secondary/80">with our team.</span>
          </h1>
          <p className="text-lg text-brave-text-secondary font-light max-w-xl mx-auto mb-24 leading-relaxed opacity-90">
            Whether you have questions about the curriculum, membership details,
            or partnership opportunities, we're here to help.
          </p>

          <div className="h-px w-full bg-brave-border/60" />
        </section>

        {/* SECTION 2 — FORM & INFO */}
        <section className="max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left Column - Info */}
            <div>
              <h2 className="text-3xl font-serif text-brave-text-primary mb-12">
                Direct Channels
              </h2>

              <div className="space-y-8">
                <div className="flex items-start gap-6 p-8 border border-brave-border/60 bg-brave-card/30 rounded-[1px] hover:border-brave-text-secondary/30 transition-colors">
                  <Mail className="w-6 h-6 text-brave-text-primary mt-1" />
                  <div>
                    <h3 className="text-lg font-serif text-brave-text-primary mb-2">
                      Email Support
                    </h3>
                    <p className="text-sm text-brave-text-secondary mb-4 font-light">
                      For general inquiries and membership support.
                    </p>
                    <a
                      href="mailto:support@braveheart.trading"
                      className="text-sm font-medium text-brave-text-primary hover:text-brave-accent transition-colors inline-flex items-center gap-2">

                      support@braveheart.trading{' '}
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-6 p-8 border border-brave-border/60 bg-brave-card/30 rounded-[1px] hover:border-brave-text-secondary/30 transition-colors">
                  <MessageSquare className="w-6 h-6 text-brave-text-primary mt-1" />
                  <div>
                    <h3 className="text-lg font-serif text-brave-text-primary mb-2">
                      Community
                    </h3>
                    <p className="text-sm text-brave-text-secondary mb-4 font-light">
                      Join the conversation on our social channels.
                    </p>
                    <div className="flex gap-6">
                      <a
                        href="#"
                        className="text-[10px] font-medium tracking-[0.2em] uppercase text-brave-text-secondary hover:text-brave-text-primary transition-colors">

                        Twitter
                      </a>
                      <a
                        href="#"
                        className="text-[10px] font-medium tracking-[0.2em] uppercase text-brave-text-secondary hover:text-brave-text-primary transition-colors">

                        Instagram
                      </a>
                      <a
                        href="#"
                        className="text-[10px] font-medium tracking-[0.2em] uppercase text-brave-text-secondary hover:text-brave-text-primary transition-colors">

                        YouTube
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="bg-brave-card border border-brave-border/60 p-8 md:p-12 rounded-[1px]">
              <h2 className="text-2xl font-serif text-brave-text-primary mb-8">
                Send a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-[10px] font-medium tracking-[0.2em] uppercase text-brave-text-secondary">

                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                      setFormData({
                        ...formData,
                        name: e.target.value
                      })
                      }
                      className="w-full bg-[#0A0A0A] border border-brave-border/60 px-4 py-3 text-brave-text-primary focus:outline-none focus:border-brave-accent/50 transition-colors rounded-[1px]"
                      placeholder="John Doe" />

                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-[10px] font-medium tracking-[0.2em] uppercase text-brave-text-secondary">

                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) =>
                      setFormData({
                        ...formData,
                        email: e.target.value
                      })
                      }
                      className="w-full bg-[#0A0A0A] border border-brave-border/60 px-4 py-3 text-brave-text-primary focus:outline-none focus:border-brave-accent/50 transition-colors rounded-[1px]"
                      placeholder="john@example.com" />

                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="text-[10px] font-medium tracking-[0.2em] uppercase text-brave-text-secondary">

                    Subject
                  </label>
                  <select
                    id="subject"
                    value={formData.subject}
                    onChange={(e) =>
                    setFormData({
                      ...formData,
                      subject: e.target.value
                    })
                    }
                    className="w-full bg-[#0A0A0A] border border-brave-border/60 px-4 py-3 text-brave-text-primary focus:outline-none focus:border-brave-accent/50 transition-colors appearance-none rounded-[1px]">

                    <option value="">Select a topic...</option>
                    <option value="membership">Membership Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-[10px] font-medium tracking-[0.2em] uppercase text-brave-text-secondary">

                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    value={formData.message}
                    onChange={(e) =>
                    setFormData({
                      ...formData,
                      message: e.target.value
                    })
                    }
                    className="w-full bg-[#0A0A0A] border border-brave-border/60 px-4 py-3 text-brave-text-primary focus:outline-none focus:border-brave-accent/50 transition-colors resize-none rounded-[1px]"
                    placeholder="How can we help you?" />

                </div>

                <button
                  type="submit"
                  className="w-full bg-[#E8E0D4] text-[#0A0A0A] px-6 py-4 font-medium text-[10px] tracking-[0.2em] uppercase hover:bg-white transition-colors mt-4 rounded-[1px]">

                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* SECTION 3 — CTA */}
        <section className="max-w-7xl mx-auto px-6 py-32">
          <div className="relative max-w-3xl mx-auto border border-brave-border/60 p-16 md:p-24 text-center bg-[#080808] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none" />

            <h2 className="relative text-4xl md:text-5xl font-serif text-brave-text-primary mb-8 tracking-tight">
              Unlock the Members Vault
            </h2>
            <p className="relative text-base text-brave-text-secondary font-light max-w-lg mx-auto mb-14 leading-relaxed">
              Gain immediate access to the complete curriculum, live sessions,
              and the private performance environment.
            </p>
            <button className="relative px-10 py-5 bg-[#E8E0D4] text-[#0A0A0A] text-[10px] font-semibold tracking-[0.25em] uppercase hover:bg-white hover:scale-[1.02] transition-all duration-300 shadow-[0_0_20px_-5px_rgba(232,224,212,0.3)]">
              Access The Vault
            </button>
          </div>
        </section>

        {/* Disclaimer */}
        <div className="max-w-2xl mx-auto px-6 pb-16 text-center">
          <p className="text-[10px] text-brave-text-muted italic leading-relaxed opacity-60">
            Past performance is not indicative of future results. Trading
            involves substantial risk of loss. All payouts shown are
            self-reported by members and independently verified where possible.
          </p>
        </div>
      </main>

      <Footer />
    </div>);

}