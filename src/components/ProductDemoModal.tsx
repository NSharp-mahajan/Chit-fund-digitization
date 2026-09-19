import React, { useState } from 'react';
import {
  X,
  ShieldCheck,
  CheckCircle2,
  Calculator,
  Gavel,
  Hash,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

interface ProductDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProductDemoModal: React.FC<ProductDemoModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'calculator' | 'auction' | 'crypto'>('calculator');

  // Interactive Chit Dividend Calculator
  const [chitValue, setChitValue] = useState(500000);
  const [memberCount, setMemberCount] = useState(25);
  const [discountBid, setDiscountBid] = useState(120000);

  // Calculations
  const foremanCommission = chitValue * 0.05; // 5% statutory foreman fee
  const winnerPrize = chitValue - discountBid;
  const netDividendPool = discountBid - foremanCommission;
  const dividendPerMember = Math.max(0, Math.round(netDividendPool / memberCount));
  const netMonthlyInstallment = chitValue / memberCount - dividendPerMember;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Modal Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/70">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 font-heading">
                ChitLedger Interactive Sandbox
              </h3>
              <p className="text-xs text-slate-500">
                Test mathematical transparency &amp; tamper-evident logic
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg hover:bg-slate-200/70 text-slate-500 hover:text-slate-700 flex items-center justify-center transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 px-6 pt-2 bg-white text-xs font-semibold gap-4">
          <button
            onClick={() => setActiveTab('calculator')}
            className={`pb-3 border-b-2 flex items-center gap-1.5 transition ${
              activeTab === 'calculator'
                ? 'border-emerald-600 text-emerald-700'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <Calculator className="w-4 h-4" />
            <span>Dividend Math Engine</span>
          </button>

          <button
            onClick={() => setActiveTab('auction')}
            className={`pb-3 border-b-2 flex items-center gap-1.5 transition ${
              activeTab === 'auction'
                ? 'border-emerald-600 text-emerald-700'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <Gavel className="w-4 h-4" />
            <span>Reverse Auction Simulator</span>
          </button>

          <button
            onClick={() => setActiveTab('crypto')}
            className={`pb-3 border-b-2 flex items-center gap-1.5 transition ${
              activeTab === 'crypto'
                ? 'border-emerald-600 text-emerald-700'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <Hash className="w-4 h-4" />
            <span>Audit Trail &amp; Hash Seal</span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6">
          
          {/* TAB 1: CALCULATOR */}
          {activeTab === 'calculator' && (
            <div className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Total Chit Scheme Value
                  </label>
                  <select
                    value={chitValue}
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      setChitValue(val);
                      if (val === 200000) setMemberCount(20);
                      else if (val === 500000) setMemberCount(25);
                      else if (val === 1000000) setMemberCount(40);
                      else if (val === 2500000) setMemberCount(50);
                    }}
                    className="w-full text-sm font-semibold text-slate-900 border border-slate-200 rounded-lg p-2.5 bg-slate-50 focus:outline-none focus:border-emerald-500"
                  >
                    <option value={200000}>₹2,00,000 (20-Month Group)</option>
                    <option value={500000}>₹5,00,000 (25-Month Group)</option>
                    <option value={1000000}>₹10,00,000 (40-Month Group)</option>
                    <option value={2500000}>₹25,00,000 (50-Month Group)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Winning Discount Bid (Auction Discount)
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="range"
                      min={Math.round(chitValue * 0.05)}
                      max={Math.round(chitValue * 0.35)}
                      step={5000}
                      value={discountBid}
                      onChange={(e) => setDiscountBid(Number(e.target.value))}
                      className="w-full accent-emerald-600 cursor-pointer"
                    />
                    <span className="text-xs font-bold text-slate-900 font-mono w-24 text-right">
                      ₹{discountBid.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
              </div>

              {/* Real-time Math Output Card */}
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/90 space-y-3">
                <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-200">
                  <span className="text-slate-600">Standard Monthly Dues (Gross):</span>
                  <span className="font-bold text-slate-900 font-mono">
                    ₹{(chitValue / memberCount).toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-200">
                  <span className="text-slate-600">Foreman Statutory 5% Fee:</span>
                  <span className="font-bold text-slate-900 font-mono">
                    ₹{foremanCommission.toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-200">
                  <span className="text-emerald-700 font-medium">Distributed Dividend / Member:</span>
                  <span className="font-bold text-emerald-600 font-mono">
                    -₹{dividendPerMember.toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm pt-1 bg-white p-3 rounded-lg border border-emerald-200">
                  <div>
                    <span className="font-bold text-slate-900 block font-heading">
                      Actual Payable this Cycle:
                    </span>
                    <span className="text-[11px] text-slate-500">
                      Reduced thanks to auction dividend distribution
                    </span>
                  </div>
                  <span className="text-xl font-extrabold text-emerald-600 font-mono">
                    ₹{netMonthlyInstallment.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-emerald-50 text-emerald-800 text-xs border border-emerald-200">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Winner Receives Net Disbursal: <strong>₹{winnerPrize.toLocaleString('en-IN')}</strong></span>
                </div>
                <span className="text-[11px] font-semibold bg-emerald-100/80 px-2 py-0.5 rounded">
                  Chit Funds Act Compliant
                </span>
              </div>
            </div>
          )}

          {/* TAB 2: AUCTION SIMULATOR */}
          {activeTab === 'auction' && (
            <div className="space-y-4 text-xs">
              <div className="p-4 rounded-xl bg-slate-900 text-white">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-bold uppercase tracking-wider text-[11px] text-emerald-400">
                      Live Sealed Gavel Room
                    </span>
                  </div>
                  <span className="text-slate-400 font-mono">Timer: 00:03:42</span>
                </div>
                <p className="text-slate-300 mb-3">
                  Members submit cryptographic sealed discount quotes. Lowest acceptable discount takes the prize pot, and excess discount is distributed equally to all non-prized members.
                </p>
                <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-800">
                  <div>
                    <span className="text-slate-400 text-[10px] uppercase">Active Bidders</span>
                    <div className="text-base font-bold text-white">38 Participants</div>
                  </div>
                  <div>
                    <span className="text-slate-400 text-[10px] uppercase">Ceiling Cap</span>
                    <div className="text-base font-bold text-white">₹1,56,000 (30%)</div>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-slate-500 font-bold block">SAMPLE BID QUEUE (MASKED IDENTITY)</span>
                <div className="p-2.5 rounded-lg border border-slate-200 bg-white flex items-center justify-between">
                  <span>Bidder #T-09 • [Hash: 9b2d...4a1]</span>
                  <span className="font-bold text-slate-800 font-mono">Discount: ₹1,15,000</span>
                </div>
                <div className="p-2.5 rounded-lg border border-slate-200 bg-white flex items-center justify-between">
                  <span>Bidder #T-14 • [Hash: 3c8e...8f2]</span>
                  <span className="font-bold text-slate-800 font-mono">Discount: ₹1,12,500</span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: CRYPTO VAULT */}
          {activeTab === 'crypto' && (
            <div className="space-y-4 text-xs font-mono">
              <div className="p-3.5 rounded-xl bg-slate-900 text-slate-200 text-[11px] space-y-2">
                <div className="flex items-center justify-between text-emerald-400 border-b border-slate-800 pb-2">
                  <span>GENESIS HASH VERIFICATION</span>
                  <span>SHA-256</span>
                </div>
                <p className="text-slate-400 font-sans">
                  Each ledger entry is cryptographically signed and chained with the prior cycle root hash, ensuring zero unauthorized alterations.
                </p>
                <div className="p-2 bg-slate-950 rounded border border-slate-800 break-all text-slate-300">
                  Block #18,492: <br />
                  0x8f4c2e71d9a04b32098ca34b9d08e5e781190bc1f3498ac1459a9bc0d74112e8
                </div>
                <div className="flex items-center gap-2 text-emerald-400 font-sans text-xs">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>State Registrar Tamper-Evident Compliant</span>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-200/80 flex items-center justify-between">
          <span className="text-xs text-slate-500">
            Ready to digitize your savings circle?
          </span>
          <button
            onClick={onClose}
            className="inline-flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold px-4 py-2 rounded-lg transition"
          >
            <span>Close Sandbox</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
