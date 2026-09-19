import React from 'react';
import { ShieldCheck, Users, CheckCircle2, ArrowRight } from 'lucide-react';
import { USER_ROLES } from '../data/landingData';

interface UserRolesSectionProps {
  onSelectRole?: (role: 'organiser' | 'member') => void;
}

export const UserRolesSection: React.FC<UserRolesSectionProps> = ({ onSelectRole }) => {
  return (
    <section id="roles" className="py-16 md:py-20 bg-slate-50/60 border-b border-slate-200/80 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-700 mb-3 shadow-2xs font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            ROLE-BASED GOVERNANCE
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-3 font-heading">
            Clear responsibilities for every participant.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Whether you administer the chit fund or save with your community, ChitLedger gives you the exact tools and transparency you need.
          </p>
        </div>

        {/* 2 Comparative Role Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {USER_ROLES.map((roleItem) => {
            const isOrganiser = roleItem.roleType === 'organiser';

            return (
              <div
                key={roleItem.role}
                className="bg-white rounded-2xl p-7 sm:p-8 border border-slate-200 shadow-subtle hover:shadow-card hover:border-slate-300 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Top Role Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform ${
                          isOrganiser
                            ? 'bg-emerald-50 border border-emerald-100 text-emerald-700'
                            : 'bg-blue-50 border border-blue-100 text-blue-700'
                        }`}
                      >
                        {isOrganiser ? (
                          <ShieldCheck className="w-6 h-6" />
                        ) : (
                          <Users className="w-6 h-6" />
                        )}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 font-heading">
                          {roleItem.role}
                        </h3>
                        <span className="text-xs font-medium text-slate-500">
                          {roleItem.subtitle}
                        </span>
                      </div>
                    </div>
                    <span
                      className={`text-[10px] font-bold px-2 py-1 rounded-md font-mono tracking-wider ${
                        isOrganiser
                          ? 'bg-slate-900 text-white'
                          : 'bg-slate-100 text-slate-700'
                      }`}
                    >
                      {roleItem.badge}
                    </span>
                  </div>

                  <p className="text-sm text-slate-600 mb-6">
                    {roleItem.summary}
                  </p>

                  {/* Bullet Responsibilities */}
                  <div className="space-y-3 pt-2">
                    {roleItem.responsibilities.map((resp, i) => (
                      <div key={i} className="flex items-start gap-3 text-sm text-slate-700">
                        <CheckCircle2
                          className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                            isOrganiser ? 'text-emerald-600' : 'text-blue-600'
                          }`}
                        />
                        <span className="leading-snug">{resp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA trigger */}
                <div className="mt-8 pt-5 border-t border-slate-100">
                  <button
                    onClick={() => onSelectRole?.(roleItem.roleType)}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-slate-900 hover:text-emerald-700 transition group-hover:translate-x-0.5 cursor-pointer"
                  >
                    <span>
                      {isOrganiser
                        ? 'Simulate Organiser View'
                        : 'Simulate Member Passbook'}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-emerald-600" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
