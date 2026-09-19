import React, { useState } from 'react';
import {
  X,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';

interface GetStartedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GetStartedModal: React.FC<GetStartedModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    foremanName: '',
    phone: '',
    groupName: 'Shree Mahalakshmi Chit Group',
    monthlyPool: '500000',
    memberCount: '25',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/70">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-bold">
              CL
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 font-heading">
                Launch Your Chit Group on ChitLedger
              </h3>
              <p className="text-xs text-slate-500">
                Authorized foreman registration &amp; group configuration
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

        {/* Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 font-heading">
                Chit Group Configuration Initialized!
              </h4>
              <p className="text-xs text-slate-600 max-w-xs mx-auto">
                Your sandbox ledger for <strong>{formData.groupName}</strong> has been seeded with 100% cryptographic tamper seals.
              </p>
              <div className="p-3 bg-slate-50 rounded-xl text-xs text-slate-600 border border-slate-200">
                <div className="flex justify-between py-1">
                  <span>Target Monthly Pool:</span>
                  <span className="font-bold text-slate-900">₹{Number(formData.monthlyPool).toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span>Cycle Duration:</span>
                  <span className="font-bold text-slate-900">{formData.memberCount} Months</span>
                </div>
                <div className="flex justify-between py-1">
                  <span>Compliance Standard:</span>
                  <span className="font-bold text-emerald-700">Chit Funds Act, 1982</span>
                </div>
              </div>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="w-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold py-2.5 rounded-lg transition"
              >
                Proceed to Ledger Preview
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Organizer / Foreman Full Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Hegde"
                    value={formData.foremanName}
                    onChange={(e) => setFormData({ ...formData, foremanName: e.target.value })}
                    className="w-full border border-slate-200 rounded-lg p-2.5 pl-3 text-slate-900 focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    WhatsApp Mobile Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full border border-slate-200 rounded-lg p-2.5 text-slate-900 focus:outline-none focus:border-emerald-500"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Group / Scheme Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.groupName}
                    onChange={(e) => setFormData({ ...formData, groupName: e.target.value })}
                    className="w-full border border-slate-200 rounded-lg p-2.5 text-slate-900 focus:outline-none focus:border-emerald-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Total Chit Pool (₹)
                  </label>
                  <select
                    value={formData.monthlyPool}
                    onChange={(e) => setFormData({ ...formData, monthlyPool: e.target.value })}
                    className="w-full border border-slate-200 rounded-lg p-2.5 text-slate-900 bg-white focus:outline-none focus:border-emerald-500"
                  >
                    <option value="250000">₹2,50,000</option>
                    <option value="500000">₹5,00,000</option>
                    <option value="1000000">₹10,00,000</option>
                    <option value="2500000">₹25,00,000</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Subscribers / Tickets
                  </label>
                  <select
                    value={formData.memberCount}
                    onChange={(e) => setFormData({ ...formData, memberCount: e.target.value })}
                    className="w-full border border-slate-200 rounded-lg p-2.5 text-slate-900 bg-white focus:outline-none focus:border-emerald-500"
                  >
                    <option value="20">20 Members (20 Cycles)</option>
                    <option value="25">25 Members (25 Cycles)</option>
                    <option value="40">40 Members (40 Cycles)</option>
                    <option value="50">50 Members (50 Cycles)</option>
                  </select>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center gap-2 text-[11px]">
                <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Zero setup fee. Automated dividend calculation &amp; WhatsApp reminders included.</span>
              </div>

              <button
                type="submit"
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 shadow-sm transition active:scale-98 cursor-pointer"
              >
                <span>Initialize Group Ledger</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
