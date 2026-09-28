'use client';

import { useState } from 'react';

type Category = 'all' | 'saas' | 'publishing' | 'commerce';

interface Venture {
  title: string;
  category: 'saas' | 'publishing' | 'commerce';
  badge: string;
  tagline: string;
  description: string;
  url: string;
  domain: string;
  highlights: string[];
  gradient: string;
  isExternal: boolean;
}

const VENTURES: Venture[] = [
  {
    title: 'Easy Stub',
    category: 'saas',
    badge: 'Payroll & Tax SaaS',
    tagline: 'Instant 50-State Pay Stub & Payroll Calculation Platform',
    description: 'High-precision payroll documentation generator computing exact federal and 50-state withholding with vector PDF rendering. Built for independent contractors, freelancers, and small business employers.',
    url: 'https://ezstubpro.com',
    domain: 'ezstubpro.com · ezstub.app',
    highlights: ['50-State Withholding Engine', 'Vector PDF Generation', 'Stripe Pay-As-You-Go'],
    gradient: 'from-blue-500/20 via-cyan-500/20 to-transparent',
    isExternal: true,
  },
  {
    title: 'Brain Focus Books™',
    category: 'publishing',
    badge: 'Amazon KDP Imprint',
    tagline: 'The Standard in Mathematical Logic & Puzzle Literature',
    description: 'Specialty publishing imprint with 27+ live volumes on Amazon KDP spanning Calcudoku/Mathdoku (4x4, 5x5, 6x6, Hard Logic), Senior Comfort Large-Print Word Searches, and cognitive workout journals.',
    url: 'https://brainfocusbooks.com',
    domain: 'brainfocusbooks.com',
    highlights: ['27+ Published Volumes', 'Senior Comfort Large Print', 'Mathematically Certified'],
    gradient: 'from-cyan-500/20 via-blue-500/20 to-transparent',
    isExternal: true,
  },
  {
    title: 'The Only Conclusion',
    category: 'publishing',
    badge: 'Interactive Mystery Universe',
    tagline: 'Immersive Historical Mystery Novels & Digital Companion Hub',
    description: 'Groundbreaking hybrid storytelling experience pairing historical mystery novels with real-time digital clue ledgers, evidence sheets, and interactive web verification tools (Case One: ALL HANDS, 1913).',
    url: 'https://theonlyconclusion.com',
    domain: 'theonlyconclusion.com',
    highlights: ['Case One: ALL HANDS (1913)', 'Interactive Clue Ledger', 'Digital Verification Engine'],
    gradient: 'from-purple-500/20 via-pink-500/20 to-transparent',
    isExternal: true,
  },
  {
    title: 'AI Contact / Aether Voice',
    category: 'saas',
    badge: 'Real-Time Voice AI',
    tagline: 'Autonomous Conversational Voice Agents & Inbound Call Triage',
    description: 'Enterprise-grade voice AI receptionists that handle live inbound calls, triage client requirements, and sync scheduling into business CRMs 24/7 with human-grade conversational latency.',
    url: 'https://aicontact.app',
    domain: 'aicontact.app · aicontact.io',
    highlights: ['Ultra-Low Latency Audio', 'Automated CRM Sync', '24/7 Phone Triage'],
    gradient: 'from-pink-500/20 via-purple-500/20 to-transparent',
    isExternal: true,
  },
  {
    title: 'Rent OS',
    category: 'saas',
    badge: 'Property Tech',
    tagline: 'Automated Property Management & Rental Operations Platform',
    description: 'Full-lifecycle rental operating system simplifying tenant lease agreements, digital payment tracking, unit maintenance dispatch, and portfolio management.',
    url: 'https://rentos.pro',
    domain: 'rentos.pro · rentos.store',
    highlights: ['Lease Lifecycle Tracking', 'Tenant Self-Service', 'Automated Notifications'],
    gradient: 'from-blue-600/20 via-indigo-500/20 to-transparent',
    isExternal: true,
  },
  {
    title: 'EarnHQ AI',
    category: 'saas',
    badge: 'Algorithmic Yield',
    tagline: 'AI-Driven Affiliate Intelligence & Monetization Systems',
    description: 'Autonomous digital marketing and monetization architecture that analyzes market niches, automates campaign scaling, and drives yield across digital asset portfolios.',
    url: 'https://earnhq.ai',
    domain: 'earnhq.ai',
    highlights: ['Market Intelligence', 'Automated Funnels', 'Revenue Optimization'],
    gradient: 'from-purple-600/20 via-pink-600/20 to-transparent',
    isExternal: true,
  },
  {
    title: 'Play-to-Earn Bible (P2E)',
    category: 'publishing',
    badge: 'Web3 Gaming Authority',
    tagline: 'Definitive Guidebook & Research Hub for Web3 Gaming',
    description: 'Authoritative published literature, tokenomic deep-dives, and digital intelligence hubs tracking the evolution of blockchain gaming, virtual economies, and digital asset ownership.',
    url: 'https://p2ebible.com',
    domain: 'p2ebible.com',
    highlights: ['192-Page Master Interior', 'Tokenomics Analysis', 'Digital Reference Hub'],
    gradient: 'from-cyan-600/20 via-blue-600/20 to-transparent',
    isExternal: true,
  },
  {
    title: 'BOM Customs',
    category: 'commerce',
    badge: 'Automated Print-on-Demand',
    tagline: 'High-Throughput Apparel Production & Merchandising Logistics',
    description: 'Automated e-commerce apparel and merchandise fulfillment pipeline connecting bespoke creative branding with on-demand digital printing, packaging, and global logistics.',
    url: 'https://bomcustoms.com',
    domain: 'bomcustoms.com',
    highlights: ['On-Demand Fulfillment', 'Custom Streetwear & Apparel', 'Automated Order Routing'],
    gradient: 'from-pink-600/20 via-rose-500/20 to-transparent',
    isExternal: true,
  },
  {
    title: 'CardCollector AI / Pack Rips',
    category: 'commerce',
    badge: 'Collectibles & Gaming',
    tagline: 'Interactive Trading Card Entertainment & Asset Valuation',
    description: 'Next-generation digital trading card experience combining simulated pack opening thrills, real-time sports/TCG market pricing, card grading indices, and live rip streams.',
    url: 'https://cardcollector.ai',
    domain: 'cardcollector.ai',
    highlights: ['Interactive Pack Opening', 'Market Price Trackers', 'Grading Condition Index'],
    gradient: 'from-purple-500/20 via-blue-500/20 to-transparent',
    isExternal: true,
  },
  {
    title: 'AI Tool Lab',
    category: 'saas',
    badge: 'AI R&D Lab',
    tagline: 'Curated AI Primitives, Agentic Workflows & Developer Tooling',
    description: 'Experimental proving ground where we incubate, test, and benchmark the latest artificial intelligence primitives, multimodal agents, and automation frameworks.',
    url: 'https://aitoollab.io',
    domain: 'aitoollab.io',
    highlights: ['Agentic Benchmarks', 'API Orchestration', 'Rapid Prototyping'],
    gradient: 'from-blue-500/20 via-cyan-500/20 to-transparent',
    isExternal: true,
  },
  {
    title: 'Sean Sandoval Author Works',
    category: 'publishing',
    badge: 'Creative Imprint',
    tagline: 'Creative Fiction, Business Insights & Historical Storytelling',
    description: 'The personal catalog and creative writing imprint of Sean Sandoval, encompassing investigative puzzle novels, tech entrepreneurship, and independent publications.',
    url: 'https://seansandoval.com',
    domain: 'seansandoval.com',
    highlights: ['Fiction & Non-Fiction', 'Original Novels', 'Media Strategy'],
    gradient: 'from-pink-500/20 via-purple-500/20 to-transparent',
    isExternal: true,
  },
  {
    title: 'Hollywood Ventures & Live Entertainment',
    category: 'commerce',
    badge: 'Founding Root (2002)',
    tagline: '20+ Years of High-Volume Live Events, Hospitality & Production',
    description: 'The foundational bedrock of our operational discipline. Two decades of mastering live entertainment, crowd acoustics, DJ performance, and hospitality venue operations.',
    url: '#legacy',
    domain: 'Live Operations Since 2002',
    highlights: ['High-Volume Event Execution', 'Crowd Dynamics', 'Hospitality Operations'],
    gradient: 'from-amber-500/20 via-orange-500/20 to-transparent',
    isExternal: false,
  },
];

