import React from 'react';
import {
  ArrowRight,
  Play,
  CheckCircle2,
  Scale,
  ShieldCheck,
  Lock,
} from 'lucide-react';
import { DashboardPreviewCard } from './DashboardPreviewCard';

interface HeroProps {
  onOpenDemo?: () => void;
  onGetStarted?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemo, onGetStarted }) => {
  return (
    <section className="relative pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden">
      {/* Soft radial emerald top background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-b from-emerald-100/60 via-teal-50/30 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 shadow-2xs text-xs font-semibold text-slate-700 mb-6 hover:border-emerald-300 transition-colors">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="tracking-wide">NEXT-GEN CHIT FUND &amp; SAVINGS OS</span>
              <span className="text-slate-300">•</span>
              <span className="text-emerald-700 flex items-center gap-1 font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Audited &amp; Tamper-Evident
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-slate-900 tracking-tight leading-[1.12] mb-6">
              Make Every Savings Group More{' '}
              <span className="text-emerald-600 underline decoration-emerald-300/40 underline-offset-4">
                Transparent.
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed mb-8 max-w-xl">
              ChitLedger brings member records, payments, auctions, and risk monitoring into one transparent digital ledger built for India&apos;s mutual financial communities.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-8">
              <button
                onClick={onGetStarted}
                className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-base px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all active:scale-[0.98] cursor-pointer"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenDemo}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-medium text-base px-6 py-3.5 rounded-xl shadow-sm hover:border-slate-300 transition-all active:scale-[0.98] cursor-pointer"
              >
                <Play className="w-4 h-4 text-emerald-600 fill-emerald-50" />
                <span>View Product Demo</span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-x-6 gap-y-2 text-xs font-medium text-slate-600 pt-2 border-t border-slate-200/60 w-full">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Scale className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Compliant with Chit Funds Act, 1982</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Lock className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Bank-grade cryptographic trail</span>
              </div>
            </div>

          </div>

          {/* Right Hero Dashboard Card */}
          <div className="lg:col-span-6 w-full">
            <DashboardPreviewCard />
          </div>

        </div>
      </div>
    </section>
  );
};
