import React, { useState } from 'react';
import { SiteNav } from '../components/SiteNav';
import { Footer } from '../components/Footer';
import { X } from 'lucide-react';

interface ResultsPageProps {
  onNavigate: (page: string) => void;
}

interface CertData {
  id: number;
  name: string;
  firm: string;
  amount: string;
  date: string;
  src?: string;
}

const CERTIFICATES: CertData[] = [
  {
    id: 1,
    name: 'Arooj N.',
    firm: 'Fidelcrest',
    amount: '$44,450',
    date: 'Feb 2024',
    src: '/certificates/arooj 44450 usd fidelcrest.png'
  },
  {
    id: 2,
    name: 'Arooj N.',
    firm: 'FXify',
    amount: '$27,499',
    date: 'Jan 2024',
    src: '/certificates/Arooj 27499 usd fxify.png'
  },
  {
    id: 3,
    name: 'Arooj N.',
    firm: 'FXify',
    amount: '$26,777',
    date: 'Feb 2024',
    src: '/certificates/Arooj 26777 usd fxif.png'
  },
  {
    id: 4,
    name: 'Masud A.',
    firm: 'Alpha Capital',
    amount: '$10,994',
    date: 'Oct 2023',
    src: '/certificates/alpha cap group 10994 usd profit masus awis.png'
  },
  {
    id: 5,
    name: 'Masud A.',
    firm: 'Topstep',
    amount: '$6,099',
    date: 'Aug 2023',
    src: '/certificates/vitalli 8503 usd profit topstep.png'
  },
  {
    id: 6,
    name: 'Bhumipat C.',
    firm: 'FTMO',
    amount: '$5,055',
    date: 'Jul 2022',
    src: '/certificates/Bhumiphat ftmo 5055 usd profit.png'
  },
  {
    id: 7,
    name: 'Tan Tran V.',
    firm: 'True Forex Funds',
    amount: '$5,001',
    date: 'Dec 2023',
    src: '/certificates/tan 5001 usd profit true forex funds.png'
  },
  {
    id: 8,
    name: 'Tan Tran V.',
    firm: 'True Forex Funds',
    amount: '$4,138',
    date: 'Jan 2024',
    src: '/certificates/tan 4138 usd profit true forex funds.png'
  },
  {
    id: 9,
    name: 'Jorden M.',
    firm: 'FTMO',
    amount: '$3,747',
    date: 'Jan 2023',
    src: '/certificates/jorden more head 3747 profit.png'
  },
  {
    id: 10,
    name: 'Tan Tran V.',
    firm: 'The Funded Trader',
    amount: '$2,065',
    date: 'Nov 2023',
    src: '/certificates/tan 2065 usd profit the funded trader.png'
  },
  {
    id: 11,
    name: 'Sz. Robert D.',
    firm: 'FTMO',
    amount: '$1,640',
    date: 'Jun 2022',
    src: '/certificates/robert demeter ftmo 1640 usd profit.png'
  },
  {
    id: 12,
    name: 'Athanasios C.',
    firm: 'My Funded FX',
    amount: '$804',
    date: 'Oct 2023',
    src: '/certificates/athanasios myfundedfx 800usd.png'
  }
];