export default function VenturePortfolio() {
  const [activeTab, setActiveTab] = useState<Category>('all');

  const filteredVentures = activeTab === 'all' 
    ? VENTURES 
    : VENTURES.filter(v => v.category === activeTab);

  const counts = {
    all: VENTURES.length,
    saas: VENTURES.filter(v => v.category === 'saas').length,
    publishing: VENTURES.filter(v => v.category === 'publishing').length,
    commerce: VENTURES.filter(v => v.category === 'commerce').length,
  };

  return (
    <section id="portfolio" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-brand-cyan text-xs font-mono font-bold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
            Buy One Media Holdings
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
            Our Ecosystem & <span className="text-gradient">Active Ventures</span>
          </h2>
          <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
            From automated tax software and autonomous voice AI to bestselling puzzle book catalogs and on-demand commerce, discover everything engineered by Buy One Media LLC.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
              activeTab === 'all'
                ? 'bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)] scale-105'
                : 'glass text-zinc-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <span>All Holdings</span>
            <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono ${activeTab === 'all' ? 'bg-black/10 text-black' : 'bg-white/10 text-zinc-300'}`}>
              {counts.all}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('saas')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
              activeTab === 'saas'
                ? 'bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-[0_0_25px_rgba(0,229,255,0.3)] scale-105'
                : 'glass text-zinc-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <span>SaaS & AI Systems</span>
            <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono ${activeTab === 'saas' ? 'bg-black/20 text-white' : 'bg-white/10 text-zinc-300'}`}>
              {counts.saas}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('publishing')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
              activeTab === 'publishing'
                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-[0_0_25px_rgba(213,0,249,0.3)] scale-105'
                : 'glass text-zinc-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <span>Publishing & Media Imprints</span>
            <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono ${activeTab === 'publishing' ? 'bg-black/20 text-white' : 'bg-white/10 text-zinc-300'}`}>
              {counts.publishing}
            </span>
          </button>

          <button
            onClick={() => setActiveTab('commerce')}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
              activeTab === 'commerce'
                ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-[0_0_25px_rgba(245,0,87,0.3)] scale-105'
                : 'glass text-zinc-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <span>Commerce & Live Entertainment</span>
            <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono ${activeTab === 'commerce' ? 'bg-black/20 text-white' : 'bg-white/10 text-zinc-300'}`}>
              {counts.commerce}
            </span>
          </button>
        </div>

        {/* Ventures Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVentures.map((v, idx) => (
            <div
              key={idx}
              className="glass p-7 rounded-2xl flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300 relative group overflow-hidden border border-white/10 hover:border-white/20"
            >
              {/* Background Ambient Glow */}
              <div className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${v.gradient} rounded-full blur-3xl pointer-events-none group-hover:scale-125 transition-transform duration-500`} />

              <div>
                {/* Card Top: Badge & Domain */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-white/5 border border-white/10 text-zinc-300">
                    {v.badge}
                  </span>
                  <span className="text-[11px] font-mono text-zinc-500 truncate max-w-[150px]">
                    {v.domain}
                  </span>
                </div>

                {/* Venture Title */}
                <h3 className="text-2xl font-black text-white group-hover:text-brand-cyan transition-colors mb-2">
                  {v.title}
                </h3>

                {/* Tagline */}
                <p className="text-xs font-semibold text-zinc-300 mb-3 tracking-wide">
                  {v.tagline}
                </p>

                {/* Description */}
                <p className="text-sm text-zinc-400 leading-relaxed mb-5">
                  {v.description}
                </p>

                {/* Feature Highlights Pills */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {v.highlights.map((h, hIdx) => (
                    <span
                      key={hIdx}
                      className="px-2.5 py-1 rounded-md text-[11px] bg-black/40 text-zinc-300 border border-white/5 font-medium"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Link Button */}
              <div className="pt-4 border-t border-white/5">
                {v.isExternal ? (
                  <a
                    href={v.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-bold transition-all group-hover:border-white/20 border border-transparent"
                  >
                    <span>Visit {v.title}</span>
                    <svg className="w-4 h-4 text-brand-cyan transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                ) : (
                  <a
                    href={v.url}
                    className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-bold transition-all group-hover:border-white/20 border border-transparent"
                  >
                    <span>Explore Legacy</span>
                    <svg className="w-4 h-4 text-brand-purple transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
