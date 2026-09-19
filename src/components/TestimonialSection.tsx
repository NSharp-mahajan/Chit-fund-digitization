import React from 'react';
import { Star } from 'lucide-react';

export const TestimonialSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-50/50 border-b border-slate-200/80 text-center scroll-mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 5 Green Stars */}
        <div className="flex items-center justify-center gap-1.5 mb-6 text-emerald-500">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-emerald-500 text-emerald-500" />
          ))}
        </div>

        {/* Quote */}
        <blockquote className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-snug mb-8 font-heading">
          &ldquo;ChitLedger reduced our month-end reconciliation time from 3 days to under 15 minutes, and our collection punctuality jumped to 98%.&rdquo;
        </blockquote>

        {/* Author & Org */}
        <div>
          <div className="text-base font-bold text-slate-900 font-heading">
            Vikramaditya Rao
          </div>
          <div className="text-sm font-medium text-slate-500 mt-0.5">
            Chief Foreman • Swarna Pragati Mutual Benefit Fund Group, Bangalore
          </div>
        </div>

      </div>
    </section>
  );
};