const DISTRIBUTION_RECORDS = [
  {
    name: 'Arooj N.',
    amount: '$60,126',
    firm: 'FXify',
    date: 'May 2024'
  },
  {
    name: 'Arooj N.',
    amount: '$44,450',
    firm: 'Fidelcrest',
    date: 'Feb 2024'
  },
  {
    name: 'Arooj N.',
    amount: '$27,499',
    firm: 'FXify',
    date: 'Jan 2024'
  },
  {
    name: 'Arooj N.',
    amount: '$27,134',
    firm: 'FXify',
    date: 'May 2024'
  },
  {
    name: 'Arooj N.',
    amount: '$26,777',
    firm: 'FXify',
    date: 'Feb 2024'
  },
  {
    name: 'Masud A.',
    amount: '$10,994',
    firm: 'Alpha Capital',
    date: 'Oct 2023'
  },
  {
    name: 'Masud A.',
    amount: '$6,099',
    firm: 'Topstep',
    date: 'Aug 2023'
  },
  {
    name: 'Bhumipat C.',
    amount: '$5,055',
    firm: 'FTMO',
    date: 'Jul 2022'
  },
  {
    name: 'Tan Tran V.',
    amount: '$5,001',
    firm: 'True Forex Funds',
    date: 'Dec 2023'
  },
  {
    name: 'Viltaii',
    amount: '$4,746',
    firm: 'Topstep',
    date: 'Jul 2024'
  },
  {
    name: 'Tan Tran V.',
    amount: '$4,138',
    firm: 'True Forex Funds',
    date: 'Jan 2024'
  },
  {
    name: 'Viltaii',
    amount: '$4,372',
    firm: 'Topstep',
    date: '2024'
  },
  {
    name: 'Viltaii',
    amount: '$4,071',
    firm: 'Topstep',
    date: '2024'
  },
  {
    name: 'Viltaii',
    amount: '$3,639',
    firm: 'Topstep',
    date: '2024'
  },
  {
    name: 'Jorden M.',
    amount: '$3,747',
    firm: 'FTMO',
    date: 'Jan 2023'
  },
  {
    name: 'Viltaii',
    amount: '$2,833',
    firm: 'Topstep',
    date: '2024'
  },
  {
    name: 'Viltaii',
    amount: '$2,217',
    firm: 'Topstep',
    date: 'Jul 2024'
  },
  {
    name: 'Tan Tran V.',
    amount: '$2,065',
    firm: 'The Funded Trader',
    date: 'Nov 2023'
  },
  {
    name: 'Tan Tran V.',
    amount: '$1,788',
    firm: 'The Funded Trader',
    date: 'Nov 2023'
  },
  {
    name: 'Sz. Robert D.',
    amount: '$1,640',
    firm: 'FTMO',
    date: 'Jun 2022'
  },
  {
    name: 'Viltaii',
    amount: '$1,475',
    firm: 'Topstep',
    date: '2024'
  },
  {
    name: 'Tan Tran V.',
    amount: '$1,243',
    firm: 'The Funded Trader',
    date: 'Nov 2023'
  },
  {
    name: 'Viltaii',
    amount: '$1,016',
    firm: 'Topstep',
    date: 'Jul 2024'
  },
  {
    name: 'Tan Tran V.',
    amount: '$834',
    firm: 'The Funded Trader',
    date: 'Nov 2023'
  },
  {
    name: 'Athanasios C.',
    amount: '$804',
    firm: 'My Funded FX',
    date: 'Oct 2023'
  },
  {
    name: 'Viltaii',
    amount: '$694',
    firm: 'Topstep',
    date: 'Jul 2024'
  },
  {
    name: 'Tan Tran V.',
    amount: '$463',
    firm: 'The Funded Trader',
    date: 'Nov 2023'
  },
  {
    name: 'Tan Tran V.',
    amount: '$287',
    firm: 'The Funded Trader',
    date: 'Oct 2023'
  },
  {
    name: 'Tan Tran V.',
    amount: '$286',
    firm: 'The Funded Trader',
    date: 'Oct 2023'
  }
];

const filters = [
  'All',
  'FXify',
  'Fidelcrest',
  'Topstep',
  'Alpha Capital',
  'FTMO',
  'True Forex Funds',
  'The Funded Trader',
  'My Funded FX'
];

