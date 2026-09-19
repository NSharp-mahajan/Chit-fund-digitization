import { ShieldCheck } from 'lucide-react'
import { dashboardPreview } from '@/data/landing'

export function DashboardPreview() {
  const { collection, auction, activity, risk } = dashboardPreview
  const collectionPct = Math.round((collection.collected / collection.expected) * 100)

  return (
    <div
      id="product"
      className="rounded-[16px] border border-border bg-card p-4 shadow-(--shadow-preview) sm:p-5"
    >
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <p className="text-[11px] font-semibold tracking-[0.12em] text-muted uppercase">
            {dashboardPreview.groupName} • {dashboardPreview.series}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="hidden text-[11px] font-medium text-muted sm:inline">
            Live Auction
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald/20 bg-emerald/8 px-2 py-0.5 text-[10px] font-bold tracking-wide text-emerald-dark uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald" />
            {auction.status}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <article className="rounded-[12px] border border-border bg-background p-3.5">
          <p className="text-[11px] font-medium text-muted">Total Pool</p>
          <p className="mt-1.5 text-[22px] leading-none font-bold tracking-tight text-navy">
            {dashboardPreview.totalPool}
          </p>
        </article>
        <article className="rounded-[12px] border border-border bg-background p-3.5">
          <p className="text-[11px] font-medium text-muted">Cycle Collection</p>
          <p className="mt-1.5 text-[15px] leading-none font-bold tracking-tight text-navy">
            {collection.collected}/{collection.expected}{' '}
            <span className="text-[12px] font-medium text-muted">{collection.label}</span>
          </p>
          <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-border">
            <div className="h-full rounded-full bg-emerald" style={{ width: `${collectionPct}%` }} />
          </div>
        </article>
      </div>

      <article id="ai-risk" className="mt-3 rounded-[12px] border border-border p-3.5">
        <p className="text-[11px] font-medium text-muted">Risk Telemetry</p>
        <p className="mt-1.5 text-[20px] leading-none font-bold tracking-tight text-navy">
          {risk.value}{' '}
          <span className="text-[12px] font-medium text-muted">{risk.label}</span>
        </p>
        <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-border">
          <div className="h-full w-[12.4%] rounded-full bg-indigo" />
        </div>
      </article>

      <article className="mt-3 rounded-[12px] border border-border p-3.5">
        <p className="mb-3 text-[11px] font-medium text-muted">Live Reverse Auction</p>
        <ul className="space-y-2">
          {auction.bids.map((bid) => (
            <li key={bid.member} className="flex items-center justify-between gap-3">
              <span className="flex items-center gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-navy text-[10px] font-semibold text-white">
                  {bid.initials}
                </span>
                <span className="text-[13px] font-medium text-navy">{bid.member}</span>
              </span>
              <span className="text-[12.5px] font-semibold text-navy-soft">{bid.bid}</span>
            </li>
          ))}
        </ul>
      </article>

      <article className="mt-3 rounded-[12px] border border-border p-3.5">
        <p className="mb-2.5 text-[11px] font-medium text-muted">Recent Ledger Activity</p>
        <ul className="space-y-2">
          {activity.map((item) => (
            <li key={`${item.time}-${item.text}`} className="flex items-start gap-3 text-[12.5px]">
              <span className="w-[72px] shrink-0 font-mono text-[11px] text-muted-foreground">
                {item.time}
              </span>
              <span className="text-navy-soft">{item.text}</span>
            </li>
          ))}
        </ul>
      </article>

      <div className="mt-3 flex items-center justify-between gap-3 rounded-[12px] border border-emerald/18 bg-emerald/5 px-3 py-2.5">
        <p className="flex items-center gap-2 text-[12px] font-semibold text-emerald-dark">
          <ShieldCheck className="h-4 w-4" />
          Tamper-Evident
        </p>
        <p className="font-mono text-[11px] text-muted">{dashboardPreview.integrityHash}</p>
      </div>
    </div>
  )
}
