import React from 'react';
import { ShieldCheck, Landmark, LockKeyhole } from 'lucide-react';

export const ComplianceStrip: React.FC = () => {
  return (
    <section className="bg-slate-50/70 border-b border-slate-200/80 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-slate-700">
          
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>Authorized Foreman Association Standard</span>
          </div>

          <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-slate-300" />

          <div className="flex items-center gap-2">
            <Landmark className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>State Chit Registrar Compliant Architecture</span>
          </div>

          <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-slate-300" />

          <div className="flex items-center gap-2">
            <LockKeyhole className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>Bank-Grade AES-256 Cloud Vault Encryption</span>
          </div>

        </div>
      </div>
    </section>
  );
};
