import React from 'react';
import {
  BookOpenCheck,
  Gavel,
  Users,
  Cpu,
  ArrowRight,
} from 'lucide-react';

interface FeaturesGridProps {
  onSelectFeature?: (feature: string) => void;
}

export const FeaturesGrid: React.FC<FeaturesGridProps> = ({ onSelectFeature }) => {
  return (
    <section id="product" className="py-20 md:py-24 bg-slate-50/60 border-b border-slate-200/80 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-emerald-600 uppercase block mb-3 font-mono">
            THE OPERATING SYSTEM
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4 font-heading">
            One platform. Complete visibility.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Everything organizers and members need to run lawful, seamless, and mathematically transparent savings cycles.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Feature 1: Digital Ledger */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-subtle hover:shadow-card hover:border-emerald-300 transition-all flex flex-col justify-between group">
            <div>
              <div className="w-11 h-11 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 mb-5 group-hover:scale-105 transition-transform">
                <BookOpenCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3 font-heading">
                Digital Ledger
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Every contribution, penalty, and payout is immutably timestamped with tamper-evident cryptographic hash seals compliant with Indian evidence laws.
              </p>
            </div>
            <button
              onClick={() => onSelectFeature?.('Digital Ledger')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800 transition-colors pt-4 border-t border-slate-100 text-left group-hover:translate-x-0.5"
            >
              <span>Audit-ready export</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Feature 2: Smart Auctions */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-subtle hover:shadow-card hover:border-indigo-300 transition-all flex flex-col justify-between group">
            <div>
              <div className="w-11 h-11 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 mb-5 group-hover:scale-105 transition-transform">
                <Gavel className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3 font-heading">
                Smart Auctions
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Conduct reverse auctions with real-time sealed bidding, instant dividend calculation, and automated winner prize disbursement workflows.
              </p>
            </div>
            <button
              onClick={() => onSelectFeature?.('Smart Auctions')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-700 hover:text-indigo-800 transition-colors pt-4 border-t border-slate-100 text-left group-hover:translate-x-0.5"
            >
              <span>Sealed &amp; open modes</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Feature 3: Member Management */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-subtle hover:shadow-card hover:border-blue-300 transition-all flex flex-col justify-between group">
            <div>
              <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-5 group-hover:scale-105 transition-transform">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3 font-heading">
                Member Management
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Digital KYC, Aadhaar &amp; phone verification, automated WhatsApp reminders, and individual solvency payment timelines.
              </p>
            </div>
            <button
              onClick={() => onSelectFeature?.('Member Management')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 hover:text-blue-800 transition-colors pt-4 border-t border-slate-100 text-left group-hover:translate-x-0.5"
            >
              <span>Automated WhatsApp CRM</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Feature 4: AI Risk Monitoring */}
          <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-subtle hover:shadow-card hover:border-teal-300 transition-all flex flex-col justify-between group">
            <div>
              <div className="w-11 h-11 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600 mb-5 group-hover:scale-105 transition-transform">
                <Cpu className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3 font-heading">
                AI Risk Monitoring
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Non-judgmental behavioral pattern detection that spots overdue cycles, abnormal bid aggression, and liquidity anomalies before default.
              </p>
            </div>
            <button
              onClick={() => onSelectFeature?.('AI Risk Monitoring')}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-700 hover:text-teal-800 transition-colors pt-4 border-t border-slate-100 text-left group-hover:translate-x-0.5"
            >
              <span>Explainable Scoring</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
