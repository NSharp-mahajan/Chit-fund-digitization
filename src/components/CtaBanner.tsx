import React from 'react';
import { ArrowRight, Zap, RefreshCw, Scale } from 'lucide-react';

interface CtaBannerProps {
  onOpenDemo?: () => void;
  onGetStarted?: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenDemo, onGetStarted }) => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dark Container */}
        <div className="relative rounded-3xl bg-[#09101d] text-white p-8 sm:p-12 md:p-16 border border-slate-800/80 shadow-2xl overflow-hidden text-center">
          
          {/* Subtle Ambient Radial Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Overline */}
          <span className="relative inline-block text-xs font-bold tracking-widest text-emerald-400 uppercase mb-4 font-mono">
            TRANSPARENT MODERN SAVINGS
          </span>

          {/* Heading */}
          <h2 className="relative text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-2xl mx-auto mb-4 font-heading">
            Bring transparency to every contribution.
          </h2>

          {/* Subtitle */}
          <p className="relative text-slate-300 text-base sm:text-lg max-w-xl mx-auto mb-9 leading-relaxed">
            Join forward-thinking organizers managing resilient, high-trust savings groups with ChitLedger.
          </p>

          {/* Buttons */}
          <div className="relative flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-10">
            <button
              onClick={onGetStarted}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-base px-7 py-3.5 rounded-xl shadow-lg shadow-emerald-950/40 transition active:scale-98 cursor-pointer"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenDemo}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800/90 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-white font-medium text-base px-6 py-3.5 rounded-xl transition active:scale-98 cursor-pointer"
            >
              <span>Schedule Live Organizer Demo</span>
            </button>
          </div>

          {/* Badges strip */}
          <div className="relative flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs font-medium text-slate-400 pt-6 border-t border-slate-800/80">
            <div className="flex items-center gap-2">
              <Zap className="w-3.5 h-3.5 text-emerald-400" />
              <span>Instant 5-minute setup</span>
            </div>
            <div className="flex items-center gap-2">
              <RefreshCw className="w-3.5 h-3.5 text-emerald-400" />
              <span>Full migration assistance from Excel/Tally</span>
            </div>
            <div className="flex items-center gap-2">
              <Scale className="w-3.5 h-3.5 text-emerald-400" />
              <span>Chit Funds Act 1982 Compliant</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
