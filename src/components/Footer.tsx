import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200/90 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-14 border-b border-slate-100">
          
          {/* Brand Info */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center p-1.5 shadow-xs">
                <div className="grid grid-cols-2 gap-0.5 w-4 h-4">
                  <span className="w-1.5 h-1.5 rounded-[1px] bg-emerald-400"></span>
                  <span className="w-1.5 h-1.5 rounded-[1px] bg-emerald-600"></span>
                  <span className="w-1.5 h-1.5 rounded-[1px] bg-teal-500"></span>
                  <span className="w-1.5 h-1.5 rounded-[1px] bg-emerald-300"></span>
                </div>
              </div>
              <span className="text-lg font-extrabold tracking-tight text-slate-900 font-heading">
                Chit<span className="text-emerald-600">Ledger</span>
              </span>
            </div>

            <p className="text-sm text-slate-500 max-w-sm mb-5">
              Transparent savings. Smarter oversight.
            </p>

            {/* Compliance Badge */}
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 text-xs font-semibold border border-emerald-200/80">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>COMPLIANT WITH CHIT FUNDS ACT, INDIA</span>
            </div>
          </div>

          {/* Links: Platform */}
          <div className="md:col-span-2 sm:col-span-4">
            <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-4 font-mono">
              PLATFORM
            </span>
            <ul className="space-y-2.5 text-xs font-medium text-slate-600">
              <li>
                <a href="#product" className="hover:text-slate-900 transition-colors">
                  Automated Auction Engine
                </a>
              </li>
              <li>
                <a href="#product" className="hover:text-slate-900 transition-colors">
                  Dividend Distributions
                </a>
              </li>
              <li>
                <a href="#ai-risk-monitoring" className="hover:text-slate-900 transition-colors">
                  AI Risk &amp; Delinquency
                </a>
              </li>
            </ul>
          </div>

          {/* Links: Governance */}
          <div className="md:col-span-2 sm:col-span-4">
            <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-4 font-mono">
              GOVERNANCE
            </span>
            <ul className="space-y-2.5 text-xs font-medium text-slate-600">
              <li>
                <a href="#about" className="hover:text-slate-900 transition-colors">
                  State Registrar Filings
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-slate-900 transition-colors">
                  Cryptographic Audit Vault
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-slate-900 transition-colors">
                  Foreman Bonding
                </a>
              </li>
            </ul>
          </div>

          {/* Links: Institutional */}
          <div className="md:col-span-3 sm:col-span-4">
            <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block mb-4 font-mono">
              INSTITUTIONAL
            </span>
            <ul className="space-y-2.5 text-xs font-medium text-slate-600">
              <li>
                <a href="#about" className="hover:text-slate-900 transition-colors">
                  Security Architecture
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-slate-900 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-slate-900 transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} ChitLedger Technologies Pvt. Ltd. All rights reserved.
          </div>
          <div>
            Institutional chit fund administration &amp; regulatory compliance software.
          </div>
        </div>

      </div>
    </footer>
  );
};
