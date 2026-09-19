import { FileWarning, EyeOff, AlertTriangle } from 'lucide-react'
import { problemContent } from '@/data/landing'

export function ProblemSection() {
  const icons = [FileWarning, EyeOff, AlertTriangle]

  return (
    <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
      <div className="max-w-2xl">
        <p className="inline-flex items-center rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-[11px] font-semibold tracking-[0.08em] text-rose-700 uppercase">
          {problemContent.eyebrow}
        </p>
        <h2 className="mt-4 text-[32px] leading-[1.15] font-bold tracking-[-0.03em] text-navy sm:text-[40px]">
          {problemContent.heading}
        </h2>
        <p className="mt-4 text-[15.5px] leading-7 text-muted">
          {problemContent.supporting}
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {problemContent.cards.map((card, index) => {
          const Icon = icons[index % icons.length]
          return (
            <div
              key={card.title}
              className="group relative flex flex-col justify-between rounded-[16px] border border-border bg-card p-6 shadow-(--shadow-card) transition-all duration-200 hover:-translate-y-0.5 hover:border-rose-200 hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-[12px] border border-rose-200/70 bg-rose-50 text-rose-600 transition-colors group-hover:bg-rose-100/80">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="rounded-full border border-rose-200/60 bg-rose-50/70 px-2.5 py-0.5 text-[11px] font-medium text-rose-700">
                    {card.impactBadge}
                  </span>
                </div>

                <h3 className="mt-5 text-[18px] font-bold tracking-tight text-navy">
                  {card.title}
                </h3>
                <p className="mt-2.5 text-[14px] leading-6 text-muted">
                  {card.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-border/70 flex items-center gap-2 text-[12px] font-semibold text-rose-700/80">
                <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
                Legacy operational friction
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
