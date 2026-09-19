import { stats } from '@/data/landing'

export function StatsStrip() {
  return (
    <section className="mx-auto max-w-6xl px-5 pb-5">
      <div className="grid grid-cols-2 overflow-hidden rounded-[16px] border border-border bg-card shadow-(--shadow-card) md:grid-cols-4">
        {stats.map((stat, index) => (
          <article
            key={stat.label}
            className={`px-5 py-6 ${index % 2 === 1 ? 'border-l border-border' : ''} ${
              index > 1 ? 'border-t border-border md:border-t-0' : ''
            } ${index === 2 ? 'md:border-l' : ''}`}
          >
            <p className="text-[26px] leading-none font-bold tracking-tight text-navy sm:text-[30px]">
              {stat.value}
            </p>
            <p className="mt-2 text-[13px] leading-5 text-muted">{stat.label}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
