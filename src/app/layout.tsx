import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Buy One Media LLC | Enterprise AI SaaS, Autonomous Voice & Media Holdings",
  description: "Buy One Media LLC operates a diversified portfolio of micro-SaaS platforms (Easy Stub), autonomous voice AI infrastructure (AI Contact), publishing imprints (Brain Focus Books, The Only Conclusion), and digital commerce ventures.",
  keywords: [
    "Buy One Media",
    "Easy Stub",
    "Brain Focus Books",
    "The Only Conclusion",
    "AI Contact",
    "Rent OS",
    "EarnHQ",
    "Autonomous Voice AI",
    "Pay Stub Generator",
    "Calcudoku Books"
  ],
  openGraph: {
    title: "Buy One Media LLC | Holdings & Technology Ecosystem",
    description: "Two decades of operational execution. Engineering intelligent SaaS, real-time voice AI, and bestselling literature.",
    url: "https://buyonemedia.com",
    siteName: "Buy One Media LLC",
    locale: "en_US",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${outfit.variable} antialiased bg-background text-foreground bg-gradient-mesh min-h-screen flex flex-col font-sans selection:bg-brand-cyan/30 selection:text-white`}>
        
        {/* Sticky Glassmorphism Navigation */}
        <header className="fixed top-0 w-full z-50 glass border-b border-white/10 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            
            {/* Logo Brand Mark */}
            <a href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-blue via-brand-purple to-brand-pink flex items-center justify-center font-black text-white text-base shadow-[0_0_20px_rgba(41,121,255,0.3)] group-hover:scale-105 transition-transform duration-300">
                B1
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight leading-none text-white">
                  BuyOne<span className="text-gradient">Media</span>
                </span>
                <span className="text-[10px] font-mono text-zinc-400 tracking-widest uppercase mt-0.5">
                  LLC · Holdings
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-8 font-semibold text-sm text-zinc-300">
              <a href="#portfolio" className="hover:text-brand-cyan transition-colors">Holdings & Ventures</a>
              <a href="#solutions" className="hover:text-brand-purple transition-colors">Capabilities</a>
              <a href="#legacy" className="hover:text-brand-pink transition-colors">Our Legacy</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </nav>

            {/* Action Button */}
            <div className="flex items-center gap-3">
              <a
                href="#portfolio"
                className="hidden sm:inline-flex px-5 py-2.5 rounded-full bg-white text-black font-extrabold text-xs hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]"
              >
                View Holdings
              </a>
              <a
                href="#contact"
                className="px-4 py-2.5 rounded-full glass hover:bg-white/10 text-white font-bold text-xs border border-white/10 transition-colors"
              >
                Get In Touch
              </a>
            </div>

          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-grow pt-20">
          {children}
        </main>

        {/* Comprehensive Portfolio Footer */}
        <footer className="glass border-t border-white/10 py-16 mt-20 relative">
          <div className="max-w-7xl mx-auto px-6">
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
              
              {/* Brand Summary */}
              <div className="md:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-blue via-brand-purple to-brand-pink flex items-center justify-center font-black text-white text-sm shadow-[0_0_15px_rgba(41,121,255,0.3)]">
                    B1
                  </div>
                  <span className="text-lg font-black text-white">BuyOne<span className="text-gradient">Media</span> LLC</span>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed max-w-sm mb-6">
                  Pioneering autonomous SaaS infrastructure, real-time AI voice receptionists, bestselling mathematical puzzle literature, and programmatic commerce.
                </p>
                <div className="text-xs font-mono text-zinc-500">
                  Registered Entity: Buy One Media LLC (Ohio)
                </div>
              </div>

              {/* SaaS & AI Platforms */}
              <div>
                <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-4 font-mono text-brand-cyan">
                  SaaS & AI Systems
                </h4>
                <ul className="space-y-2.5 text-sm text-zinc-400">
                  <li><a href="https://ezstubpro.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-cyan transition-colors">Easy Stub (ezstubpro.com)</a></li>
                  <li><a href="https://aicontact.app" target="_blank" rel="noopener noreferrer" className="hover:text-brand-cyan transition-colors">AI Contact (aicontact.app)</a></li>
                  <li><a href="https://rentos.pro" target="_blank" rel="noopener noreferrer" className="hover:text-brand-cyan transition-colors">Rent OS (rentos.pro)</a></li>
                  <li><a href="https://earnhq.ai" target="_blank" rel="noopener noreferrer" className="hover:text-brand-cyan transition-colors">EarnHQ AI (earnhq.ai)</a></li>
                  <li><a href="https://aitoollab.io" target="_blank" rel="noopener noreferrer" className="hover:text-brand-cyan transition-colors">AI Tool Lab (aitoollab.io)</a></li>
                </ul>
              </div>

              {/* Publishing & Literature */}
              <div>
                <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-4 font-mono text-brand-purple">
                  Publishing Imprints
                </h4>
                <ul className="space-y-2.5 text-sm text-zinc-400">
                  <li><a href="https://brainfocusbooks.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-purple transition-colors">Brain Focus Books™</a></li>
                  <li><a href="https://theonlyconclusion.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-purple transition-colors">The Only Conclusion</a></li>
                  <li><a href="https://p2ebible.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-purple transition-colors">Play-to-Earn Bible</a></li>
                  <li><a href="https://seansandoval.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-purple transition-colors">Sean Sandoval Author</a></li>
                </ul>
              </div>

              {/* Commerce & Enterprise */}
              <div>
                <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-4 font-mono text-brand-pink">
                  Commerce & Production
                </h4>
                <ul className="space-y-2.5 text-sm text-zinc-400">
                  <li><a href="https://bomcustoms.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-pink transition-colors">BOM Customs</a></li>
                  <li><a href="https://cardcollector.ai" target="_blank" rel="noopener noreferrer" className="hover:text-brand-pink transition-colors">CardCollector AI</a></li>
                  <li><a href="#legacy" className="hover:text-brand-pink transition-colors">Hollywood Ventures (2002)</a></li>
                  <li><a href="#contact" className="hover:text-brand-pink transition-colors">Architecture Consultation</a></li>
                </ul>
              </div>

            </div>

            {/* Bottom Copyright & Legal */}
            <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
              <p>© {new Date().getFullYear()} Buy One Media LLC. All rights reserved.</p>
              <div className="flex items-center gap-6">
                <a href="#portfolio" className="hover:text-zinc-300 transition-colors">Ventures</a>
                <a href="#solutions" className="hover:text-zinc-300 transition-colors">Capabilities</a>
                <a href="#legacy" className="hover:text-zinc-300 transition-colors">Legacy</a>
                <a href="#contact" className="hover:text-zinc-300 transition-colors">Contact</a>
              </div>
            </div>

          </div>
        </footer>

      </body>
    </html>
  );
}
