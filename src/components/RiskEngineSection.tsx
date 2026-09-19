import React, { useState } from 'react';
import {
  CheckCircle2,
  Clock,
  TrendingDown,
  FileText,
  Sparkles,
  ShieldAlert,
  Send,
  Lock,
} from 'lucide-react';

export const RiskEngineSection: React.FC = () => {
  const [noticeSent, setNoticeSent] = useState(false);
  const [holdApplied, setHoldApplied] = useState(false);

  return (
    <section id="ai-risk-monitoring" className="py-20 md:py-24 bg-white border-b border-slate-200/80 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Description & Value Props */}
          <div className="lg:col-span-6">
            <span className="text-xs font-bold tracking-widest text-emerald-600 uppercase block mb-3 font-mono">
              EXPLAINABLE DECISION SUPPORT
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-5 font-heading">
              Spot unusual behaviour before it becomes a problem.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-8">
              Our proprietary risk engine acts as an objective decision-support layer for organizers—flagging behavioral signals without false accusations or opaque black-box scoring.
            </p>

            {/* Checklist */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                </div>
                <div className="text-sm text-slate-700 leading-relaxed">
                  <strong className="font-semibold text-slate-900">Behavioral Aggression Metrics:</strong> Flags anomalous bid discounting inconsistent with income records.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-0.5 w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                </div>
                <div className="text-sm text-slate-700 leading-relaxed">
                  <strong className="font-semibold text-slate-900">Transparent Rationale:</strong> Every alert includes plain-English audit trails organizers can easily verify.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-0.5 w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                </div>
                <div className="text-sm text-slate-700 leading-relaxed">
                  <strong className="font-semibold text-slate-900">Respectful Safeguards:</strong> Keeps personal relationships intact through gentle automated payment reminders.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: AI Risk Assessment Live Card */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl bg-white border border-slate-200/90 shadow-xl p-5 sm:p-7">
              
              {/* Card Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b border-slate-100">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <span className="p-1 rounded bg-slate-100 text-slate-700">
                    <ShieldAlert className="w-4 h-4 text-emerald-600" />
                  </span>
                  <span>AI Risk Assessment • V2.4 Engine</span>
                </div>
                <span className="text-[11px] font-bold text-amber-800 bg-amber-50 border border-amber-200/80 px-2.5 py-1 rounded-full uppercase tracking-wider">
                  MODERATE CAUTION ZONE
                </span>
              </div>

              {/* Member Row */}
              <div className="flex items-center justify-between pb-5 mb-5 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-slate-900 text-white font-bold text-sm flex items-center justify-center font-mono">
                    RS
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-base font-bold text-slate-900 font-heading">
                        Rahul Sharma
                      </span>
                      <span className="text-[10px] font-bold font-mono px-1.5 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
                        MEM-041
                      </span>
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">
                      Prize Winner Eligible • Ticket #19 (₹5L Pool)
                    </div>
                  </div>
                </div>

                {/* Risk Gauge */}
                <div className="text-right">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    RISK INDEX
                  </span>
                  <div className="flex items-center gap-1.5 justify-end">
                    <span className="text-xl font-black text-slate-900 font-heading">
                      64<span className="text-xs font-medium text-slate-400">/100</span>
                    </span>
                    <div className="w-5 h-5 rounded-full border-2 border-amber-500 border-t-transparent flex items-center justify-center rotate-45">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Behavioral Signals */}
              <div className="mb-5">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-2.5">
                  OBSERVED BEHAVIORAL SIGNALS
                </span>
                
                <div className="space-y-2.5">
                  {/* Signal 1 */}
                  <div className="p-3 rounded-xl bg-slate-50/80 border border-slate-100">
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-900 mb-0.5">
                      <Clock className="w-3.5 h-3.5 text-rose-500 flex-shrink-0" />
                      <span>2 late payments in Cycles 6 &amp; 7</span>
                    </div>
                    <p className="text-xs text-slate-500 pl-5.5">
                      Average 6.4 days post-due lag observed relative to group average.
                    </p>
                  </div>

                  {/* Signal 2 */}
                  <div className="p-3 rounded-xl bg-slate-50/80 border border-slate-100">
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-900 mb-0.5">
                      <TrendingDown className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                      <span>Bid aggression spike in Cycle 7</span>
                    </div>
                    <p className="text-xs text-slate-500 pl-5.5">
                      Submitted extreme discount bid while installment balance was still marked unpaid.
                    </p>
                  </div>

                  {/* Signal 3 */}
                  <div className="p-3 rounded-xl bg-slate-50/80 border border-slate-100">
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-900 mb-0.5">
                      <FileText className="w-3.5 h-3.5 text-slate-500 flex-shrink-0" />
                      <span>Surety verification pending update</span>
                    </div>
                    <p className="text-xs text-slate-500 pl-5.5">
                      Employer payroll verification document dispatch overdue by 14 days.
                    </p>
                  </div>
                </div>

                {/* AI Explain Bar */}
                <div className="flex items-center justify-between text-xs pt-3 mt-1 text-slate-500">
                  <span className="flex items-center gap-1.5 text-emerald-700 font-semibold cursor-pointer hover:text-emerald-800">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                    Explain Risk with AI
                  </span>
                  <span className="text-slate-400 text-[11px]">Updated 22 mins ago</span>
                </div>
              </div>

              {/* Protocol Container */}
              <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-100">
                <div className="flex items-center gap-2 text-xs font-bold text-blue-900 uppercase tracking-wide mb-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-700" />
                  <span>SUGGESTED ORGANIZER PROTOCOL</span>
                </div>
                <p className="text-xs text-blue-950/80 leading-relaxed mb-3.5">
                  Send automated polite WhatsApp notice 48 hours prior to Cycle 8 auction gavel. Request installment settlement prior to accepting reverse bid submission. Do not disburse prize pool without verifying secondary guarantor signature.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-2.5">
                  <button
                    onClick={() => setNoticeSent(true)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-white px-3 py-2 rounded-lg shadow-sm transition active:scale-95 cursor-pointer"
                  >
                    <Send className="w-3 h-3" />
                    <span>{noticeSent ? 'WhatsApp Notice Sent ✓' : 'Send WhatsApp Notice'}</span>
                  </button>

                  <button
                    onClick={() => setHoldApplied(true)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 px-3 py-2 rounded-lg transition active:scale-95 cursor-pointer"
                  >
                    <Lock className="w-3 h-3 text-slate-500" />
                    <span>{holdApplied ? 'Guarantor Hold Active ✓' : 'Require Guarantor Hold'}</span>
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
