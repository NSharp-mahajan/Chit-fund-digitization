import { complianceItems } from '@/data/landing'

export function TrustStrip() {
  return (
    <section id="how-it-works" className="mx-auto max-w-6xl px-5 pt-1 pb-16">
      <div
        id="about"
        className="flex flex-col items-center justify-center gap-2 rounded-[16px] border border-border bg-card px-5 py-4 text-center shadow-(--shadow-card) sm:flex-row sm:flex-wrap sm:gap-x-3 sm:gap-y-1"
      >
        {complianceItems.map((item, index) => (
          <span key={item} className="flex items-center gap-3">
            {index > 0 ? (
              <span className="hidden h-1 w-1 rounded-full bg-muted-foreground/50 sm:block" />
            ) : null}
            <span className="text-[11px] font-semibold tracking-[0.12em] text-muted uppercase">
              {item}
            </span>
          </span>
        ))}
      </div>
    </section>
  )
}
