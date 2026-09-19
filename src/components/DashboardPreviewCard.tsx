import React, { useState } from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  Lock,
  ArrowUpRight,
  Users,
  Activity,
  FileCheck,
} from 'lucide-react';
import { RECENT_TXNS } from '../data/landingData';

export const DashboardPreviewCard: React.FC = () => {
  const [currentLowestBid, setCurrentLowestBid] = useState(115000);
  const [netPayout, setNetPayout] = useState(405000);
  const [dividend, setDividend] = useState(1711);
  const [isSimulatingBid, setIsSimulatingBid] = useState(false);

  // Allow clicking on the reverse auction box to simulate real-time auction bidding dynamics!
  const handleSimulateBid = () => {
    setIsSimulatingBid(true);
    setTimeout(() => {
      const discount = currentLowestBid >= 125000 ? 115000 : currentLowestBid + 2500;
      setCurrentLowestBid(discount);
      const pool = 520000;
      const commission = pool * 0.05; // 5% foreman commission = 26000
      const payout = pool - discount;
      const totalDividend = discount - commission;
      const dividendPerTicket = Math.round(totalDividend / 52);

      setNetPayout(payout);
      setDividend(dividendPerTicket);
      setIsSimulatingBid(false);
    }, 400);
  };

  return (
    <div className="relative w-full max-w-xl mx-auto lg:max-w-none">
      {/* Outer Glow & Background Aura */}
      <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-500/20 via-teal-500/10 to-indigo-500/15 rounded-3xl blur-xl opacity-70 pointer-events-none" />

      {/* Main Glass/Card Container */}
      <div className="relative rounded-2xl bg-white border border-slate-200/90 shadow-2xl p-5 md:p-6 transition-all duration-300">
        
        {/* Card Window Top Header */}
        <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-slate-100">
          <div className="flex items-center gap-3">
            {/* Window Traffic Dots */}
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
            </div>

            {/* Group Label */}
            <div className="flex items-center gap-2 bg-slate-900 text-white px-2.5 py-1 rounded-md text-xs font-semibold shadow-sm">
              <span>Swarna Pragati Chit #04</span>
              <span className="bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded text-[11px] font-normal flex items-center gap-1">
                <Users className="w-3 h-3 text-emerald-400" /> 52 Members
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-medium border border-emerald-200/80">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Cycle 8 of 25
            </span>
            <span className="text-slate-500 font-medium hidden sm:inline">
              Due in 4 days
            </span>
          </div>
        </div>

        {/* 3 Metric Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
          {/* Metric 1: Total Pool */}
          <div className="bg-slate-50/80 rounded-xl p-3 border border-slate-100">
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
              Total Pool
            </span>
            <div className="text-lg font-bold text-slate-900 mt-0.5 font-heading">
              ₹5,20,000
            </div>
            <div className="flex items-center gap-1 mt-1 text-[11px] text-emerald-600 font-medium">
              <Lock className="w-3 h-3" />
              <span>100% committed</span>
            </div>
          </div>

          {/* Metric 2: Cycle 8 Collected */}
          <div className="bg-slate-50/80 rounded-xl p-3 border border-slate-100">
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
              Cycle 8 Collected
            </span>
            <div className="text-lg font-bold text-slate-900 mt-0.5 font-heading">
              ₹4,68,000
            </div>
            {/* Progress Bar */}
            <div className="w-full bg-slate-200 h-1.5 rounded-full mt-2 overflow-hidden">
              <div className="bg-emerald-600 h-full rounded-full w-[90%]" />
            </div>
          </div>

          {/* Metric 3: Risk Telemetry */}
          <div className="bg-slate-50/80 rounded-xl p-3 border border-slate-100">
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
              Risk Telemetry
            </span>
            <div className="text-lg font-bold text-slate-900 mt-0.5 font-heading">
              3 Flagged
            </div>
            <div className="flex items-center gap-1.5 mt-1.5">
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-rose-50 text-rose-600 border border-rose-200">
                1 Crit
              </span>
              <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-50 text-amber-700 border border-amber-200">
                2 Mod
              </span>
            </div>
          </div>
        </div>

        {/* Middle Card: Live Reverse Auction #08 */}
        <div className="bg-gradient-to-b from-white to-slate-50/50 rounded-xl border border-slate-200 p-4 mb-4 shadow-sm relative overflow-hidden">
          {/* Header */}
          <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                Live Reverse Auction #08
              </span>
            </div>
            <span className="text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/70">
              Open for Sealed Bids • 38 Online
            </span>
          </div>

          {/* Auction Columns */}
          <div className="grid grid-cols-2 gap-4">
            {/* Left: Lowest Bid */}
            <div>
              <span className="text-[11px] font-medium text-slate-500 block">
                Current Lowest Bid (Discount)
              </span>
              <div className="text-xl sm:text-2xl font-black text-slate-900 mt-0.5 font-heading flex items-baseline gap-1">
                <span>₹{currentLowestBid.toLocaleString('en-IN')}</span>
                {isSimulatingBid && (
                  <span className="text-xs font-bold text-emerald-600 animate-pulse">
                    +new bid
                  </span>
                )}
              </div>
              <span className="text-[11px] text-slate-400 mt-0.5 block">
                Max bid ceiling: ₹1,56,000
              </span>
            </div>

            {/* Right: Net Winner Payout */}
            <div className="text-right">
              <span className="text-[11px] font-medium text-slate-500 block">
                Net Winner Payout
              </span>
              <div className="text-xl sm:text-2xl font-black text-emerald-600 mt-0.5 font-heading">
                ₹{netPayout.toLocaleString('en-IN')}
              </div>
              <span className="text-[11px] text-emerald-700 font-semibold mt-0.5 block">
                Dividend: ₹{dividend.toLocaleString('en-IN')} / ticket
              </span>
            </div>
          </div>

          {/* Interactive Bid Demo hint */}
          <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px]">
            <span className="text-slate-400 flex items-center gap-1">
              <Activity className="w-3 h-3 text-emerald-500" /> Real-time reverse bid tick
            </span>
            <button
              onClick={handleSimulateBid}
              disabled={isSimulatingBid}
              className="text-emerald-700 hover:text-emerald-800 font-semibold underline underline-offset-2 hover:no-underline transition active:scale-95 cursor-pointer"
            >
              Simulate Lower Bid ↓
            </button>
          </div>
        </div>

        {/* Section: Live Cryptographic Event Log */}
        <div className="bg-slate-50/60 rounded-xl p-3.5 border border-slate-200/80">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1">
              <FileCheck className="w-3 h-3 text-slate-400" />
              Live Cryptographic Event Log
            </span>
            <span className="text-[10px] text-slate-400">Block #18,492</span>
          </div>

          <div className="space-y-2 text-xs">
            {RECENT_TXNS.map((txn) => (
              <div
                key={txn.id}
                className="flex items-center justify-between p-2 rounded-lg bg-white border border-slate-100 shadow-2xs hover:border-slate-200 transition"
              >
                <div className="flex items-center gap-2">
                  {txn.type === 'deposit' ? (
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" />
                  ) : (
                    <ArrowUpRight className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" />
                  )}
                  <span className="font-mono text-[11px] font-bold text-slate-700">{txn.code}</span>
                  <span className="text-slate-600 font-medium">{txn.member}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span
                    className={`font-semibold font-mono ${
                      txn.type === 'deposit' ? 'text-emerald-600' : 'text-slate-900'
                    }`}
                  >
                    {txn.amount}
                  </span>
                  <span
                    className={`text-[10px] font-semibold px-1.5 py-0.5 rounded border ${
                      txn.type === 'deposit'
                        ? 'text-emerald-700 bg-emerald-50 border-emerald-200'
                        : 'text-blue-700 bg-blue-50 border-blue-200'
                    }`}
                  >
                    {txn.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating Verified & Foreman Badges */}
        <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
          {/* Foreman Bonding Safe Badge */}
          <div className="flex items-center gap-2 bg-emerald-50/80 border border-emerald-200/80 px-3 py-1.5 rounded-lg shadow-2xs">
            <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <div className="text-[11px] leading-tight">
              <span className="font-bold text-slate-900 block">Foreman Bonding Safe</span>
              <span className="text-emerald-700 font-medium text-[10px]">100% Reserve Escrow Enforced</span>
            </div>
          </div>

          {/* Cryptographically Verified Badge */}
          <div className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-300/80 px-2.5 py-1.5 rounded-lg uppercase tracking-wider flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            100% CRYPTOGRAPHICALLY VERIFIED
          </div>
        </div>

      </div>
    </div>
  );
};
