import { Layers, Gavel, Users, BrainCircuit, ArrowUpRight } from 'lucide-react'
import { featuresContent } from '@/data/landing'

export function ProductFeatures() {
  const icons = [Layers, Gavel, Users, BrainCircuit]

  return (
    <section id="product" className="scroll-mt-24 mx-auto max-w-6xl px-5 py-16 md:py-20">
      <div className="max-w-2xl">
        <p className="inline-flex items-center rounded-full border border-emerald/20 bg-emerald/8 px-3.5 py-1 text-[11px] font-semibold tracking-[0.08em] text-emerald-dark uppercase">
          {featuresContent.eyebrow}
        </p>
        <h2 className="mt-4 text-[32px] leading-[1.15] font-bold tracking-[-0.03em] text-navy sm:text-[40px]">
          {featuresContent.heading}
        </h2>
        <p className="mt-4 text-[15.5px] leading-7 text-muted">
          {featuresContent.subtitle}
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {featuresContent.cards.map((card, index) => {
          const Icon = icons[index % icons.length]
          return (
            <div
              key={card.title}
              className="group relative flex flex-col justify-between rounded-[16px] border border-border bg-card p-6 shadow-(--shadow-card) transition-all duration-200 hover:-translate-y-1 hover:border-emerald/40 hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <div className="flex h-11 w-11 items-center justify-center rounded-[12px] border border-emerald/18 bg-emerald/8 text-emerald-dark transition-colors group-hover:bg-emerald group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="rounded-full border border-border bg-background px-2.5 py-0.5 text-[10.5px] font-semibold tracking-wide text-muted uppercase">
                    {card.tag}
                  </span>
                </div>

                <h3 className="mt-5 text-[17px] font-bold tracking-tight text-navy">
                  {card.title}
                </h3>
                <p className="mt-2.5 text-[13.5px] leading-6 text-muted">
                  {card.description}
                </p>
              </div>

              <div className="mt-6 border-t border-border/70 pt-4">
                <span className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-emerald-dark transition-colors group-hover:text-emerald">
                  {card.label}
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
