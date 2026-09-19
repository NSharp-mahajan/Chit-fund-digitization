import { useState } from 'react'
import {
  Sparkles,
  AlertCircle,
  Clock,
  UserCheck,
  ShieldAlert,
  Info,
  ChevronDown,
  CheckCircle,
} from 'lucide-react'
import { aiRiskContent } from '@/data/landing'
import { Button } from '@/components/ui/button'

export function AiRiskSection() {
  const [showExplanation, setShowExplanation] = useState(true)

  const benefitIcons = [Clock, Sparkles, UserCheck]

  return (
    <section
      id="ai-risk-monitoring"
      className="scroll-mt-24 mx-auto max-w-6xl px-5 py-16 md:py-20"
    >
      <div id="ai-risk" className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
        {/* Left Column: Context & Benefits */}
        <div>
          <p className="inline-flex items-center rounded-full border border-indigo/20 bg-indigo/10 px-3.5 py-1 text-[11px] font-semibold tracking-[0.08em] text-indigo uppercase">
            {aiRiskContent.eyebrow}
          </p>
          <h2 className="mt-4 text-[32px] leading-[1.15] font-bold tracking-[-0.03em] text-navy sm:text-[40px]">
            {aiRiskContent.heading}
          </h2>
          <p className="mt-4 text-[16px] leading-7 text-muted">
            {aiRiskContent.supporting}
          </p>

          <div className="mt-8 space-y-4">
            {aiRiskContent.benefits.map((benefit, index) => {
              const Icon = benefitIcons[index % benefitIcons.length]
              return (
                <div
                  key={benefit.title}
                  className="flex items-start gap-3.5 rounded-[12px] border border-border bg-card p-4 shadow-xs"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-indigo/10 text-indigo">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="text-[14.5px] font-bold text-navy">
                      {benefit.title}
                    </h3>
                    <p className="mt-1 text-[13px] leading-5 text-muted">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Right Column: Realistic AI Risk Assessment Product Mockup */}
        <div className="rounded-[16px] border border-border bg-card p-5 shadow-(--shadow-preview) sm:p-6">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-border pb-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy font-semibold text-white text-[13px]">
                RS
              </div>
              <div>
                <p className="text-[15px] font-bold text-navy">
                  {aiRiskContent.mockup.member}
                </p>
                <p className="text-[11.5px] text-muted">
                  {aiRiskContent.mockup.series}
                </p>
              </div>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/20 bg-amber-500/10 px-2.5 py-1 text-[11px] font-bold text-amber-700">
              <ShieldAlert className="h-3.5 w-3.5" />
              {aiRiskContent.mockup.riskLevel}
            </span>
          </div>

          {/* Risk Metric Bar */}
          <div className="mt-5 rounded-[12px] border border-border bg-background p-4">
            <div className="flex items-center justify-between">
              <span className="text-[12px] font-semibold text-muted uppercase tracking-wider">
                Risk Index
              </span>
              <span className="font-mono text-[18px] font-bold text-navy">
                {aiRiskContent.mockup.riskScore}
              </span>
            </div>
            <div className="mt-2.5 h-2 w-full overflow-hidden rounded-full bg-border">
              <div
                className="h-full rounded-full bg-gradient-to-r from-emerald via-amber-500 to-rose-500"
                style={{ width: '64%' }}
              />
            </div>
            <div className="mt-2 flex justify-between text-[10px] font-medium text-muted-foreground">
              <span>0 (Low)</span>
              <span>50 (Moderate)</span>
              <span>100 (Critical)</span>
            </div>
          </div>

          {/* Identified Signals */}
          <div className="mt-4">
            <p className="text-[12px] font-semibold text-muted uppercase tracking-wider">
              Observed Risk Signals
            </p>
            <div className="mt-2.5 flex flex-wrap gap-2">
              {aiRiskContent.mockup.signals.map((signal) => (
                <span
                  key={signal}
                  className="inline-flex items-center gap-1.5 rounded-[8px] border border-rose-200 bg-rose-50 px-2.5 py-1 text-[12px] font-medium text-rose-700"
                >
                  <AlertCircle className="h-3.5 w-3.5 text-rose-500" />
                  {signal}
                </span>
              ))}
            </div>
          </div>

          {/* Explain Risk with AI Button & Output */}
          <div className="mt-5 rounded-[12px] border border-indigo/20 bg-indigo/5 p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-indigo">
                <Sparkles className="h-4 w-4" />
                <span className="text-[13px] font-bold text-navy">
                  AI Decision Support Explanation
                </span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="h-7 px-2.5 text-[11px] text-indigo hover:text-indigo"
                onClick={() => setShowExplanation(!showExplanation)}
              >
                {showExplanation ? 'Hide rationale' : aiRiskContent.mockup.buttonText}
                <ChevronDown
                  className={`h-3 w-3 transition-transform ${
                    showExplanation ? 'rotate-180' : ''
                  }`}
                />
              </Button>
            </div>

            {showExplanation && (
              <div className="mt-3 animate-in fade-in duration-200">
                <p className="text-[13px] leading-relaxed text-navy-soft">
                  {aiRiskContent.mockup.explanation}
                </p>
                <div className="mt-3 flex items-center gap-2 text-[11.5px] font-medium text-indigo">
                  <CheckCircle className="h-3.5 w-3.5" />
                  Signal grounded in Cycle 22 & 23 ledger transactions
                </div>
              </div>
            )}
          </div>

          {/* Explicit Decision-Support Disclaimer */}
          <div className="mt-4 flex items-start gap-2.5 rounded-[10px] border border-border bg-background p-3">
            <Info className="h-4 w-4 shrink-0 text-muted-foreground mt-0.5" />
            <p className="text-[11.5px] leading-5 text-muted">
              <strong className="text-navy font-semibold">Decision-Support Notice: </strong>
              {aiRiskContent.mockup.disclaimer}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
