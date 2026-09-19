import React from 'react';
import { STATS_DATA } from '../data/landingData';

export const StatsStrip: React.FC = () => {
  return (
    <section className="relative py-10 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
          {STATS_DATA.map((stat, index) => (
            <div key={index} className="flex flex-col">
              <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-slate-600 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
