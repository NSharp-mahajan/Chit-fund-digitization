import React, { useState } from 'react';
import {
  X,
  ShieldCheck,
  Users,
  ArrowRight,
  Info,
  CheckCircle2,
  Lock,
} from 'lucide-react';

interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectSandboxMode?: (mode: 'organiser' | 'member') => void;
}

export const SignInModal: React.FC<SignInModalProps> = ({
  isOpen,
  onClose,
  onSelectSandboxMode,
}) => {
  const [role, setRole] = useState<'organiser' | 'member'>('organiser');
  const [phone, setPhone] = useState('+91 98765 43210');
  const [ticketId, setTicketId] = useState('MEM-041');
  const [loginFeedback, setLoginFeedback] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleLaunchSession = (e: React.FormEvent) => {
    e.preventDefault();
    setLoginFeedback(
      role === 'organiser'
        ? 'Accessing Foreman Command Console (Prototype Sandbox)...'
        : 'Accessing Member Passbook & Bidding Console (Prototype Sandbox)...'
    );
    setTimeout(() => {
      onSelectSandboxMode?.(role);
      onClose();
      setLoginFeedback(null);
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/70">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center">
              <Lock className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 font-heading">
                Sign In to ChitLedger
              </h3>
              <p className="text-xs text-slate-500">
                Select your role to access the savings portal
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

        {/* Prototype Transparency Notice */}
        <div className="p-4 bg-amber-50/80 border-b border-amber-200/60 flex items-start gap-2.5 text-xs text-amber-900">
          <Info className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold block">Hackathon Prototype Mode</span>
            Backend database and SMS OTP authentication are scheduled for Phase 2. You can directly enter the prototype sandbox as either role.
          </div>
        </div>

        {/* Role Toggle */}
        <div className="p-6">
          <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100 rounded-xl mb-5 text-xs font-semibold">
            <button
              type="button"
              onClick={() => setRole('organiser')}
              className={`py-2 rounded-lg flex items-center justify-center gap-1.5 transition ${
                role === 'organiser'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Organiser</span>
            </button>
            <button
              type="button"
              onClick={() => setRole('member')}
              className={`py-2 rounded-lg flex items-center justify-center gap-1.5 transition ${
                role === 'member'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Users className="w-3.5 h-3.5 text-blue-600" />
              <span>Member</span>
            </button>
          </div>

          <form onSubmit={handleLaunchSession} className="space-y-4 text-xs">
            {role === 'organiser' ? (
              <>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Registered Foreman Mobile / Email
                  </label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full border border-slate-200 rounded-lg p-2.5 text-slate-900 focus:outline-none focus:border-emerald-500 font-mono"
                    required
                  />
                </div>
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-600">
                  <span className="font-bold text-slate-800 block mb-0.5">Assigned Group:</span>
                  <span>Swarna Pragati Chit #04 (52 Active Members)</span>
                </div>
              </>
            ) : (
              <>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Member Identifier / Phone
                  </label>
                  <input
                    type="text"
                    value={ticketId}
                    onChange={(e) => setTicketId(e.target.value)}
                    placeholder="MEM-041 or Mobile"
                    className="w-full border border-slate-200 rounded-lg p-2.5 text-slate-900 focus:outline-none focus:border-emerald-500 font-mono"
                    required
                  />
                </div>
                <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-600">
                  <span className="font-bold text-slate-800 block mb-0.5">Member Record:</span>
                  <span>Rahul Sharma • Ticket #19 (₹5L Scheme)</span>
                </div>
              </>
            )}

            {loginFeedback && (
              <div className="p-3 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 animate-spin" />
                <span>{loginFeedback}</span>
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2 shadow-sm transition active:scale-98 cursor-pointer text-xs"
            >
              <span>Launch {role === 'organiser' ? 'Organiser' : 'Member'} Portal</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};
