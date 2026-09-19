import { ArrowRight, Play } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { finalCtaContent } from '@/data/landing'

export function FinalCtaSection() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
      <div className="relative overflow-hidden rounded-[20px] border border-border/20 bg-navy px-6 py-14 text-center sm:px-12 sm:py-16 md:px-16">
        {/* Subtle decorative background glow */}
        <div
          className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-96 rounded-full bg-emerald/15 blur-3xl"
          aria-hidden
        />

        <div className="relative z-10 mx-auto max-w-2xl">
          <p className="inline-flex items-center rounded-full border border-emerald/30 bg-emerald/15 px-3.5 py-1 text-[11px] font-semibold tracking-[0.08em] text-teal uppercase">
            {finalCtaContent.eyebrow}
          </p>

          <h2 className="mt-5 text-[32px] leading-[1.12] font-bold tracking-[-0.03em] text-white sm:text-[44px]">
            {finalCtaContent.heading}
          </h2>

          <p className="mt-4 text-[16px] leading-7 text-muted-foreground text-gray-300">
            {finalCtaContent.supporting}
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
            <Link to="/sign-up">
              <Button size="lg" className="w-full sm:w-auto bg-emerald text-white hover:bg-emerald-dark">
                {finalCtaContent.primaryCta}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <a href="#product">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-white/20 bg-white/5 text-white hover:bg-white/10 hover:text-white"
              >
                <Play className="h-3.5 w-3.5 fill-current" />
                {finalCtaContent.secondaryCta}
              </Button>
            </a>
          </div>

          <p className="mt-6 text-[12px] text-gray-400">
            No credit card required • Instant group setup • Cryptographic audit trails
          </p>
        </div>
      </div>
    </section>
  )
}
