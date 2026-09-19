import React, { useState } from 'react';
import {
  Users,
  Receipt,
  Gavel,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import { WORKFLOW_STEPS } from '../data/landingData';

interface HowItWorksProps {
  onExploreStep?: (stepIndex: number) => void;
}

export const HowItWorksSection: React.FC<HowItWorksProps> = ({ onExploreStep }) => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const getStepIcon = (step: number) => {
    switch (step) {
      case 1:
        return <Users className="w-5 h-5 text-emerald-600" />;
      case 2:
        return <Receipt className="w-5 h-5 text-emerald-600" />;
      case 3:
        return <Gavel className="w-5 h-5 text-emerald-600" />;
      case 4:
        return <CheckCircle2 className="w-5 h-5 text-emerald-600" />;
      default:
        return <Sparkles className="w-5 h-5 text-emerald-600" />;
    }
  };

  return (
    <section id="how-it-works" className="py-20 md:py-24 bg-white border-b border-slate-200/80 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-xs font-semibold text-emerald-800 mb-4 font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            LIFECYCLE WORKFLOW
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4 font-heading">
            From contributions to transparent payouts.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            One simple workflow for organisers and members to manage every savings cycle with confidence.
          </p>
        </div>

        {/* Stepper Progression Track for Desktop */}
        <div className="relative mb-6 hidden lg:block">
          <div className="absolute top-1/2 left-12 right-12 -translate-y-1/2 h-0.5 bg-slate-200 z-0" />
          <div
            className="absolute top-1/2 left-12 -translate-y-1/2 h-0.5 bg-emerald-500 transition-all duration-300 z-0"
            style={{ width: `${((activeStep - 1) / 3) * 85}%` }}
          />
          <div className="relative z-10 grid grid-cols-4 gap-4">
            {WORKFLOW_STEPS.map((stepItem) => {
              const isPassed = stepItem.step <= activeStep;
              return (
                <div key={stepItem.step} className="flex flex-col items-center">
                  <button
                    onClick={() => setActiveStep(stepItem.step)}
                    className={`w-9 h-9 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-all ${
                      isPassed
                        ? 'bg-emerald-600 text-white shadow-sm ring-4 ring-emerald-50'
                        : 'bg-white border border-slate-300 text-slate-500 hover:border-slate-400'
                    }`}
                  >
                    0{stepItem.step}
                  </button>
                  <span className="text-[11px] font-semibold text-slate-500 mt-2">
                    {stepItem.stepLabel}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4 Connected Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {WORKFLOW_STEPS.map((stepItem, index) => {
            const isCurrent = activeStep === stepItem.step;

            return (
              <div
                key={stepItem.step}
                onMouseEnter={() => setActiveStep(stepItem.step)}
                onClick={() => {
                  setActiveStep(stepItem.step);
                  onExploreStep?.(stepItem.step);
                }}
                className={`relative rounded-2xl p-6 sm:p-7 bg-white border transition-all duration-200 flex flex-col justify-between group cursor-pointer ${
                  isCurrent
                    ? 'border-emerald-500 shadow-md ring-1 ring-emerald-500/20'
                    : 'border-slate-200 hover:border-slate-300 shadow-subtle hover:shadow-card'
                }`}
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                      {getStepIcon(stepItem.step)}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                        {stepItem.stepLabel}
                      </span>
                      {index < 3 && (
                        <ChevronRight className="w-4 h-4 text-slate-300 hidden lg:block -mr-2" />
                      )}
                    </div>
                  </div>

                  {/* Step Title */}
                  <h3 className="text-lg font-bold text-slate-900 mb-2.5 font-heading">
                    {stepItem.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {stepItem.description}
                  </p>
                </div>

                {/* Bottom Illustrative Tag */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-medium text-slate-500 bg-slate-50 px-2.5 py-1 rounded-md border border-slate-200/60">
                    {stepItem.illustrativeTag}
                  </span>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform ${
                      isCurrent
                        ? 'text-emerald-600 translate-x-0.5'
                        : 'text-slate-400 group-hover:text-slate-600'
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile Stepper Indicator */}
        <div className="mt-8 text-center text-xs text-slate-500 lg:hidden">
          <span>Step {activeStep} of 4 • Tap any step card to preview workflow details</span>
        </div>

      </div>
    </section>
  );
};
