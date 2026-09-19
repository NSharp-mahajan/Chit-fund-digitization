import { UserPlus, Receipt, Gavel, CheckCircle2, ArrowRight } from 'lucide-react'
import { howItWorksContent } from '@/data/landing'

export function HowItWorks() {
  const stepIcons = [UserPlus, Receipt, Gavel, CheckCircle2]

  return (
    <section id="how-it-works" className="scroll-mt-24 mx-auto max-w-6xl px-5 py-16 md:py-20">
      <div className="max-w-2xl">
        <p className="inline-flex items-center rounded-full border border-emerald/20 bg-emerald/8 px-3.5 py-1 text-[11px] font-semibold tracking-[0.08em] text-emerald-dark uppercase">
          {howItWorksContent.eyebrow}
        </p>
        <h2 className="mt-4 text-[32px] leading-[1.15] font-bold tracking-[-0.03em] text-navy sm:text-[40px]">
          {howItWorksContent.heading}
        </h2>
        <p className="mt-4 text-[15.5px] leading-7 text-muted">
          {howItWorksContent.subtitle}
        </p>
      </div>

      {/* Desktop & Mobile Steps Grid */}
      <div className="mt-14 relative">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 relative">
          {howItWorksContent.steps.map((step, index) => {
            const Icon = stepIcons[index % stepIcons.length]
            const isLast = index === howItWorksContent.steps.length - 1

            return (
              <div key={step.number} className="relative flex flex-col">
                <div className="relative flex flex-1 flex-col justify-between rounded-[16px] border border-border bg-card p-6 shadow-(--shadow-card) transition-all duration-200 hover:-translate-y-1 hover:border-emerald/30">
                  <div>
                    {/* Header: Step Number & Icon */}
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[12px] font-bold tracking-wider text-emerald-dark bg-emerald/10 px-2.5 py-1 rounded-[8px] border border-emerald/20">
                        {step.number}
                      </span>
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-background border border-border text-navy">
                        <Icon className="h-4 w-4 text-navy-soft" />
                      </div>
                    </div>

                    {/* Step Title & Details */}
                    <h3 className="mt-5 text-[17px] font-bold tracking-tight text-navy">
                      {step.title}
                    </h3>
                    <p className="mt-2.5 text-[13.5px] leading-6 text-muted">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center gap-2 pt-3 border-t border-border/60">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald" />
                    <span className="text-[11.5px] font-medium text-muted">
                      {index === 0 && 'Setup & Membership'}
                      {index === 1 && 'Installment Ledger'}
                      {index === 2 && 'Deterministic Bidding'}
                      {index === 3 && 'Ledger Seal & Payout'}
                    </span>
                  </div>
                </div>

                {/* Connecting arrow for desktop between cards */}
                {!isLast && (
                  <div className="hidden lg:flex absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 h-7 w-7 items-center justify-center rounded-full border border-border bg-card text-muted-foreground shadow-xs">
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