export function ResultsPage({ onNavigate }: ResultsPageProps) {
  const [selectedCert, setSelectedCert] = useState<CertData | null>(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredRecords =
    activeFilter === 'All'
      ? DISTRIBUTION_RECORDS
      : DISTRIBUTION_RECORDS.filter((r) => r.firm === activeFilter);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#E8E0D4] selection:bg-brave-accent/20 selection:text-white">
      <SiteNav currentPage="results" onNavigate={onNavigate} />

      <main className="w-full">
        {/* SECTION 1 — HERO */}
        <section className="max-w-[1280px] mx-auto text-center px-6 pt-32 pb-24">
          <span className="block mb-10 text-[10px] font-medium uppercase tracking-[3px] text-[#c4a87c]/80">
            Results
          </span>
          <h1 className="text-[72px] md:text-[96px] leading-[1] tracking-[-2.4px] font-normal font-serif text-[#e8e0d4] mb-8">
            Documented
            <br />
            <span className="text-[#6b6b6b]/80 italic">Trader Payouts.</span>
          </h1>
          <p className="max-w-[520px] mx-auto text-base leading-[26px] font-light text-[#6b6b6b] opacity-90 mb-24">
            A live record of member distributions, milestone achievements, and
            capital progression — produced within a structured performance
            framework.
          </p>

          <div className="py-12 border-y border-[#1c1c1c]/60">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12">
              <div className="flex flex-col items-start pl-8">
                <span className="mb-3 font-serif text-5xl leading-[48px] tabular-nums tracking-[-1.2px] text-white">
                  $256K+
                </span>
                <span className="text-[10px] font-medium uppercase tracking-[2px] text-[#6b6b6b]/70">
                  Total Verified Payouts
                </span>
              </div>
              <div className="flex flex-col items-start pl-8">
                <span className="mb-3 font-serif text-5xl leading-[48px] tabular-nums tracking-[-1.2px] text-white">
                  8
                </span>
                <span className="text-[10px] font-medium uppercase tracking-[2px] text-[#6b6b6b]/70">
                  Prop Firms Represented
                </span>
              </div>
              <div className="flex flex-col items-start pl-8">
                <span className="mb-3 font-serif text-5xl leading-[48px] tabular-nums tracking-[-1.2px] text-white">
                  $60K
                </span>
                <span className="text-[10px] font-medium uppercase tracking-[2px] text-[#6b6b6b]/70">
                  Largest Single Payout
                </span>
              </div>
              <div className="flex flex-col items-start pl-8">
                <span className="mb-3 font-serif text-5xl leading-[48px] tabular-nums tracking-[-1.2px] text-white">
                  $1M
                </span>
                <span className="text-[10px] font-medium uppercase tracking-[2px] text-[#6b6b6b]/70">
                  Largest Account Funded
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2 — TOP MEMBER PAYOUTS */}
        <section className="max-w-[1280px] mx-auto px-6 py-24">
          <span className="block text-[10px] font-medium uppercase tracking-[3px] text-[#c4a87c]/80 text-center mb-6">
            TOP DISTRIBUTIONS
          </span>
          <h2 className="font-serif text-5xl leading-[52px] tracking-[-1.2px] text-[#e8e0d4] text-center mb-4">
            Top Member <span className="italic text-[#c4a87c]">Payouts</span>
          </h2>
          <p className="text-sm text-[#6b6b6b] text-center mb-16 max-w-lg mx-auto">
            The highest verified withdrawals from our community — documented and
            confirmed.
          </p>

          <div className="border border-[#1c1c1c]/40 bg-[#0d0d0d]">
            <div className="grid grid-cols-1 md:grid-cols-3">
              {/* Card 1 - Arooj N. FXify $60,126 */}
              <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-[#1c1c1c]/40">
                <div className="flex items-center justify-between mb-12">
                  <span className="text-[9px] uppercase tracking-[2px] text-[#6b6b6b] border border-[#3a3a3a] px-3 py-1.5">
                    Verified
                  </span>
                  <span className="text-[10px] uppercase tracking-[2px] text-[#4a4a4a]">
                    May 2024
                  </span>
                </div>
                <p className="font-serif text-[64px] md:text-[72px] leading-[1] tabular-nums tracking-[-2px] text-white mb-8">
                  $60,126
                </p>
                <div className="w-full h-px bg-gradient-to-r from-[#c4a87c]/60 via-[#c4a87c]/30 to-transparent mb-6"></div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[2px] text-[#6b6b6b]">
                    Arooj N.
                  </span>
                  <span className="text-[10px] uppercase tracking-[2px] text-[#4a4a4a]">
                    FXify
                  </span>
                </div>
              </div>

              {/* Card 2 - Arooj N. Fidelcrest $44,450 */}
              <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-[#1c1c1c]/40">
                <div className="flex items-center justify-between mb-12">
                  <span className="text-[9px] uppercase tracking-[2px] text-[#6b6b6b] border border-[#3a3a3a] px-3 py-1.5">
                    Verified
                  </span>
                  <span className="text-[10px] uppercase tracking-[2px] text-[#4a4a4a]">
                    Feb 2024
                  </span>
                </div>
                <p className="font-serif text-[64px] md:text-[72px] leading-[1] tabular-nums tracking-[-2px] text-white mb-8">
                  $44,450
                </p>
                <div className="w-full h-px bg-gradient-to-r from-[#c4a87c]/60 via-[#c4a87c]/30 to-transparent mb-6"></div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[2px] text-[#6b6b6b]">
                    Arooj N.
                  </span>
                  <span className="text-[10px] uppercase tracking-[2px] text-[#4a4a4a]">
                    Fidelcrest
                  </span>
                </div>
              </div>

              {/* Card 3 - Masud A. Alpha Capital $10,994 */}
              <div className="p-8 md:p-10">
                <div className="flex items-center justify-between mb-12">
                  <span className="text-[9px] uppercase tracking-[2px] text-[#6b6b6b] border border-[#3a3a3a] px-3 py-1.5">
                    Verified
                  </span>
                  <span className="text-[10px] uppercase tracking-[2px] text-[#4a4a4a]">
                    Oct 2023
                  </span>
                </div>
                <p className="font-serif text-[64px] md:text-[72px] leading-[1] tabular-nums tracking-[-2px] text-white mb-8">
                  $10,994
                </p>
                <div className="w-full h-px bg-gradient-to-r from-[#c4a87c]/60 via-[#c4a87c]/30 to-transparent mb-6"></div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-[2px] text-[#6b6b6b]">
                    Masud A.
                  </span>
                  <span className="text-[10px] uppercase tracking-[2px] text-[#4a4a4a]">
                    Alpha Capital Group
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3 — VERIFIED CERTIFICATES */}
        <section className="max-w-[1280px] mx-auto px-6 py-24">
          <span className="block text-[10px] font-medium uppercase tracking-[3px] text-[#c4a87c]/80 text-center mb-6">
            ON-CHAIN PROOF
          </span>
          <h2 className="font-serif text-5xl tracking-[-1.2px] text-[#e8e0d4] text-center mb-4">
            Verified <span className="italic text-[#c4a87c]">Certificates</span>
          </h2>
          <p className="text-sm text-[#6b6b6b] text-center mb-16">
            Original withdrawal certificates from our members. Click any to
            inspect.
          </p>

          <div className="border border-[#1c1c1c]/40 bg-[#0d0d0d]">
            <div className="grid grid-cols-2 md:grid-cols-4">
              {CERTIFICATES.map((cert, idx) => (
                <div
                  key={cert.id}
                  className={`group cursor-pointer border-[#1c1c1c]/40 
                    ${idx >= 2 ? 'border-t' : ''} 
                    md:${idx >= 4 ? 'border-t' : ''} 
                    ${idx % 2 === 0 ? 'border-r' : ''} 
                    md:[&:not(:nth-child(4n))]:border-r 
                    md:[&:nth-child(4n)]:border-r-0`}
                  onClick={() => setSelectedCert(cert)}>
                  <div className="aspect-[4/3] bg-[#111]/50 flex items-center justify-center relative overflow-hidden">
                    {cert.src && (
                      <img 
                        src={cert.src} 
                        alt={`${cert.name} - ${cert.firm}`}
                        className="absolute inset-0 w-full h-full object-cover blur-md group-hover:blur-none transition-all duration-300"
                      />
                    )}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                      <button className="border border-[#c4a87c]/40 text-[10px] uppercase tracking-[2px] text-[#c4a87c] px-4 py-2 bg-[#0a0a0a]/80 backdrop-blur-sm hover:bg-[#c4a87c]/10 transition-colors">
                        View Certificate
                      </button>
                    </div>
                    {!cert.src && (
                      <span className="text-[10px] uppercase tracking-[3px] text-[#6b6b6b]/50 group-hover:opacity-0 transition-opacity duration-300 relative z-0">
                        Certificate
                      </span>
                    )}
                  </div>
                  <div className="p-4 flex items-center justify-between border-t border-[#1c1c1c]/40 bg-[#0d0d0d]">
                    <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3">
                      <span className="text-sm text-[#e8e0d4]">{cert.name}</span>
                      <span className="text-[10px] uppercase tracking-[1.5px] text-[#4a4a4a]">
                        {cert.firm}
                      </span>
                    </div>
                    <span className="font-serif text-xl text-[#c4a87c] tabular-nums">
                      {cert.amount}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4 — FIRM BREAKDOWN */}
        <section className="max-w-[1280px] mx-auto px-6 py-24">
          <span className="block text-[10px] font-medium uppercase tracking-[3px] text-[#c4a87c]/80 text-center mb-6">
            BY PROP FIRM
          </span>
          <h2 className="font-serif text-5xl tracking-[-1.2px] text-center text-[#e8e0d4] mb-4">
            Firm <span className="italic text-[#c4a87c]">Breakdown</span>
          </h2>
          <p className="text-sm text-[#6b6b6b] text-center mb-16">
            Our members operate across every leading prop firm in the industry.
          </p>

          <div className="border border-[#1c1c1c]/40 bg-[#0d0d0d]">
            {/* Row 1 */}
            <div className="grid grid-cols-2 md:grid-cols-4">
              <div className="p-6 md:p-8 border-r border-b md:border-b-0 border-[#1c1c1c]/40">
                <p className="text-[10px] uppercase tracking-[2px] text-[#c4a87c]/70 mb-3">
                  FXify
                </p>
                <p className="font-serif text-[36px] md:text-[42px] leading-[1] tabular-nums tracking-[-1px] text-white">
                  $141,538
                </p>
              </div>
              <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-[#1c1c1c]/40">
                <p className="text-[10px] uppercase tracking-[2px] text-[#c4a87c]/70 mb-3">
                  Fidelcrest
                </p>
                <p className="font-serif text-[36px] md:text-[42px] leading-[1] tabular-nums tracking-[-1px] text-white">
                  $44,450
                </p>
              </div>
              <div className="p-6 md:p-8 border-r border-b md:border-b-0 border-[#1c1c1c]/40">
                <p className="text-[10px] uppercase tracking-[2px] text-[#6b6b6b] mb-3">
                  Topstep
                </p>
                <p className="font-serif text-[36px] md:text-[42px] leading-[1] tabular-nums tracking-[-1px] text-white">
                  $26,063
                </p>
              </div>
              <div className="p-6 md:p-8 border-b md:border-b-0 border-[#1c1c1c]/40">
                <p className="text-[10px] uppercase tracking-[2px] text-[#6b6b6b] mb-3">
                  Alpha Capital
                </p>
                <p className="font-serif text-[36px] md:text-[42px] leading-[1] tabular-nums tracking-[-1px] text-white">
                  $10,994
                </p>
              </div>
            </div>
            {/* Row 2 */}
            <div className="grid grid-cols-2 md:grid-cols-4 border-t border-[#1c1c1c]/40">
              <div className="p-6 md:p-8 border-r border-[#1c1c1c]/40">
                <p className="text-[10px] uppercase tracking-[2px] text-[#6b6b6b] mb-3">
                  FTMO
                </p>
                <p className="font-serif text-[36px] md:text-[42px] leading-[1] tabular-nums tracking-[-1px] text-white">
                  $10,442
                </p>
              </div>
              <div className="p-6 md:p-8 border-r-0 md:border-r border-[#1c1c1c]/40">
                <p className="text-[10px] uppercase tracking-[2px] text-[#6b6b6b] mb-3">
                  True Forex Funds
                </p>
                <p className="font-serif text-[36px] md:text-[42px] leading-[1] tabular-nums tracking-[-1px] text-white">
                  $9,139
                </p>
              </div>
              <div className="p-6 md:p-8 border-r border-[#1c1c1c]/40">
                <p className="text-[10px] uppercase tracking-[2px] text-[#6b6b6b] mb-3">
                  The Funded Trader
                </p>
                <p className="font-serif text-[36px] md:text-[42px] leading-[1] tabular-nums tracking-[-1px] text-white">
                  $6,967
                </p>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-[10px] uppercase tracking-[2px] text-[#6b6b6b] mb-3">
                  My Funded FX
                </p>
                <p className="font-serif text-[36px] md:text-[42px] leading-[1] tabular-nums tracking-[-1px] text-white">
                  $804
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5 — COMPLETE DISTRIBUTION RECORD */}
        <section className="max-w-[1280px] mx-auto px-6 py-24">
          <span className="block text-[10px] font-medium uppercase tracking-[3px] text-[#c4a87c]/80 text-center mb-6">
            FULL ARCHIVE
          </span>
          <h2 className="font-serif text-5xl tracking-[-1.2px] text-center text-[#e8e0d4] mb-4">
            Complete{' '}
            <span className="italic text-[#c4a87c]">Distribution Record</span>
          </h2>
          <p className="text-sm text-[#6b6b6b] text-center mb-16">
            Every verified payout, listed by amount.
          </p>

          <div className="border border-[#1c1c1c]/40 overflow-hidden bg-[#0d0d0d]">
            {/* Filter tabs */}
            <div className="border-b border-[#1c1c1c]/40 px-6 py-4 flex flex-wrap gap-4 md:gap-8">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`text-[10px] uppercase tracking-[2px] transition-all duration-300 relative pb-1 ${
                    activeFilter === filter
                      ? 'text-[#e8e0d4] after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-[#c4a87c]/50'
                      : 'text-[#4a4a4a] hover:text-[#6b6b6b]'
                  }`}>
                  {filter}
                </button>
              ))}
            </div>

            {/* Column headers */}
            <div className="grid grid-cols-4 px-6 py-4 border-b border-[#1c1c1c]/30 bg-[#0a0a0a]/50">
              <span className="text-[10px] font-medium uppercase tracking-[2px] text-[#4a4a4a]">
                Member
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[2px] text-[#4a4a4a]">
                Amount
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[2px] text-[#4a4a4a]">
                Firm
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[2px] text-[#4a4a4a]">
                Date
              </span>
            </div>

            {/* Table rows */}
            <div className="max-h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-[#1c1c1c] scrollbar-track-transparent">
              {filteredRecords.map((record, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-4 px-6 py-4 border-b border-[#1c1c1c]/20 even:bg-[#111]/30 hover:bg-[#111]/80 transition-colors">
                  <span className="text-sm text-[#e8e0d4]">{record.name}</span>
                  <span className="font-serif text-base tabular-nums text-white">
                    {record.amount}
                  </span>
                  <span className="text-xs uppercase tracking-[1.5px] text-[#4a4a4a]">
                    {record.firm}
                  </span>
                  <span className="text-xs text-[#4a4a4a]">{record.date}</span>
                </div>
              ))}
            </div>

            {/* Grand Total Footer */}
            <div className="px-6 py-6 border-t border-[#1c1c1c]/40 bg-[#0a0a0a]/50 text-center">
              <p className="text-sm text-[#6b6b6b]">
                <span className="font-serif text-xl text-[#c4a87c] mr-2">
                  $256,933
                </span>
                verified and documented across 8 prop firms and multiple community
                members.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 6 — CTA */}
        <section className="max-w-[1280px] mx-auto px-6 py-24">
          <div className="relative max-w-[768px] mx-auto overflow-hidden bg-[#0d0d0d] border border-[#1c1c1c]/60 text-center p-24">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent"></div>
            <h2 className="relative font-serif text-4xl leading-[48px] tracking-[-1.2px] text-[#e8e0d4] mb-2">
              Unlock the
            </h2>
            <h2 className="relative font-serif text-4xl leading-[48px] tracking-[-1.2px] text-[#c4a87c] italic mb-8">
              Members Vault
            </h2>
            <p className="relative max-w-[400px] mx-auto text-sm leading-[22px] font-light text-[#6b6b6b] mb-10">
              Gain immediate access to the complete curriculum, live sessions, and
              the private performance environment.
            </p>
            <button className="relative font-semibold text-[10px] leading-[15px] uppercase tracking-[2.5px] text-[#0a0a0a] bg-[#e8e0d4] px-10 py-5 shadow-[0_0_20px_-5px_rgba(232,224,212,0.3)] border-0 cursor-pointer transition-all duration-300 hover:bg-white hover:shadow-[0_0_25px_-5px_rgba(232,224,212,0.5)]">
              Access The Vault
            </button>
          </div>
        </section>

        {/* DISCLAIMER */}
        <footer className="max-w-[1280px] mx-auto px-6 pb-24">
          <div className="max-w-[672px] mx-auto pt-16 border-t border-[#1c1c1c]/40 text-center">
            <p className="text-[10px] italic leading-[16.25px] text-[#4a4a4a] opacity-60 m-0">
              Past performance is not indicative of future results. Trading
              involves substantial risk of loss. All payouts shown are
              self-reported by members and independently verified where possible.
            </p>
          </div>
        </footer>

        {/* CERTIFICATE MODAL */}
        {selectedCert && (
          <div
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedCert(null)}>
            <div
              className="relative w-full max-w-[560px] bg-[#0d0d0d] border border-[#1c1c1c]/60 shadow-2xl"
              onClick={(e) => e.stopPropagation()}>
              {/* Close button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center border border-[#1c1c1c]/60 text-[#6b6b6b] hover:text-white transition-colors bg-[#0a0a0a] z-10">
                <X className="w-4 h-4" />
              </button>

              {/* Image area */}
              <div className="aspect-[4/3] bg-[#0a0a0a] flex flex-col items-center justify-center border-b border-[#1c1c1c]/60 overflow-hidden">
                {selectedCert.src ? (
                  <img
                    src={selectedCert.src}
                    alt={`${selectedCert.name} - ${selectedCert.firm}`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <>
                    <span className="font-serif text-2xl text-[#6b6b6b]/50">
                      Certificate Image
                    </span>
                    <span className="text-xs text-[#4a4a4a] mt-2">
                      Set <span className="text-[#c4a87c] font-bold">src</span> in the
                      CERTS array
                    </span>
                  </>
                )}
              </div>

              {/* Footer bar */}
              <div className="p-5 flex items-center gap-4">
                <span className="text-sm text-[#e8e0d4]">
                  {selectedCert.name}
                </span>
                <span className="text-[#1c1c1c]">|</span>
                <span className="text-[10px] uppercase tracking-[1.5px] text-[#4a4a4a]">
                  {selectedCert.firm}
                </span>
                <span className="text-[#1c1c1c]">|</span>
                <span className="font-serif text-xl text-[#c4a87c] tabular-nums">
                  {selectedCert.amount}
                </span>
                <span className="text-xs text-[#4a4a4a] ml-auto">
                  {selectedCert.date}
                </span>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}