import Image from "next/image";
import VenturePortfolio from "@/components/VenturePortfolio";
import ContactModal from "@/components/ContactModal";

function HeroSection() {
  return (
    <section className="relative px-6 pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
      {/* Decorative Gradient Orbs */}
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-brand-cyan/15 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
      <div className="absolute top-1/3 -right-1/4 w-[32rem] h-[32rem] bg-brand-purple/15 blur-[140px] rounded-full mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-brand-pink/10 blur-[100px] rounded-full mix-blend-screen pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 text-center flex flex-col items-center">
        
        {/* Main 3D Brand Logo */}
        <div className="mb-8 relative group">
          <div className="absolute -inset-6 bg-gradient-to-r from-brand-cyan/25 via-brand-purple/25 to-brand-pink/25 rounded-3xl blur-2xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          <Image
            src="/logo.png"
            alt="Buy One Media Logo"
            width={300}
            height={309}
            className="w-40 sm:w-52 md:w-64 h-auto object-contain relative drop-shadow-[0_20px_35px_rgba(0,0,0,0.6)] group-hover:scale-105 transition-transform duration-500"
            priority
            unoptimized
          />
        </div>

        {/* Top Eyebrow Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-in text-xs sm:text-sm font-medium border border-white/10">
          <span className="w-2.5 h-2.5 rounded-full bg-brand-cyan animate-pulse" />
          <span className="text-zinc-300 font-mono uppercase tracking-wider text-xs">Buy One Media LLC · Multi-Disciplinary Holdings</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight mb-8 max-w-5xl leading-[1.1]">
          Two Decades of Operational Execution. <br className="hidden md:block" />
          The Vanguard of <span className="text-gradient">Intelligent Software & Media.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-3xl mb-10 leading-relaxed">
          Buy One Media engineers high-performance SaaS engines, autonomous voice AI infrastructure, mathematically verified book publishing imprints, and automated global commerce.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
          <a
            href="#portfolio"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-extrabold text-sm hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(255,255,255,0.2)] text-center"
          >
            Explore Venture Portfolio ↓
          </a>
          <a
            href="#solutions"
            className="w-full sm:w-auto px-8 py-4 rounded-full glass hover:bg-white/10 transition-colors duration-300 font-bold text-sm text-white text-center border border-white/10"
          >
            Our Capabilities
          </a>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl pt-8 border-t border-white/10 text-left">
          <div className="glass p-5 rounded-2xl border border-white/5">
            <div className="text-3xl sm:text-4xl font-black text-white mb-1">20+</div>
            <div className="text-xs font-mono uppercase tracking-wider text-brand-cyan">Years Operating</div>
            <div className="text-xs text-zinc-500 mt-1">Foundation established in 2002</div>
          </div>

          <div className="glass p-5 rounded-2xl border border-white/5">
            <div className="text-3xl sm:text-4xl font-black text-white mb-1">12+</div>
            <div className="text-xs font-mono uppercase tracking-wider text-brand-purple">Active Platforms</div>
            <div className="text-xs text-zinc-500 mt-1">SaaS, AI, Publishing & Media</div>
          </div>

          <div className="glass p-5 rounded-2xl border border-white/5">
            <div className="text-3xl sm:text-4xl font-black text-white mb-1">27+</div>
            <div className="text-xs font-mono uppercase tracking-wider text-brand-pink">Published Books</div>
            <div className="text-xs text-zinc-500 mt-1">Amazon KDP Certified Titles</div>
          </div>

          <div className="glass p-5 rounded-2xl border border-white/5">
            <div className="text-3xl sm:text-4xl font-black text-white mb-1">50-State</div>
            <div className="text-xs font-mono uppercase tracking-wider text-white">Tax Engine</div>
            <div className="text-xs text-zinc-500 mt-1">Automated payroll precision</div>
          </div>
        </div>

      </div>
    </section>
  );
}

function SolutionsSection() {
  const capabilities = [
    {
      badge: "SaaS Architecture",
      title: "Micro-SaaS & Calculation Engines",
      description: "Engineered platforms like Easy Stub (ezstubpro.com) that compute complex 50-state tax rules, format vector PDF stubs, and handle instant Stripe checkout with zero friction.",
      icon: (
        <svg className="w-6 h-6 text-brand-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      tech: ["Next.js Standalone", "SQLite WAL", "Stripe Checkout", "Vector PDF"]
    },
    {
      badge: "Autonomous Voice",
      title: "Real-Time AI Voice Agents",
      description: "Low-latency conversational voice receptionists (AI Contact & Aether Voice) capable of managing inbound phone lines, taking inquiries, qualification, and calendar dispatch 24/7.",
      icon: (
        <svg className="w-6 h-6 text-brand-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      ),
      tech: ["WebSocket Audio", "Sub-Second Latency", "CRM Automation", "Custom LLMs"]
    },
    {
      badge: "Publishing Imprints",
      title: "Cognitive Literature & Interactive Media",
      description: "Full-scale publishing operations spanning Brain Focus Books™ (27+ Calcudoku & Large Print titles on Amazon) and The Only Conclusion (interactive mystery universes with companion software).",
      icon: (
        <svg className="w-6 h-6 text-brand-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      tech: ["Amazon KDP", "Companion Web Apps", "Mathematical Validation", "Print Distribution"]
    },
    {
      badge: "Algorithmic Commerce",
      title: "Automated Merchandising & Yield Engines",
      description: "Automated e-commerce print-on-demand fulfillment through BOM Customs, collectibles intelligence via CardCollector AI, and programmatic affiliate optimization via EarnHQ.",
      icon: (
        <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
      tech: ["On-Demand Print", "Collectibles Intelligence", "Automated Routing", "Performance Marketing"]
    }
  ];

  return (
    <section id="solutions" className="py-24 px-6 relative bg-black/40 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
          <h2 className="text-xs font-bold tracking-widest text-brand-purple uppercase mb-3 font-mono">
            Core Engineering Pillars
          </h2>
          <h3 className="text-3xl md:text-5xl font-black tracking-tight mb-4">
            How We Build & Scale Platforms
          </h3>
          <p className="text-zinc-400 text-base md:text-lg">
            Every venture in the Buy One Media ecosystem is built on robust software architectures, zero-bloat execution, and resilient operational mechanics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {capabilities.map((item, idx) => (
            <div key={idx} className="glass p-8 sm:p-10 rounded-2xl hover:-translate-y-1.5 transition-transform duration-300 group border border-white/10 relative overflow-hidden">
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-white/5 text-zinc-300 border border-white/10">
                  {item.badge}
                </span>
              </div>

              <h4 className="text-2xl font-bold mb-3 text-white group-hover:text-brand-cyan transition-colors">
                {item.title}
              </h4>
              <p className="text-zinc-400 leading-relaxed mb-6 text-sm sm:text-base">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                {item.tech.map((t, tIdx) => (
                  <span key={tIdx} className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-black/60 text-zinc-400 border border-white/5">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

function LegacySection() {
  const milestones = [
    { 
      year: "2002", 
      title: "Live Entertainment & Crowd Dynamics", 
      desc: "Originated in high-volume live performance, DJ services, and event production—mastering human engagement, acoustics, and live crowd psychology." 
    },
    { 
      year: "2006", 
      title: "Hospitality & Venue Operations", 
      desc: "Scaled into brick-and-mortar hospitality and restaurant ownership, running strict inventory systems, supply chains, and customer experience." 
    },
    { 
      year: "2014", 
      title: "Hollywood Ventures Consolidated", 
      desc: "Founded Hollywood Ventures to unify operations, license media, and begin early investment in digital infrastructure and software tooling." 
    },
    { 
      year: "2020", 
      title: "E-Commerce & Print-on-Demand", 
      desc: "Built custom automated merchandise pipelines (BOM Customs) and digital asset frameworks, proving automated fulfillment models." 
    },
    { 
      year: "2024", 
      title: "Autonomous AI, SaaS & Book Imprints", 
      desc: "Launched Easy Stub (ezstubpro.com), Aether Voice/AI Contact, and established Brain Focus Books™ alongside The Only Conclusion mystery franchise." 
    },
    { 
      year: "Present", 
      title: "Buy One Media LLC", 
      desc: "A multi-disciplinary holding company orchestrating over 30 domains, proprietary SaaS tools, AI voice agents, and bestselling literature." 
    }
  ];

  return (
    <section id="legacy" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-xs font-bold tracking-widest text-brand-purple uppercase mb-3 font-mono">
              Our 20-Year Evolution
            </h2>
            <h3 className="text-3xl md:text-5xl font-black text-white">
              From Live Arenas to <span className="text-gradient">Digital Architectures.</span>
            </h3>
          </div>
          <p className="text-zinc-400 max-w-sm text-sm sm:text-base leading-relaxed">
            Our operational DNA is not theoretical. It was forged across two decades of real-world business ownership, audience engagement, and rigorous technical execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {milestones.map((item, idx) => (
            <div key={idx} className="glass p-7 rounded-2xl border border-white/10 hover:border-white/20 transition-all group relative">
              <div className="text-4xl sm:text-5xl font-black text-white/15 mb-2 group-hover:text-brand-cyan/40 transition-colors font-mono">
                {item.year}
              </div>
              <h5 className="text-lg font-bold mb-2 text-white group-hover:text-white transition-colors">
                {item.title}
              </h5>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section id="contact" className="py-28 px-6 relative overflow-hidden bg-black/60 border-t border-white/10">
      <div className="absolute inset-0 bg-brand-blue/10 blur-[120px] rounded-full scale-150 pointer-events-none" />
      <div className="max-w-4xl mx-auto text-center relative z-10 glass p-10 sm:p-16 md:p-20 rounded-3xl border border-white/20 shadow-2xl">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-purple/20 border border-brand-purple/40 text-brand-purple text-xs font-mono font-bold uppercase tracking-wider mb-6">
          <span className="w-2 h-2 rounded-full bg-brand-purple animate-pulse" />
          Partner With Buy One Media
        </div>
        <h2 className="text-3xl sm:text-5xl font-black mb-6 leading-tight">
          Ready to Deploy Intelligent Architectures?
        </h2>
        <p className="text-zinc-300 text-base sm:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          Whether you need enterprise AI voice systems, high-volume calculation platforms, or publishing distribution partnerships, connect directly with our leadership.
        </p>
        <ContactModal />
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <VenturePortfolio />
      <SolutionsSection />
      <LegacySection />
      <CTASection />
    </div>
  );
}
