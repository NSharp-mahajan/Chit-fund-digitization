import { ArrowRight, Play } from 'lucide-react'
import { DashboardPreview } from '@/components/landing/DashboardPreview'
import { Button } from '@/components/ui/button'
import { heroContent } from '@/data/landing'

export function Hero() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 pt-12 pb-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14 lg:pt-16 lg:pb-10">
      <div>
        <p className="inline-flex max-w-full items-center rounded-full border border-emerald/18 bg-emerald/8 px-3.5 py-1 text-[10.5px] font-semibold tracking-[0.07em] text-emerald-dark uppercase">
          {heroContent.badge}
        </p>
        <h1 className="mt-5 max-w-[15ch] text-[40px] leading-[1.07] font-bold tracking-[-0.038em] text-navy sm:text-[52px] lg:text-[58px]">
          {heroContent.heading}
        </h1>
        <p className="mt-5 max-w-[34rem] text-[16px] leading-7 text-muted">
          {heroContent.supporting}
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Button size="lg">
            {heroContent.primaryCta}
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline">
            <Play className="h-3.5 w-3.5 fill-current" />
            {heroContent.secondaryCta}
          </Button>
        </div>
        <ul className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2">
          {heroContent.trustIndicators.map((item) => (
            <li key={item} className="flex items-center gap-2 text-[12.5px] text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald" />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <DashboardPreview />
    </section>
  )
}
