import { ArrowUpRight } from 'lucide-react'
import type { CollectionData } from '@/data/dashboard'

interface CollectionOverviewCardProps {
  collection: CollectionData
}

export function CollectionOverviewCard({ collection }: CollectionOverviewCardProps) {
  const maxVal = Math.max(...collection.trend.map((t) => t.collected), 35000)

  return (
    <article className="flex flex-col justify-between rounded-[16px] border border-border bg-card p-5 shadow-(--shadow-card)">
      <div>
        <div className="flex items-center justify-between gap-2 pb-3 border-b border-border">
          <div>
            <h3 className="text-base font-bold text-navy">Collection Overview</h3>
            <p className="text-xs text-muted">Cycle 8 pool accumulation</p>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full border border-emerald/20 bg-emerald/10 px-2.5 py-1 text-xs font-bold text-emerald-dark">
            <ArrowUpRight className="h-3.5 w-3.5" />
            {collection.percentage}% Collected
          </span>
        </div>

        {/* Progress summary */}
        <div className="mt-4">
          <div className="flex items-baseline justify-between text-xs font-semibold">
            <span className="text-navy">{collection.collectedAmount} collected</span>
            <span className="text-muted-foreground">{collection.pendingAmount} pending of {collection.totalTarget}</span>
          </div>

          <div className="mt-2.5 h-2.5 w-full overflow-hidden rounded-full bg-border">
            <div
              className="h-full rounded-full bg-emerald transition-all duration-500"
              style={{ width: `${collection.percentage}%` }}
            />
          </div>
        </div>

        {/* Weekly Trend Lightweight Visual SVG Chart */}
        <div className="mt-5">
          <p className="mb-2 text-[11px] font-semibold text-muted uppercase tracking-wider">
            Weekly Contribution Trend
          </p>

          <div className="flex h-32 items-end justify-between gap-3 rounded-[12px] border border-border bg-background p-3">
            {collection.trend.map((item) => {
              const heightPct = Math.round((item.collected / maxVal) * 100)
              return (
                <div key={item.label} className="flex flex-1 flex-col items-center justify-end h-full gap-1.5 group">
                  <span className="text-[10px] font-bold text-navy opacity-80 group-hover:opacity-100">
                    ₹{(item.collected / 1000).toFixed(0)}k
                  </span>
                  <div className="w-full max-w-[28px] rounded-t-md bg-emerald/20 transition-all group-hover:bg-emerald/30 relative flex flex-col justify-end overflow-hidden" style={{ height: '70%' }}>
                    <div
                      className="w-full bg-emerald transition-all rounded-t-md"
                      style={{ height: `${heightPct}%` }}
                    />
                  </div>
                  <span className="text-[10px] font-medium text-muted">{item.label}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between text-xs text-muted pt-3 border-t border-border">
        <span>Target: {collection.totalTarget}</span>
        <span className="font-semibold text-emerald-dark">On-track for Cycle 8</span>
      </div>
    </article>
  )
}
