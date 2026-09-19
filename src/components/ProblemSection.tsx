import React from 'react';
import { FileSpreadsheet, MessageSquareWarning, EyeOff } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  return (
    <section id="legacy-bottlenecks" className="py-20 md:py-24 bg-white border-b border-slate-200/80 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-bold tracking-widest text-rose-600 uppercase block mb-3 font-mono">
            THE LEGACY BOTTLENECK
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4 font-heading">
            Trust shouldn&apos;t depend on a spreadsheet.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Traditional chit groups rely on fragmented WhatsApp receipts, fragile Excel sheets, and handwritten ledger books. One delayed payment or disputed bid can fracture community trust.
          </p>
        </div>

        {/* 3 Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Card 1 */}
          <div className="bg-slate-50/70 border border-slate-200/90 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-slate-300 hover:shadow-sm transition-all group">
            <div>
              <div className="w-11 h-11 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600 mb-5 group-hover:scale-105 transition-transform">
                <FileSpreadsheet className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3 font-heading">
                Manual &amp; Fragile Records
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Lost physical diaries, corrupted local spreadsheets, and hours spent recalculating monthly dividend deductions by hand before each auction cycle.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-200/60 text-xs font-bold text-rose-600 font-mono tracking-wider">
              ✕ HIGH RISK OF HUMAN ERROR
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-50/70 border border-slate-200/90 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-slate-300 hover:shadow-sm transition-all group">
            <div>
              <div className="w-11 h-11 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600 mb-5 group-hover:scale-105 transition-transform">
                <MessageSquareWarning className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3 font-heading">
                Unclear &amp; Disputed Transactions
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Unverified UPI screenshots dumped into chat groups, offline cash ambiguity, and zero real-time transparency for members on who has actually cleared dues.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-200/60 text-xs font-bold text-rose-600 font-mono tracking-wider">
              ✕ DISPUTED PAYMENT TIMESTAMPS
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-slate-50/70 border border-slate-200/90 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-slate-300 hover:shadow-sm transition-all group">
            <div>
              <div className="w-11 h-11 rounded-xl bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-600 mb-5 group-hover:scale-105 transition-transform">
                <EyeOff className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-3 font-heading">
                Blind-Spot Risk Monitoring
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                No early warnings when a member&apos;s solvency slips, leaving organizers blindsided when a member defaults right after claiming a high-value chit prize.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-200/60 text-xs font-bold text-rose-600 font-mono tracking-wider">
              ✕ POST-PRIZE RECOVERY DEFAULTS
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
